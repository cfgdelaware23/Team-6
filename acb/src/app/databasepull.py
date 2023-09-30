import pymysql

host = 'database6'
user = 'admin'
password = 'JPMCPASSWORD'
database = 'database6'

try:
    connection = pymysql.connect(host=host, user=user, password=password, database=database)

    cursor = connection.cursor()

    sql_query = "SELECT * FROM vTable;"

    cursor.execute(sql_query)

    results = cursor.fetchall()

    for row in results:
        column1_value = row[0]
        column2_value = row[1]
        column3_value = row[2]
        print(f"Column1: {column1_value}, Column2: {column2_value}, Column3: {column3_value}")
except pymysql.Error as e:
    print(f"Database error: {e}")
finally:


    cursor.close()
    connection.close()
