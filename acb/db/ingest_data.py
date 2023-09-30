import csv
import pymysql

availability_file_path = "./availability.csv"
hosting_file_path = "./hosting.csv"

# connect to mysql instance
# conn = pymysql.connect(host='localhost',
#                        user='root',
#                        password='password',
#                        db='my_database')

# cursor = conn.cursor()

with open(hosting_file_path, newline='', encoding='utf-8-sig') as csvfile:
    test = csv.reader(csvfile, delimiter=',')
    header = next(test)
    print(header)
    # for row in test:
    #     print(row)
#         cursor.execute('INSERT INTO acb_data(names, \
#             classes, mark )' \
#             'VALUES("%s", "%s", "%s")', 
#             row)


# cursor.close()

