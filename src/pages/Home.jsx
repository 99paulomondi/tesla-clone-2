import { Box, Text, Button} from "@chakra-ui/react"
import Navbar from "../components/Navbar"
export default function Home() {
  return (
    <>
      <div className="heroContainer">
        <Navbar/>
        <video autoPlay muted loop playsInline className="backgroundClip">
          <source src="/videos/Homepage_banner.webm"/>
        </video>
        <Box>
          <Box display="flex" justifyContent="center">
            <Box paddingTop={100}>
              <Text fontSize={42} textAlign="center" fontWeight="semibold" letterSpacing={2} color="white">Experience Tesla</Text>
              <Text fontSize={18} textAlign="center" color="white" letterSpacing={1}>Schedule a Demo Drive Today</Text>
            </Box>
          </Box>
          <Box display="flex" justifyContent="center">
            <Button py={1} px={24} pos="absolute" bottom={100} bg="none" border="2px" borderColor="white" color="white" _hover={{bg: 'white', color: 'black'}}>Demo Drive</Button>
          </Box>
        </Box>
      </div>
    </>
  )
}