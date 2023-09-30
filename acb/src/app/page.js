"use client"
import Image from "/public/logo.jpeg"
import styles from './page.module.css'
import { useState } from "react";
import { Users } from './Users';
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


  //   <main className={styles.main}>
  //     <div className={styles.description}>
  //       <p>
  //         Get started by editing&nbsp;
  //         <code className={styles.code}>src/app/page.js</code>
  //       </p>
  //       <div>
  //         <a
  //           href="https://vercel.com?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           By{' '}
  //           <Image
  //             src="/vercel.svg"
  //             alt="Vercel Logo"
  //             className={styles.vercelLogo}
  //             width={100}
  //             height={24}
  //             priority
  //           />
  //         </a>
  //       </div>
  //     </div>

  //     <div className={styles.center}>
  //       <Image
  //         className={styles.logo}
  //         src="/next.svg"
  //         alt="Next.js Logo"
  //         width={180}
  //         height={37}
  //         priority
  //       />
  //     </div>

  //     <div className={styles.grid}>
  //       <a
  //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
  //         className={styles.card}
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         <h2>
  //           Docs <span>-&gt;</span>
  //         </h2>
  //         <p>Find in-depth information about Next.js features and API.</p>
  //       </a>

  //       <a
  //         href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
  //         className={styles.card}
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         <h2>
  //           Learn <span>-&gt;</span>
  //         </h2>
  //         <p>Learn about Next.js in an interactive course with&nbsp;quizzes!</p>
  //       </a>

  //       <a
  //         href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
  //         className={styles.card}
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         <h2>
  //           Templates <span>-&gt;</span>
  //         </h2>
  //         <p>Explore the Next.js 13 playground.</p>
  //       </a>

  //       <a
  //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
  //         className={styles.card}
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         <h2>
  //           Deploy <span>-&gt;</span>
  //         </h2>
  //         <p>
  //           Instantly deploy your Next.js site to a shareable URL with Vercel.
  //         </p>
  //       </a>
  //     </div>
  //   </main>
  // )
