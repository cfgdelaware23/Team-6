# MySQL setup with EC2

#### 1. AWS Setup (Ubuntu)

chmod 600 /home/elizqiu/Team-6/Team-6-unzipped/Team-6.pem

ssh -i /home/elizqiu/Team-6/Team-6-unzipped/Team-6.pem force@ec2-3-239-219-77.compute-1.amazonaws.com

#### 2. MySQL server through ssh (AWS EC2)
Ideal: was Provision DynamoDB with CLI, but we need personal account on console for DynamoDB and must connect with JPMC's EC2 instance, so we can't do this

`sudo snap install aws-cli --classic`

`sudo apt update`
`sudo apt-get install mysql-server`

`sudo systemctl start mysql`
`sudo systemctl enable mysql`

`sudo systemctl start mysql.service`

Optional:
`sudo mysql_secure_installation` (selected `no` for all, no password)

#### 3. Create database, add data into MySQL tables from the command line

`sudo mysql`
- this opens up mysql in the aws ec2 instance

`show databases;`
- we have default `database` with default tables: 
| information_schema |
| mysql              |
| performance_schema |
| sys			     |

`create database cba_data;`
`create database test;`
- we have created two databases, `cba_data` and `test`, in `database`

`drop database test;`
- now we have dropped one database, `test`, from `databases`

#### 4. Working on table within database now

`use cba_data;`
- switch to database `cba_data` within `databases`

`show tables;`
- show the tables within the database `cba_data`