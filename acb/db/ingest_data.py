import csv
import pymysql

availability_file_path = "./availability.csv"
hosting_file_path = "./hosting.csv"

# connect to mysql instance
conn = pymysql.connect(host='database6.cs0tgohxdki8.us-east-2.rds.amazonaws.com',
                       user='admin',
                       password='',
                       db="database6")

print(conn)

cursor = conn.cursor()

# def createTable():
#     sqlQuery            = "CREATE TABLE acb_data(id int, Day varchar(32), Time varchar(32), Title varchar(32), Account varchar(32), Host varchar(32), Moderator varchar(32), Facilitator varchar(32), Streamer varchar(32), Broadcaster varchar(32))"   
#     cursor.execute(sqlQuery)

# createTable()

with open(hosting_file_path, newline='', encoding='utf-8-sig') as csvfile:
    test = csv.reader(csvfile, delimiter=',')
    header = next(test)
    # fields: 'Day', 'Time', 'Title', 'Account', 'Host', 'Moderator', 'Facilitator', 'Streamer', 'Broadcaster'
    print(header)
    count = 0
    for row in test:
        a = cursor.execute('INSERT INTO vTable2(ID, Day1, \
            Time1, Titles, Account, Host, moderator, facilitator, Streamer, Broadcaster )' \
            'VALUES("%s", "%s", "%s", "%s", "%s", "%s", "%s", "%s", "%s", "%s")', 
            [count, row[0], row[1], row[2], row[3], row[4], row[5], row[6], row[7], row[8]])
        count += 1
        print(a)

conn.commit()

cursor.close()

