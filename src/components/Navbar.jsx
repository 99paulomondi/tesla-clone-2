import { Box, List, ListItem, Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerOverlay, Button, useDisclosure, DrawerHeader, Text } from "@chakra-ui/react";
import { BsGlobe2 } from "react-icons/bs";
import React, {useState} from "react";
import { Link } from "react-router-dom";

const DesktopNav = () => {
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 70) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);
    return(
        <>
            <Box width="100%" className={colorChange ? 'navbar colorChange' : 'navbar'} id="desktopNav">
                <Box display="flex" justifyContent="space-between" alignItems="center" px={35} py={2}>
                    <Box py={1}>
                        <Link to='/'><svg cursor="pointer" xmlns="http://www.w3.org/2000/svg" height="" width="140" viewBox="0 -9.08425 362.2736 54.5055"><path d="M238.077 14.382v21.912h7.027V21.705h25.575v14.589h7.022V14.42l-39.624-.038m6.244-7.088h27.02c3.753-.746 6.544-4.058 7.331-7.262h-41.681c.779 3.205 3.611 6.516 7.33 7.262m-27.526 29.014c3.543-1.502 5.449-4.1 6.179-7.14h-31.517l.02-29.118-7.065.02v36.238h32.383M131.874 7.196h24.954c3.762-1.093 6.921-3.959 7.691-7.136h-39.64v21.415h32.444v7.515l-25.449.02c-3.988 1.112-7.37 3.79-9.057 7.327l2.062-.038h39.415V14.355h-32.42V7.196m-61.603.069h27.011c3.758-.749 6.551-4.058 7.334-7.265H62.937c.778 3.207 3.612 6.516 7.334 7.265m0 14.322h27.011c3.758-.741 6.551-4.053 7.334-7.262H62.937c.778 3.21 3.612 6.521 7.334 7.262m0 14.717h27.011c3.758-.747 6.551-4.058 7.334-7.263H62.937c.778 3.206 3.612 6.516 7.334 7.263M0 .088c.812 3.167 3.554 6.404 7.316 7.215h11.37l.58.229v28.691h7.1V7.532l.645-.229h11.38c3.804-.98 6.487-4.048 7.285-7.215v-.07H0v.07" fill="#fff"/></svg></Link>
                    </Box>
                    <Box >
                        <List display="flex" color="white" gap={5} fontWeight="semibold" fontSize="16px" textTransform="capitalize">
                            <ListItem className="navItem" py={1} px={2} cursor="pointer"><Link to="models">model s</Link></ListItem>
                            <ListItem className="navItem" py={1} px={2} cursor="pointer">model 3</ListItem>
                            <ListItem className="navItem" py={1} px={2} cursor="pointer">model x</ListItem>
                            <ListItem className="navItem" py={1} px={2} cursor="pointer">model y</ListItem>
                            <ListItem className="navItem" py={1} px={2} cursor="pointer">solar roof</ListItem>
                            <ListItem className="navItem" py={1} px={2} cursor="pointer">solar panels</ListItem>
                            <ListItem className="navItem" py={1} px={2} cursor="pointer">powerwall</ListItem>
                        </List>
                    </Box>
                    <Box>
                        <List display="flex" color="white" gap={5} fontWeight="semibold" fontSize="16px" textTransform="capitalize">
                            <ListItem className="navItem" py={1} px={2} cursor="pointer">shop</ListItem>
                            <ListItem className="navItem" py={1} px={2} cursor="pointer">account</ListItem>
                            <MobileDrawer/>
                        </List>
                    </Box>
                </Box>
            </Box>
        </>
    )
}

const MobileNav = () => {
    const [colorChange, setColorchange] = useState(false);
    const changeNavbarColor = () => {
        if (window.scrollY >= 70) {
            setColorchange(true);
        }
        else {
            setColorchange(false);
        }
    };
    window.addEventListener('scroll', changeNavbarColor);
    return(
        <>
            <Box width="100%" className={colorChange ? 'navbar colorChange' : 'navbar'} id="mobileNav">
                <Box display="flex" justifyContent="space-between" px={30} py={3}>
                    <Box>
                      <Link to='/'><svg cursor="pointer" xmlns="http://www.w3.org/2000/svg" height="" width="140" viewBox="0 -9.08425 362.2736 54.5055"><path d="M238.077 14.382v21.912h7.027V21.705h25.575v14.589h7.022V14.42l-39.624-.038m6.244-7.088h27.02c3.753-.746 6.544-4.058 7.331-7.262h-41.681c.779 3.205 3.611 6.516 7.33 7.262m-27.526 29.014c3.543-1.502 5.449-4.1 6.179-7.14h-31.517l.02-29.118-7.065.02v36.238h32.383M131.874 7.196h24.954c3.762-1.093 6.921-3.959 7.691-7.136h-39.64v21.415h32.444v7.515l-25.449.02c-3.988 1.112-7.37 3.79-9.057 7.327l2.062-.038h39.415V14.355h-32.42V7.196m-61.603.069h27.011c3.758-.749 6.551-4.058 7.334-7.265H62.937c.778 3.207 3.612 6.516 7.334 7.265m0 14.322h27.011c3.758-.741 6.551-4.053 7.334-7.262H62.937c.778 3.21 3.612 6.521 7.334 7.262m0 14.717h27.011c3.758-.747 6.551-4.058 7.334-7.263H62.937c.778 3.206 3.612 6.516 7.334 7.263M0 .088c.812 3.167 3.554 6.404 7.316 7.215h11.37l.58.229v28.691h7.1V7.532l.645-.229h11.38c3.804-.98 6.487-4.048 7.285-7.215v-.07H0v.07" fill="#fff"/></svg></Link> 
                    </Box>
                    <Box>
                        <MobileDrawer/>
                    </Box>
                </Box>
            </Box>
            
        </>
    )
}

function MobileDrawer() {
    const { isOpen, onOpen,  onClose } = useDisclosure()
    const btnRef = React.useRef()

    return(
        <>
            <Button className="navBtn" px={2} cursor="pointer" as={Button} ref={btnRef} onClick={onOpen} variant="ghost" bg="rgba(0,0,0,0.4)" _hover={{bg: 'rgba(0,0,0,0.4)'}} color="white" fontWeight="semibold" fontSize="16px" textTransform="capitalize">menu</Button>

            <Drawer isOpen={isOpen} placement='right' onClose={onClose} finalFocusRef={btnRef}>
            <DrawerOverlay/>
            <DrawerContent>
                <DrawerHeader>
                    <DrawerCloseButton />
                </DrawerHeader>
                
                <DrawerBody>
                    <Box>
                        <List>
                            <ListItem my={3} fontWeight="semibold" cursor="pointer" py={1} px={2} borderRadius="3px" _hover={{bg: 'gray.100'}}><Link to="models">model s</Link></ListItem>
                            <ListItem my={3} fontWeight="semibold" cursor="pointer" py={1} px={2} borderRadius="3px" _hover={{bg: 'gray.100'}}>Model 3</ListItem>
                            <ListItem my={3} fontWeight="semibold" cursor="pointer" py={1} px={2} borderRadius="3px" _hover={{bg: 'gray.100'}}>Model X</ListItem>
                            <ListItem my={3} fontWeight="semibold" cursor="pointer" py={1} px={2} borderRadius="3px" _hover={{bg: 'gray.100'}}>Model Y</ListItem>
                            <ListItem my={3} fontWeight="semibold" cursor="pointer" py={1} px={2} borderRadius="3px" _hover={{bg: 'gray.100'}}>Solar Roof</ListItem>
                            <ListItem my={3} fontWeight="semibold" cursor="pointer" py={1} px={2} borderRadius="3px" _hover={{bg: 'gray.100'}}>Solar Panels</ListItem>
                            <ListItem my={3} fontWeight="semibold" cursor="pointer" py={1} px={2} borderRadius="3px" _hover={{bg: 'gray.100'}}>Power Wall</ListItem>
                            <ListItem my={3} fontWeight="semibold" cursor="pointer" py={1} px={2} borderRadius="3px" _hover={{bg: 'gray.100'}}>Existing Inventory</ListItem>
                            <ListItem my={3} fontWeight="semibold" cursor="pointer" py={1} px={2} borderRadius="3px" _hover={{bg: 'gray.100'}}>Used Inventory</ListItem>
                            <ListItem my={3} fontWeight="semibold" cursor="pointer" py={1} px={2} borderRadius="3px" _hover={{bg: 'gray.100'}}>Trade In</ListItem>
                            <ListItem my={3} fontWeight="semibold" cursor="pointer" py={1} px={2} borderRadius="3px" _hover={{bg: 'gray.100'}}>Demo Drive</ListItem>
                            <ListItem my={3} fontWeight="semibold" cursor="pointer" py={1} px={2} borderRadius="3px" _hover={{bg: 'gray.100'}}>Insurance</ListItem>
                            <ListItem my={3} fontWeight="semibold" cursor="pointer" py={1} px={2} borderRadius="3px" _hover={{bg: 'gray.100'}}>Fleet</ListItem>
                            <ListItem my={3} fontWeight="semibold" cursor="pointer" py={1} px={2} borderRadius="3px" _hover={{bg: 'gray.100'}}>Cybertruck</ListItem>
                            <ListItem my={3} fontWeight="semibold" cursor="pointer" py={1} px={2} borderRadius="3px" _hover={{bg: 'gray.100'}}>Roadster</ListItem>
                            <ListItem my={3} fontWeight="semibold" cursor="pointer" py={1} px={2} borderRadius="3px" _hover={{bg: 'gray.100'}}>Semi</ListItem>
                            <ListItem my={3} fontWeight="semibold" cursor="pointer" py={1} px={2} borderRadius="3px" _hover={{bg: 'gray.100'}}>Charging</ListItem>
                            <ListItem my={3} fontWeight="semibold" cursor="pointer" py={1} px={2} borderRadius="3px" _hover={{bg: 'gray.100'}}>Commercial Energy</ListItem>
                            <ListItem my={3} fontWeight="semibold" cursor="pointer" py={1} px={2} borderRadius="3px" _hover={{bg: 'gray.100'}}>Utilities</ListItem>
                            <ListItem my={3} fontWeight="semibold" cursor="pointer" py={1} px={2} borderRadius="3px" _hover={{bg: 'gray.100'}}>Careers</ListItem>
                            <ListItem my={3} fontWeight="semibold" cursor="pointer" py={1} px={2} borderRadius="3px" _hover={{bg: 'gray.100'}}>Find Us</ListItem>
                            <ListItem my={3} fontWeight="semibold" cursor="pointer" py={1} px={2} borderRadius="3px" _hover={{bg: 'gray.100'}}>Events</ListItem>
                            <ListItem my={3} fontWeight="semibold" cursor="pointer" py={1} px={2} borderRadius="3px" _hover={{bg: 'gray.100'}}>Support</ListItem>
                            <ListItem my={3} fontWeight="semibold" cursor="pointer" py={1} px={2} borderRadius="3px" _hover={{bg: 'gray.100'}}>Investor Relations</ListItem>
                            <ListItem my={3} fontWeight="semibold" cursor="pointer" py={1} px={2} borderRadius="3px" _hover={{bg: 'gray.100'}}>
                                <Box>
                                    <Box display="flex" alignItems="center">
                                        <BsGlobe2/>
                                        <Text pl={1}>United States</Text>
                                    </Box>
                                </Box>
                            </ListItem>
                        </List>
                    </Box>
                </DrawerBody>
            </DrawerContent>
        </Drawer>
        </>
        
    )
}

export default function Navbar() {
  return (
    <>
        <DesktopNav/>
        <MobileNav/>
    </>
  )
}
