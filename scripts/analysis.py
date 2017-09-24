# coding=utf-8
import json
import watson_developer_cloud
import watson_developer_cloud.natural_language_understanding.features.v1 as Features
import re;
import datetime;
from googlemaps import Client as GoogleMaps

def analysis(text):
    natural_language_understanding = watson_developer_cloud.NaturalLanguageUnderstandingV1(
      username="",
      password="",
      version="2017-09-22")

    # text = "IBM (http://www.ibm.com) is an American multinational technology company headquartered in Armonk, New York, United States, with operations in over 170 countries. It will hold a Career Fair on tomorrow from 2:00AM to 3:00PM"
    # text = "We are pleased to announce that we are now accepting poster proposals for consideration to the Data Science Conference (www.dsconference.rice.edu) The poster session, to be held on tomorrow 16:00 - 18:00 p.m., is a unique networking opportunity for students. This will take place at RMC, Rice University, Houston, Texas."
    # text = "9/23/2017 is the third installment of Houston Food Tour! Catch a ride to for a delicious meal, an opportunity to get some shopping done, and as always, fun with friends from America and around the world! Someone from Korea will share a little about Korean cuisine! We will meet at China Town, Houston. The activity will start at 7:00PM and will go back before 9:00PM."

    response = natural_language_understanding.analyze(
      text=text,
      features=[
        Features.Keywords(
            sentiment=True,
            limit=5
          # emotion=True,
        ),
        Features.Entities(
          sentiment=True,
          # limit=5
        )
      ]
    )

    today = datetime.date.today()
    year = int(today.year)
    month = int(today.month)
    day = int(today.day)

    # 2017-9-23
    # 9/23/2017
    # tomorrow
    regexDate = re.findall(r'\d+\S\d+\S\d+', text)
    if (len(regexDate)):
        date = regexDate[0]
        date1 = date.split('-')
        date2 = date.split('/')
        if (len(date1) != 1):
            year = int(date1[0])
            month = int(date1[1])
            day = int(date1[2])
        if (len(date2) != 1):
            year = int(date2[2])
            month = int(date2[0])
            day = int(date2[1])
    else:
        regexDate = re.findall(r'tomorrow', text)
        if (len(regexDate)):
            day += 1

    # 2:00 - 3:00
    # 2:00AM - 3:00PM
    regexDate = re.findall(r'\d:\d\dAM|\d\d:\d\dAM|\d:\d\dPM|\d\d:\d\dPM', text)
    if (len(regexDate) == 2):
        startTime = regexDate[0]
        endTime = regexDate[1]
        time1 = startTime.split(':')
        time2 = endTime.split(':')
        if (time1[1][len(time1[1])-2:len(time1[1])] == "PM"):
            startHour = int(time1[0]) + 12
        else:
            startHour = int(time1[0])
        startMin = int(time1[1][0:len(time1[1])-2])
        if (time2[1][len(time2[1])-2:len(time2[1])] == "PM"):
            endHour = int(time2[0]) + 12
        else:
            endHour = int(time2[0])
        endMin = int(time2[1][0:len(time2[1])-2])
    else:
        regexDate = re.findall(r'\d:\d\d|\d\d:\d\d', text)
        if (len(regexDate) == 2):
            startTime = regexDate[0]
            endTime = regexDate[1]
            time1 = startTime.split(':')
            time2 = endTime.split(':')
            startHour = int(time1[0])
            startMin = int(time1[1])
            endHour = int(time2[0])
            endMin = int(time2[1])

    # keywords, location
    # print(json.dumps(response, indent=2))
    entities = response['entities']
    keywords = response['keywords']
    keywordsList = []
    positionList = []
    for i in range(len(keywords)):
        keyword = keywords[i]
        keywordsList.append(keyword['text'])
    for i in range(len(entities)):
        entity = entities[i]
        if (entity['type'] == "Location"):
            positionList.append(entity['text'])
        else:
            if 'disambiguation' in entity:
                subtype = entity['disambiguation']['subtype']
                for j in range(len(subtype)):
                    if subtype[j] == "Location":
                        positionList.append(entity['text'])
                        break

    gmaps = GoogleMaps("AIzaSyDw5pVvqp1Y3mmiFgrFkouqxJGKiHn4C7k")
    # address = 'Constitution Ave NW & 10th St NW, Washington, DC'

    date = ""
    date += str(year)
    if month < 10:
        date += ("-0" + str(month))
    else:
        date += ("-" + str(month))
    if day < 10:
        date += ("-0" + str(day))
    else:
        date += ("-" + str(day))
    startDateTime = date + " "
    endDateTime = date + " "
    if startHour < 10:
        startDateTime += "0" + str(startHour)
    else:
        startDateTime += str(startHour)
    if startMin < 10:
        startDateTime += ":0" + str(startMin)
    else:
        startDateTime += ":" + str(startMin)
    startDateTime += ":00"
    if endHour < 10:
        endDateTime += "0" + str(endHour)
    else:
        endDateTime += str(endHour)
    if startMin < 10:
        endDateTime += ":0" + str(endMin)
    else:
        endDateTime += ":" + str(endMin)
    endDateTime += ":00"

    address = ""
    for i in range(len(positionList)):
        address += positionList[i] + " "
    address = address.rstrip()

    geoLocation = gmaps.geocode(address)[0]['geometry']['location']
    lat = geoLocation['lat']
    lng = geoLocation['lng']
    gps = str(lat) + " " + str(lng)

    url = ""
    r = re.compile(r'(?i)\b((?:[a-z][\w-]+:(?:/{1,3}|[a-z0-9%])|www\d{0,3}[.]|[a-z0-9.\-]+[.][a-z]{2,4}/)(?:[^\s()<>]+|\(([^\s()<>]+|(\([^\s()<>]+\)))*\))+(?:\(([^\s()<>]+|(\([^\s()<>]+\)))*\)|[^\s`!()\[\]{};:\'".,<>?«»“”‘’]))')
    url_list = r.findall(text)
    if (len(url_list) != 0):
        url = url_list[0][0]



    return startDateTime, endDateTime, address, gps, text, url, keywordsList
