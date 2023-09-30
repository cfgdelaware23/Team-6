import csv

availability_file_path = "./availability.csv"
hosting_file_path = "./hosting.csv"

with open(availability_file_path, newline='') as csvfile:
    test = csv.reader(csvfile, delimiter=' ')
    for line in test:
        print(line)