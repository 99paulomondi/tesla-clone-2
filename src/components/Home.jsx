import { Box, Text, Button} from "@chakra-ui/react"
export default function Home() {
  return (
    <>
      <div className="heroContainer">
        <video autoPlay muted loop playsInline className="backgroundClip">
          <source src="/videos/Homepage-Test_Drive-NA-Desktop.webm"/>
        </video>
        <Box>
          <Box display="flex" justifyContent="center">
            <Box paddingTop={120}>
              <Text fontSize={42} textAlign="center" fontWeight="semibold" letterSpacing={2} color="white">Experience Tesla</Text>
              <Text fontSize={18} textAlign="center" color="white" letterSpacing={1}>Schedule a Demo Drive Today</Text>
            </Box>
          </Box>
          <Box display="flex" justifyContent="center">
            <Button py={1} px={20} pos="absolute" bottom={120} bg="none" border="4px" borderColor="white" color="white" _hover={{bg: 'white', color: 'black'}}>Demo Drive</Button>
          </Box>
        </Box>
      </div>
    </>
  )
}