import React from 'react';
import Link from 'next/link';
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Text,
} from '@chakra-ui/react';

import useNavBar from './useNavBar';

const NavBar = () => {
  const { logout } = useNavBar();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Open
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>ePharma Admin</DrawerHeader>

            <DrawerBody>
              <Link href="/">
                <Text>Dashboard</Text>
              </Link>
              <Link href="/departments">
                <Text>Departments</Text>
              </Link>
              <Link href="/categories">
                <Text>Categories</Text>
              </Link>
              <Link href="/products">
                <Text>Products</Text>
              </Link>
              <Link href="/customers">
                <Text>Customers</Text>
              </Link>
              <Link href="/orders">
                <Text>Orders</Text>
              </Link>
            </DrawerBody>

            <DrawerFooter>
              <Button colorScheme="blue" onClick={() => logout()}>
                Logout
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default NavBar;
