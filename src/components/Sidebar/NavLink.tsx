import { Text, Link as ChakraLink, Icon, LinkProps } from "@chakra-ui/react";
import { ElementType } from "react";

interface NavLinkProps extends LinkProps {
  title: string;
  icon: ElementType;
  href?: string;
}

export function NavLink({ title, icon, href, ...rest }: NavLinkProps) {
  return (
    <ChakraLink display="flex" align="center" {...rest} >
      <Icon as={icon} fontSize="20" />
      <Text ml="4" fontWeight="medium">{title}</Text>
    </ChakraLink>
  )
}