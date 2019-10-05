import mysql.connector
import random
from statistics import stdev
import time

mydb = mysql.connector.connect(
  host="127.0.0.1",
  port = "3307",
  user="root",
  passwd="xxxx",
  database="thickness"
  
)

print(mydb) 

mycursor = mydb.cursor()

mycursor.execute("SHOW DATABASES")

for x in mycursor:
	print(x) 
	

while 1:
	sql = "INSERT INTO test1_shivam(z1, z2, z3, z4, z5, z6, z7, z8, z9, z10, tmin, tmax, tavg, tsdev) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s, %s)"
	val = [random.uniform(30.0, 40.0) for i in range(14)]
	val[10] = min(val[0:9]);
	val[11] = max(val[0:9]);
	val[12] = sum(val[0:9])/10;
	val[13] = stdev(val[0:9]);

	mycursor.execute(sql, val)
	mydb.commit()
	print(mycursor.rowcount, "record inserted.")
	print("Scanning Thickness......")
	time.sleep(5)
