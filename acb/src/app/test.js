// throwaway
import Image from 'next/image'
import styles from './page.module.css'
import { Card, CardHeader, CardBody, CardFooter, Text } from '@chakra-ui/react'


const dummy = [
  {
    timeslot: "12:00 PM - 1:00 PM",
    assigned: ["Mia", "Jake", "Kyle", "Victoria", "Rita"]
  },

  {
    timeslot: "1:00 PM - 2:00 PM",
    assigned: ["Mia", "Jake", "Thomas", "Richard", "Joe"]
  },

  {
    timeslot: "4:00 PM - 5:00 PM",
    assigned: ["Jake", "Zoe", "Deep", "Craig", "Drew"]
  },

  {
    timeslot: "7:00 PM - 8:00 PM",
    assigned: ["Jake", "Kyle", "Sophia", "Ella", "Charlie"]
  },

  {
    timeslot: "3:00 PM - 4:00 PM",
    assigned: ["Jake", "Kyle", "Ella", "Charlie", "Samantha"]
  }

]

export default function Test() {
  return (
    <main style={({ fontFamily: 'sans-serif' })} >
      Assigned Volunteers
      <div className='block-item' style={{ alignItems: 'center', gap: '10px' }}>
        {dummy.map((x, index) => (
          <Card key={index} className='individual-item'>
            <CardBody>

              <Text className='item-title'>{x.timeslot}</Text>
              {x.assigned.map((y, index) => (
                <li>{y}</li>
              ))}

            </CardBody>
          </Card>

        ))}

      </div>
    </main>
  )
}
