import { Flex } from '@chakra-ui/react'
import { Logo } from './Logo';
import { NotificationNav } from './NotificationNav';
import { Profile } from './Profile';
import { SearchBox } from './SearchBox';

export function Header() {
  return (
    <Flex
      as="header"
      w="100%"
      maxW={1480}
      h="20"
      mx="auto"
      mt="4"
      px="4"
      align="center"
    >
      <Logo />

      <SearchBox />

      <Flex
        align="center"
        marginLeft="auto"
      >
        <NotificationNav />
        <Profile />
      </Flex>

    </Flex>
  );
}