import React from 'react';
import { Card, CardHeader, CardBody, CardFooter, Text } from '@chakra-ui/react';

function CreateCard(data){
    data.map((x) => (
        <Card>
            <CardBody>
                <Text>{x}</Text>
                <Text>This is an example description of the event</Text>
            </CardBody>
        </Card>
    ))
}

function Events(props) {
    const table = props.table;

    return (
    <div className='events'>
        <div className='events-block'>
        
            <h1>{props.title}</h1>
            <div className='block-item'>
                    {table.map((x, index) => (
                    
                        <Card key={index} className='individual-item'>
                            <CardBody>
                                
                                <Text className='item-title'>{x}</Text>
                                <Text>This is an example description of the event</Text>
                                
                            </CardBody>
                        </Card>
                    
                ))}

            </div>
        
        </div>
    </div>
    )
}

export default Events;