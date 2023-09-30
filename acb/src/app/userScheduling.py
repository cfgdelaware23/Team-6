from random import sample, randint
from collections import defaultdict

def generate_names(count):
    names = ['Alice', 'Bob', 'Charlie', 'David', 'Ella', 'Frank', 'Grace', 'Henry', 'Ivy', 'Jack',
             'Kate', 'Liam', 'Mia', 'Noah', 'Olivia', 'Sophia', 'Thomas', 'Victoria', 'William', 'Zoe',
             'Jake', 'Emma', 'Kyle', 'Soham', 'Nikita', 'Samantha', 'Loki', 'Arun', 'Dave', 'Craig',
             'Sweeta', 'Deep', 'Rita', 'Joe', 'Dana', 'Drew', 'Samuel', 'Ben', 'Robert', 'Richard']
    return sample(names, count)

volunteer_timeslots = [
    '9:00 AM - 10:00 AM',
    '10:00 AM - 11:00 AM',
    '11:00 AM - 12:00 PM',
    '12:00 PM - 1:00 PM',
    '1:00 PM - 2:00 PM',
    '2:00 PM - 3:00 PM',
    '3:00 PM - 4:00 PM',
    '4:00 PM - 5:00 PM',
    '5:00 PM - 6:00 PM',
    '6:00 PM - 7:00 PM',
    '7:00 PM - 8:00 PM',
    '8:00 PM - 9:00 PM',
    '9:00 PM - 10:00 PM',
]

people_count = 40
people_names = generate_names(people_count)

people_availability = {}
for name in people_names:
    available_slots = sample(volunteer_timeslots, min(5, randint(1, len(volunteer_timeslots))))
    people_availability[name] = available_slots

assignments = defaultdict(list)

timeslot_counts = defaultdict(int)

for _ in range(5):  # Assign 5 times for each person
    for person in people_names:
        available_slots = people_availability[person]
        for slot in available_slots:
            if timeslot_counts[slot] < 5:
                assignments[slot].append(person)
                timeslot_counts[slot] += 1

for slot, assigned_people in assignments.items():
    print(f"Timeslot: {slot}")
    print("Assigned People:", ', '.join(assigned_people))
    print()
