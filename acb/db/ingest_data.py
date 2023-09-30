import csv
import pymysql

availability_file_path = "./availability.csv"
hosting_file_path = "./hosting.csv"

# connect to mysql instance
conn = pymysql.connect(host='localhost',
                       user='root',
                       password='password',
                       db='my_database')

    cursor = conn.cursor()

with open(availability_file_path, newline='') as csvfile:
    test = csv.reader(csvfile, delimiter=',')
    for row in test:
        cursor.execute('INSERT INTO testcsv(names, \
            classes, mark )' \
            'VALUES("%s", "%s", "%s")', 
            row)


cursor.close()

