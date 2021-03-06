import pymysql
import time

def writeMysql(subject, startDateTime, endDateTime, address, gps, text, url, keywordsList, user_id):
    connection = pymysql.connect(host='127.0.0.1',
                                 port=3306,
                                 user='root',
                                 password='',
                                 db='calendar',
                                 charset='utf8mb4',
                                 cursorclass=pymysql.cursors.DictCursor)
    cur = connection.cursor()

    # title = "test1"
    # startDateTime = "2017-09-24 16:00:00"
    # endDateTime = "2017-09-24 16:00:00"
    # address = "Houston Texas"
    # gps = "29.7604267 -95.3698028"
    # text = "We are pleased to announce that we are now accepting poster proposals for consideration to the Data Science Conference (www.dsconference.rice.edu) The poster session, to be held on tomorrow 16:00 - 18:00 p.m., is a unique networking opportunity for students. This will take place at RMC, Rice University, Houston, Texas."
    # url = "www.dsconference.rice.edu"
    # keywords = [u'poster proposals for consideration', u'Data Science Conference', u'poster session', u'unique networking opportunity', u'RMC']

    sql = '''INSERT INTO event (title, start_time, end_time, location, gps, description, homepage_link, type) VALUES (%s, %s, %s, %s, %s, %s, %s, %s)'''
    status = cur.execute(sql, (subject, startDateTime, endDateTime, address, gps, text, url, "private"))
    connection.commit()

    if status == 1:
        print('Done')
    else:
        print('Failed')

    sql = "SELECT MAX(id) FROM event"
    cur.execute(sql)
    event_id = cur.fetchone()

    sql = '''INSERT INTO user_event_map (user_id, event_id, source) VALUES (%s, %s, %s)'''
    cur.execute(sql, (int(user_id), int(event_id['MAX(id)']), "email"))
    connection.commit()

    for i in range(len(keywordsList)):
        keyword = keywordsList[i]
        sql = "INSERT INTO keyword (word) VALUES (%s)"
        cur.execute(sql, keyword)
        connection.commit()
