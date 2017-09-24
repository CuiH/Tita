# coding=utf-8
import imaplib
import email
import smtplib
import time
import re
import parser
from email.parser import Parser
import analysis
import writeMysql
import findAccess

def readmail(user_id):
	[FROM_EMAIL, FROM_PWD] = findAccess.findAccess(user_id)

	SMTP_SERVER = "imap.gmail.com"
	SMTP_PORT   = 993

	mail = imaplib.IMAP4_SSL(SMTP_SERVER)
	mail.login(FROM_EMAIL,FROM_PWD)

	mail.select('inbox')

	type, data = mail.search(None, 'ALL')
	mail_ids = data[0]
	id_list = mail_ids.split()

	first_email_id = int(id_list[0])
	latest_email_id = int(id_list[-1])

	for i in range(latest_email_id, first_email_id-1, -1):
		typ, data = mail.fetch(str(i), '(RFC822)')
		data = str(data[0])
		subject = re.findall(r'Subject: (.*?)\\r\\n', data)[0]

		dataList = data.split(';')
		for i in range(len(dataList)):
			if dataList[i].startswith(" charset"):
				content = dataList[i]
				break;
		regexContent = re.findall(r'\\r\\n\\r\\n(.*?)\\r\\n\\r\\n', content)[0]
		regexContent = str(regexContent)

		[startDateTime, endDateTime, address, gps, text, url, keywordsList] = analysis.analysis(regexContent)
		writeMysql.writeMysql(subject,startDateTime, endDateTime, address, gps, text, url, keywordsList, user_id)
		# print(subject)
		# print(startDateTime)
		# print(endDateTime)
		# print(address)
		# print(gps)
		# print(text)
		# print(url)
		# print(keywordsList)