"use client"
import Image from "/public/logo.jpeg"
import styles from './page.module.css'
import { useState } from "react";
import { Users } from './Users';
import { Volunteer } from './Volunteer';
import { Admin } from './Admin';
import { EventCoordinator } from './EventCoordinator';

import { Heading, Radio, RadioGroup, Stack, HStack, Img} from "@chakra-ui/react";
import { ViewIcon } from "@chakra-ui/icons";




export default function App() {
  const [selectedRole, setRole] = useState(localStorage.getItem("role") || "User");
  const [users, setUsers] = useState(["Volunteer", "Event Coordinator", "Admin"]);

    function selectUser(){
        if (selectedRole == "User"){
            return (<Users></Users>);
        } else{
            return(<></>);
        }
    }

    function volunteer(){
      if (selectedRole == "Volunteer"){
        return (<Volunteer></Volunteer>);
      }
      else{
        return (<></>)
      }
      }

      function event_coordinator(){
        if (selectedRole == "Volunteer"){
          return (<EventCoordinator></EventCoordinator>);
        }
        else{
          return (<></>)
        }
        }

        function admin(){
          if (selectedRole == "Volunteer"){
            return (<Admin></Admin>);
          }
          else{
            return (<></>)
          }
          }
  return (
    <div className = "App">
      <HStack p={6} bg="blue.100"justify="space-between">
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
      </div>

  );
}

