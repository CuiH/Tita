import pymysql

def findAccess(user_id):
    connection = pymysql.connect(host='127.0.0.1',
                                     port=3306,
                                     user='root',
                                     password='',
                                     db='calendar',
                                     charset='utf8mb4',
                                     cursorclass=pymysql.cursors.DictCursor)

    cur = connection.cursor()

    sql = 'SELECT email, pwd FROM user_email WHERE user_id = %s'
    cur.execute(sql, str(user_id))
    result = cur.fetchone()
    email = result['email']
    pwd = result['pwd']
    return email, pwd