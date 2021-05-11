import { Box, Divider, Flex, Heading, VStack, SimpleGrid, HStack, Button } from "@chakra-ui/react"

import { Header, Sidebar } from "../../components";
import { Input } from "../../components/Form/Input"

export default function CreateUser() {
  return (
    <Box>
      <Header />

      <Flex width="100%" marginY="6" maxWidth={1480} marginX="auto" paddingX="6" >
        <Sidebar />

        <Box flex="1" borderRadius="8" bgColor="gray.800" padding="8">
          <Heading size="lg" fontWeight="normal">Criar usuário</Heading>

          <Divider my="6" borderColor="gray.600" />

          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <Input name="name" label="Nome completo" />
              <Input name="email" label="E-mail" />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing="8" w="100%">
              <Input name="password" type="password" label="Senha" />
              <Input name="password_confirmation" type="password" label="Confirmação da senha" />
            </SimpleGrid>
          </VStack>
          <Flex marginTop="8" justify="flex-end">
            <HStack spacing="4">
              <Button colorScheme="whiteAlpha">Cancelar</Button>
              <Button colorScheme="pink">Salvar</Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}