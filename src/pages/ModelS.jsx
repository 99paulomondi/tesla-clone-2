import { Box, Text, Button } from "@chakra-ui/react";
import Navbar from "../components/Navbar";

export default function ModelS() {
  return (
    <div className="heroContainer">
      <Navbar/>
        <video autoPlay muted loop playsInline className="backgroundClip">
          <source src="/videos/Model S _Tesla_banner.webm"/>
        </video>
        <Box>
          <Box display="flex" justifyContent="center" mx={2}>
            <Box py="5" className="heroItems">
              <Box textAlign="center" paddingTop={50}>
                <Text fontSize="36px" fontWeight="semibold" color="white">Model S</Text>
                <Text as="ins" color="white" cursor="pointer" fontSize="17px" fontWeight="semibold" letterSpacing={1}>Explore Inventory</Text>
              </Box>

              <Box pos="absolute" className="heroItems" bottom={120} >
                <Box display="flex" justifyContent="space-between" textAlign="center">
                  <Box>
                    <Text color="white" fontSize={{sm: '18px', md: '28px'}} fontWeight="semibold">396 mi</Text>
                    <Text color="white" fontSize="13px">Range (EPA est.)</Text>
                  </Box>
                  <Box>
                    <Text color="white" fontSize={{sm: '18px', md: '28px'}} fontWeight="semibold">1.99 s</Text>
                    <Text color="white" fontSize="13px">0-60 mph*</Text>
                  </Box>
                  <Box>
                    <Text color="white" fontSize={{sm: '18px', md: '28px'}} fontWeight="semibold">200 mph</Text>
                    <Text color="white" fontSize="13px">Top speed*</Text>
                  </Box>
                  <Box>
                    <Text color="white" fontSize={{sm: '18px', md: '28px'}} fontWeight="semibold">1,020 hp</Text>
                    <Text color="white" fontSize="13px">Peak Power*</Text>
                  </Box>
                </Box>
              </Box>

              <Box pos="absolute" className="heroItems" bottom={50}>
                <Box display="flex" justifyContent="center">
                  <Button py={1} px={24} bg="white" color="black" mr={5}>Order Now</Button>
                  <Button py={1} px={24} bg="none" border="2px" borderColor="white" color="white" _hover={{bg: 'white', color: 'black'}}>Demo Drive</Button>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
    </div>
  )
}
