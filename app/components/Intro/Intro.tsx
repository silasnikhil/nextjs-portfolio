import { Avatar, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

export interface IntroProps {
  profileImage: string;
  name: string;
  designation: string;
}
export const Intro = () => {
  return (
    <Flex direction={"column"} gap={2}>
        <Avatar name='Nikhil Silas' src='/pp.jpg' size={"xl"} justifyContent={"flex-start"}/>
        <Text fontSize={"md"}>Nikhil Silas</Text>
        <Text fontSize={"md"}>Software Development Engineer - UI</Text>
    </Flex>
  )
};
