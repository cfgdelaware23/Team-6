import pymysql

def getAllData(table):
    conn = pymysql.connect(host='database6.cs0tgohxdki8.us-east-2.rds.amazonaws.com',
                        user='admin',
                        password='',
                        db="database6")

    cursor = conn.cursor()

    results = []
    retrieveQuery = f"select * from {table}"
    cursor.execute(retrieveQuery) # execute the above statement

    columns = cursor.description # with this we will get column names from the table
    for value in cursor.fetchall(): # using fetchall , we are getting multiple records 
        tmp = {}
        for (index, column) in enumerate(value): # we will iterate through each value and get the value for that particular header/column name of the table
            tmp[columns[index][0]] = column

        results.append(tmp)

    return results

if __name__ == "__main__":
    getAllData("availabilities")