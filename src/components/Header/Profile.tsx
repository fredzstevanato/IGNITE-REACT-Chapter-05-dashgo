import { Box, Flex, Text, Avatar } from "@chakra-ui/react";

export function Profile() {
  return (
    <Flex align="center">
      <Box mx="4" textAlign="right">
        <Text>Frederico Stevanato Rocha</Text>
        <Text color="gray.300" fontSize="small">
          fredzstevanato@gmail.com
        </Text>
      </Box>
      <Avatar size="md" name="Frederico Stevanato Rocha" src="https://github.com/fredzstevanato.png" />
    </Flex>
  )
}