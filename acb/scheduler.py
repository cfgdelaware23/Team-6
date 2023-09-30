#Scheduler intuition

def match_people_with_times(people_availability, times_to_fill):
    people_availability.sort(key=lambda x: len(x[1]))

    times_to_fill.sort()

    matching = {}

    for person, availability in people_availability:
        assigned_times = []
        for time in times_to_fill:
            if time in availability and time not in matching.values():
                assigned_times.append(time)
                matching[person] = time
        for time in assigned_times:
            times_to_fill.remove(time)

    if not times_to_fill:
        return matching
    else:
        return None  

# Example usage:
people_availability = [
    ("Person A", ["9:00 AM", "10:00 AM", "1:00 PM"]),
    ("Person B", ["9:00 AM", "11:00 AM", "2:00 PM"]),
    ("Person C", ["10:00 AM", "12:00 PM", "3:00 PM"]),
]

times_to_fill = ["9:00 AM", "10:00 AM", "11:00 AM", "12:00 PM", "1:00 PM", "2:00 PM", "3:00 PM"]

matching = match_people_with_times(people_availability, times_to_fill)

if matching:
    for person, time in matching.items():
        print(f"{person} is assigned to work at {time}")
else:
    print("Unable to match people with times.")
