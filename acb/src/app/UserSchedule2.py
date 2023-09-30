from collections import defaultdict

# Sample data: People's availability and timeslots for volunteering
# Generate 30 sample time slots for 30 individuals with unique names
people_availability = {
    'Alice Johnson': ['9:00 AM - 11:00 AM', '1:00 PM - 3:00 PM', '4:00 PM - 6:00 PM'],
    'Bob Smith': ['9:00 AM - 11:00 AM', '2:00 PM - 4:00 PM'],
    'Charlie Davis': ['10:00 AM - 12:00 PM', '3:00 PM - 5:00 PM'],
    'David Wilson': ['9:00 AM - 11:00 AM', '1:00 PM - 3:00 PM', '4:00 PM - 6:00 PM'],
    'Ella Brown': ['9:00 AM - 11:00 AM', '2:00 PM - 4:00 PM'],
    'Frank Miller': ['10:00 AM - 12:00 PM', '3:00 PM - 5:00 PM'],
    'Grace Lee': ['9:00 AM - 11:00 AM', '1:00 PM - 3:00 PM', '4:00 PM - 6:00 PM'],
    'Henry Clark': ['9:00 AM - 11:00 AM', '2:00 PM - 4:00 PM'],
    'Ivy Rodriguez': ['10:00 AM - 12:00 PM', '3:00 PM - 5:00 PM'],
    'Jack Anderson': ['9:00 AM - 11:00 AM', '1:00 PM - 3:00 PM', '4:00 PM - 6:00 PM'],
    'Kate Hall': ['9:00 AM - 11:00 AM', '2:00 PM - 4:00 PM'],
    'Liam Young': ['10:00 AM - 12:00 PM', '3:00 PM - 5:00 PM'],
    'Mia Martin': ['9:00 AM - 11:00 AM', '1:00 PM - 3:00 PM', '4:00 PM - 6:00 PM'],
    'Noah White': ['9:00 AM - 11:00 AM', '2:00 PM - 4:00 PM'],
    'Olivia Harris': ['10:00 AM - 12:00 PM', '3:00 PM - 5:00 PM'],
    'Sophia Turner': ['9:00 AM - 11:00 AM', '1:00 PM - 3:00 PM', '4:00 PM - 6:00 PM'],
    'Thomas Allen': ['9:00 AM - 11:00 AM', '2:00 PM - 4:00 PM'],
    'Victoria Scott': ['10:00 AM - 12:00 PM', '3:00 PM - 5:00 PM'],
    'William King': ['9:00 AM - 11:00 AM', '1:00 PM - 3:00 PM', '4:00 PM - 6:00 PM'],
    'Zoe Turner': ['9:00 AM - 11:00 AM', '2:00 PM - 4:00 PM'],
    'Emily Perez': ['10:00 AM - 12:00 PM', '3:00 PM - 5:00 PM'],
    'Jacob Evans': ['9:00 AM - 11:00 AM', '1:00 PM - 3:00 PM', '4:00 PM - 6:00 PM'],
    'Ava Martinez': ['9:00 AM - 11:00 AM', '2:00 PM - 4:00 PM'],
    'Michael Hernandez': ['10:00 AM - 12:00 PM', '3:00 PM - 5:00 PM'],
    'Emma Gonzalez': ['9:00 AM - 11:00 AM', '1:00 PM - 3:00 PM', '4:00 PM - 6:00 PM'],
    'Daniel Parker': ['9:00 AM - 11:00 AM', '2:00 PM - 4:00 PM'],
    'Sophia Mitchell': ['10:00 AM - 12:00 PM', '3:00 PM - 5:00 PM'],
    'Liam Johnson': ['9:00 AM - 11:00 AM', '1:00 PM - 3:00 PM', '4:00 PM - 6:00 PM'],
    'Ava Wilson': ['9:00 AM - 11:00 AM', '2:00 PM - 4:00 PM'],
    'Oliver Anderson': ['10:00 AM - 12:00 PM', '3:00 PM - 5:00 PM'],
}

# Generate 30 volunteer timeslots
volunteer_timeslots = [
    '9:00 AM - 11:00 AM',
    '10:00 AM - 12:00 PM',
    '1:00 PM - 3:00 PM',
    '2:00 PM - 4:00 PM',
    '3:00 PM - 5:00 PM',
    '9:00 AM - 11:00 AM',
    '10:00 AM - 12:00 PM',
    '1:00 PM - 3:00 PM',
    '2:00 PM - 4:00 PM',
    '3:00 PM - 5:00 PM',
    '10:00 AM - 12:00 PM',

]

# Initialize a dictionary to store assignments
assignments = defaultdict(list)

# Track the number of assigned people for each timeslot
timeslot_counts = defaultdict(int)

# Iterate through the available people and assign them to timeslots
for person, availability in people_availability.items():
    for slot in availability:
        if slot in volunteer_timeslots and timeslot_counts[slot] < 5:
            assignments[slot].append(person)
            timeslot_counts[slot] += 1

# Display the assignments
for slot, assigned_people in assignments.items():
    print(f"Timeslot: {slot}")
    print("Assigned People:", ', '.join(assigned_people))
    print()