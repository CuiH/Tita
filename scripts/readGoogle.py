import sys

from oauth2client import client
from googleapiclient import sample_tools
from googlemaps import Client as GoogleMaps
import writeMysql2

def main(argv):
    gmaps = GoogleMaps("")

    # Authenticate and construct service.
    service, flags = sample_tools.init(
        argv, 'calendar', 'v3', __doc__, __file__,
        scope='https://www.googleapis.com/auth/calendar.readonly')

    try:
        page_token = None
        while True:
            calendar_list = service.events().list(calendarId='2211zhaogongzuo@gmail.com', pageToken=page_token, timeMin='2017-09-18T08:00:00-05:00', timeMax='2017-09-30T02:00:00-05:00').execute()

            for calendar_list_entry in calendar_list['items']:
                if 'location' in calendar_list_entry :
                    location = calendar_list_entry['location']
                    geoLocation = gmaps.geocode(location)[0]['geometry']['location']
                    lat = geoLocation['lat']
                    lng = geoLocation['lng']
                    gps = str(lat) + " " + str(lng)
                else:
                    location = ""
                    continue
                title = calendar_list_entry['summary']
                if 'description' in calendar_list_entry :
                    description = calendar_list_entry['description']
                else:
                    description = ""
                if 'date' in calendar_list_entry['start'] :
                    startDateTime = calendar_list_entry['start']['date'] + ' 00:00:00'
                else :
                    startDateTime = calendar_list_entry['start']['dateTime'].replace('T', ' ')[:-6]
                if 'date' in calendar_list_entry['end'] :
                    endDateTime = calendar_list_entry['start']['date'] + ' 23:59:59'
                else :
                    endDateTime = calendar_list_entry['end']['dateTime'].replace('T', ' ')[:-6]
                # print(title, startDateTime, endDateTime, location, gps, description)
                if (len(description) > 500):
                    description = description[0:500]
                if (len(title) > 80):
                    title = title[0:80]
                writeMysql2.writeMysql(title, startDateTime, endDateTime, location, gps, description)

            page_token = calendar_list.get('nextPageToken')
            if not page_token:
                break

    except client.AccessTokenRefreshError:
        print('The credentials have been revoked or expired, please re-run'
              'the application to re-authorize.')

if __name__ == '__main__':
    main(sys.argv)