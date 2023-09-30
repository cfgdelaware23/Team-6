"use client"
import Image from "/public/logo.jpeg"
import styles from './page.module.css'
import Events from "../../components/Events";


import { useState } from "react";
import { Users } from './Users';
import { Admin } from './Admin';
import VolunteerForm  from "../../components/VolunteerForm";
import EventOrganizerForm from "../../components/EventOrganizerForm";
import EventForm  from "../../components/EventForm";

import { Heading, Radio, RadioGroup, Stack, HStack, Img} from "@chakra-ui/react";
import { EventCoordinator } from './EventCoordinator';
import { ViewIcon } from "@chakra-ui/icons";

export default function App() {
  const [selectedRole, setRole] = useState(localStorage.getItem("role") || "Volunteer");
  const [users, setUsers] = useState(["Volunteer", "Event Coordinator", "Admin"]);

  const test = ["September 26th", "September 29th", "October 1st"]
  const test2 = ["Bingo Night", "Weekly Book Club", "Annual Friendsgiving Celebration", "Just a Chill Gathering", "Let's Talk About Life"]

  // function selectUser() {
  //   if (selectedRole == "User") {
  //     return (<Users></Users>);
  //   } else {
  //     return (<></>);
  //   }
  // }

    // function volunteer(){
    //   if (selectedRole == "Volunteer"){
    //     return (
    //       <Events title="Upcoming Events" table={test2}/>,
    //       <VolunteerForm></VolunteerForm>
    //       );
    //   }
    //   else{
    //     return (<></>)
    //   }
    //   }

      function event_coordinator(){
        if (selectedRole == "EventCoordinator"){
          return (<eventOrganizerForm></eventOrganizerForm>);
        }
        else{
          return (<></>)
        }
        }

        function admin(){
          if (selectedRole == "Admin"){
            return (<Admin></Admin>);
          }
          else{
            return (<></>)
          }
          }
  console.log(selectedRole)

  return (
    <div className = "App">
      <HStack p={6} bg="#362B7C"justify="space-between">
                <HStack>
                    <Img src="./logo.jpeg" alt="ACB Logo" height="100px"/>
                    <Heading size="xl" pl={2} color="#FFFFFF">American Council of the Blind </Heading>
                </HStack>
                <Stack>
                    <Heading as='h3' size="md" color="#FFFFFF"><ViewIcon/>&nbsp;&nbsp;Viewing as: {selectedRole}</Heading>
                    <RadioGroup color="#FFFFFF" onChange={role => {
                        localStorage.setItem("role", role);
                        setRole(role);
                        if (!users.includes(role)){
                            setUsers([...users, role]);
                        };
                    }} value={selectedRole}>
                        <Stack direction='row'>
                            {users.map((p) =>
                                <Radio key={p} borderColor="black" colorScheme='red' pr={4} value={p}>{p}</Radio>
                            )}
                        </Stack>
                    </RadioGroup>
                </Stack>
            </HStack>
            <br/>
                    <div>
                        {/* <VolunteerForm></VolunteerForm> */}
                        
                        {selectedRole==="Event Coordinator"?<Events title="What's New!" table={test}/> : <></>}
                        {selectedRole==="Event Coordinator"?<EventOrganizerForm></EventOrganizerForm> : <></>}  
               
                        {selectedRole==="Volunteer"?<Events title="Upcoming Events" table={test2}/> : <></>} 
                        {selectedRole==="Volunteer"?<VolunteerForm></VolunteerForm> : <></>}

                         {/* {selectedRole==="Volunteer"?<VolunteerForm></VolunteerForm> : <></>}
                         {selectedRole==="EventCoordinator"?<EventOrganizerForm></EventOrganizerForm> : <></>}   */}
                        {/* {event_coordinator()}
                        {admin()} */}
                    </div>
                    <div>
                        {/* {selectUser()} */}
                    </div>  
      </div>

  );
}

