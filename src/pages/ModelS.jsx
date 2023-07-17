import { Box, Text, Button, Image, Grid, GridItem } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import {Autoplay, Pagination} from 'swiper/modules';

export default function ModelS() {
  return (
    <>
      {/* this is the hero section for the modal S */}
      <div className="heroContainer">
        <Navbar/>
          <video autoPlay muted loop playsInline className="backgroundClip">
            <source src="/videos/Model S _Tesla_banner.webm"/>
          </video>
          <Box>
            <Box display="flex" justifyContent="center" mx={2}>
              <Box py="5" className="heroItems">
                <Box textAlign="center" paddingTop="130px">
                  <Text fontSize="36px" fontWeight="semibold" color="white">Model S</Text>
                  <Text as="ins" color="white" cursor="pointer" fontSize="17px" fontWeight="semibold" letterSpacing={1}>Explore Inventory</Text>
                </Box>

                <Box pos="absolute" className="heroItems" bottom={120} >
                  <Box display="flex" justifyContent="space-between" textAlign="center">
                    <Box>
                      <Text color="white" fontSize={{base: '18px', md: '28px'}} fontWeight="semibold">396 mi</Text>
                      <Text color="white" fontSize="13px">Range (EPA est.)</Text>
                    </Box>
                    <Box>
                      <Text color="white" fontSize={{base: '18px', md: '28px'}} fontWeight="semibold">1.99 s</Text>
                      <Text color="white" fontSize="13px">0-60 mph*</Text>
                    </Box>
                    <Box>
                      <Text color="white" fontSize={{base: '18px', md: '28px'}} fontWeight="semibold">200 mph</Text>
                      <Text color="white" fontSize="13px">Top speed*</Text>
                    </Box>
                    <Box>
                      <Text color="white" fontSize={{base: '18px', md: '28px'}} fontWeight="semibold">1,020 hp</Text>
                      <Text color="white" fontSize="13px">Peak Power*</Text>
                    </Box>
                  </Box>
                </Box>

                <Box pos="absolute" className="heroItems" px={{base: '20px'}} bottom={50}>
                  <Box display="flex" justifyContent="center">
                    <Button py={1} px={24} bg="white" color="black" mr={5}>Order Now</Button>
                    <Button py={1} px={24} bg="none" border="2px" borderColor="white" color="white" _hover={{bg: 'white', color: 'black'}}>Demo Drive</Button>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
      </div>

      
      <Box bg="black" paddingTop="50px" paddingBottom="50px">
        {/* this is the section for the modal S with the white interior */}
        <Box>
          <Text color="white" textAlign="center" fontSize="30px" fontWeight="semibold">Interior of the Future</Text>
        </Box>

        <Box>
          <Image src="/images/Model S with white interior.jpg" width="100%" minHeight={{md: '600px'}}/>
        </Box>

        {/* tis is the carousel section */}
        <Box py="90px" px={{md: '50px', base: '30px'}} borderRadius={5}>
          <Box>
            <Swiper spaceBetween={0} pagination={{clickable: true, el: '.swiper-custom-pagination'}} autoplay={{delay: 8000, disableOnInteraction: false,}} modules={[Pagination, Autoplay]} className="mySwiper">
              <SwiperSlide >
                <Box width="100%" height={{md: '550px', base: '300px'}} borderRadius={5}>
                  <video autoPlay muted loop playsInline width="100%">
                    <source src="/videos/Model S _Tesla_11.webm"/>
                  </video>
                </Box>
              </SwiperSlide>
              <SwiperSlide >
                <Box width="100%" height={{md: '550px', base: '300px'}} borderRadius={5}>
                  <video autoPlay muted loop playsInline width="100%">
                    <source src="/videos/Model S _Tesla_2.webm"/>
                  </video>
                </Box>
              </SwiperSlide>
              <SwiperSlide >
                <Box width="100%" height={{md: '550px', base: '300px'}} borderRadius={5}>
                  <video autoPlay muted loop playsInline width="100%">
                    <source src="/videos/Model S _Tesla_13.webm"/>
                  </video>
                </Box>
              </SwiperSlide>
              <SwiperSlide >
                <Box width="100%" height={{md: '550px', base: '300px'}} borderRadius={5}>
                  <video autoPlay muted loop playsInline width="100%">
                    <source src="/videos/Model S _Tesla_3.webm"/>
                  </video>
                </Box>
              </SwiperSlide>
              <SwiperSlide >
                <Box width="100%" height={{md: '550px', base: '300px'}} borderRadius={5}>
                  <video autoPlay muted loop playsInline width="100%">
                    <source src="/videos/Model S _Tesla_15.webm"/>
                  </video>
                </Box>
              </SwiperSlide>
            </Swiper>
            <Box py={3} display="flex" justifyContent="center">
              <Box>
                <div className="swiper-custom-pagination"/>
              </Box>
            </Box>
            
          </Box>
        </Box>

        <Box px={{md: '150px', base: '30px'}}>
          <Grid templateColumns='repeat(4, 1fr)'>
            <GridItem colSpan={{base: 4, md: 2}}>
              <Image src="/images/Console wireless charging 2 mobile devices.jpg" width="100%" miHeight="350px"/>
            </GridItem>
            <GridItem colSpan={{base: 4, md: 2}}>
              <Box pt={{base: '20px', md: '100px'}} pl={{md: '90px'}}>
                <Text color="white" fontWeight="semibold" fontSize="18px">Stay Connected</Text>
                <Text color="white" pt={2}>Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging.</Text>
              </Box>
            </GridItem>
          </Grid>

          <Grid templateColumns='repeat(4, 1fr)'>
            <GridItem colSpan={{base: 4, md: 2}}>
              <Box pt={{base: '20px', md: '100px'}} pr={{md: '90px'}}>
                <Text color="white" fontWeight="semibold" fontSize="18px">Immersive Sound</Text>
                <Text color="white" py={2}>A 22-speaker, 960-watt audio system with Active Road Noise Reduction offers immersive listening and studio-grade sound quality.</Text>
              </Box>
            </GridItem>
            <GridItem colSpan={{base: 4, md: 2}}>
              <video autoPlay muted loop playsInline width="100%" height="350px">
                <source src="/videos/Model S _Tesla_9.webm"/>
              </video>
            </GridItem>
          </Grid>

          <Grid templateColumns='repeat(4, 1fr)'>
            <GridItem colSpan={{base: 4, md: 2}}>
              <Image src="/images/Model S rear trunk with white bike and helme.jpg" width="100%" miHeight="350px"/>
            </GridItem>
            <GridItem colSpan={{base: 4, md: 2}}>
              <Box pt={{base: '20px', md: '100px'}} pl={{md: '90px'}}>
                <Text color="white" fontWeight="semibold" fontSize="18px">Stay Connected</Text>
                <Text color="white" pt={2}>Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging.</Text>
              </Box>
            </GridItem>
          </Grid>
        </Box>

        <Box pt="70px">
          <Box className="mybreak" backgroundImage="url('/images/Blue Model S.jpg')">
            <Box display="flex" justifyContent="center">
              <Box pos="absolute" className="heroItems" bottom={50} >
                <Box display="flex" justifyContent="space-between" textAlign="center">
                  <Box>
                    <Text color="white" fontSize={{base: '18px', md: '28px'}} fontWeight="semibold">1,020 hp</Text>
                    <Text color="white" fontSize="13px">Peak Power</Text>
                  </Box>
                  <Box>
                    <Text color="white" fontSize={{base: '18px', md: '28px'}} fontWeight="semibold">9.23 s</Text>
                    <Text color="white" fontSize="13px">@155 mph 1/4 mile</Text>
                  </Box>
                  <Box>
                    <Text color="white" fontSize={{base: '18px', md: '28px'}} fontWeight="semibold">1.99s</Text>
                    <Text color="white" fontSize="13px">0-60 mph*</Text>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box bg="white" py="50px" px={{md: '150px', base: '30px'}}>
          <Box>
            <Grid templateColumns='repeat(6, 1fr)'>
              <GridItem colSpan={{md: 2, base: 6}}>
                <Text fontSize="20px">Plaid</Text>
                <Text fontSize="28px" fontWeight="semibold" letterSpacing={1}>Beyond Ludicrous</Text>
                <div>
                  <Button mt={2} w={{base: '100%', md: '60%'}} border="2px" borderColor="black" bg="none" _hover={{color: 'white', bg: 'black'}}>Order Now</Button>
                </div>
                <div>
                  <Button my={4} w={{base: '100%', md: '60%'}}>Compare Models</Button>
                </div>
              </GridItem>
              <GridItem colSpan={{md: 4, base: 6}}>
                <Text color="gray">Model S Plaid has the quickest acceleration of any vehicle in production. Updated battery architecture for all Model S trims enables back-to-back track runs without performance degradation. Chat with a Tesla Advisor to learn more about Model S or schedule a demo drive today.</Text>
              </GridItem>
            </Grid>
          </Box>
        </Box>

        <Box bg="gray.100" py="50px">
          <Box px={{md: '150px', base: '30px'}}>
            <Text fontSize="28px" fontWeight="semibold" letterSpacing={1}>Electric Powertrain</Text>
            <Text color="gray" py={2} w={{md: '70%', base: '100%'}}>Model S platforms unite powertrain and battery technologies for unrivaled performance, range and efficiency. New module and pack thermal architecture allows faster charging and gives you more power and endurance in all conditions.</Text>
          </Box>
          <Box py="40px" px={{md: '50px', base: '30px'}}>
            <Image src="/images/Model S Tri Motor All-Wheel Drive.jpg"/>
          </Box>
          <Box px={{md: '150px', base: '30px'}}>
            <Grid templateColumns='repeat(6, 1fr)' gap={10}>
              <GridItem colSpan={{md: 3, base: 6}}>
                <Box color="gray.500" borderTop="4px" _hover={{color: 'black'}} cursor="pointer">
                  <Text fontSize="18px" fontWeight="semibold" py={2}>Modal S</Text>
                  <Text>Dual Motor modal S All-Wheel Drive unlocks more range than any other vehicle in our current lineup, with insane power and maximum control.</Text>
                  <Box display="flex" justifyContent="space-between" py={3}>
                    <Box>
                      <Text fontSize="24px" fontWeight="semibold">3.1s</Text>
                      <Text>0-60 mph</Text>
                    </Box>
                    <Box>
                      <Text fontSize="24px" fontWeight="semibold">405 mi</Text>
                      <Text>Range (EPA est.)</Text>
                    </Box>
                    <Box>
                      <Text fontSize="24px" fontWeight="semibold">670 hp</Text>
                      <Text>Peak Power</Text>
                    </Box>
                  </Box>
                </Box>
              </GridItem>
              <GridItem colSpan={{md: 3, base: 6}}>
                <Box color="gray.500" borderTop="4px" _hover={{color: 'black'}} cursor="pointer">
                  <Text fontSize="18px" fontWeight="semibold" py={2}>Modal S Plaid</Text>
                  <Text>Maintain 1,000+ horsepower all the way to 200 mph with Tri-Motor All-Wheel Drive, featuring torque vectoring and three independent carbon-sleeved rotors.</Text>
                  <Box display="flex" justifyContent="space-between" py={3}>
                    <Box>
                      <Text fontSize="24px" fontWeight="semibold">1.9 s*</Text>
                      <Text>0-60 mph</Text>
                    </Box>
                    <Box>
                      <Text fontSize="24px" fontWeight="semibold">396 mi</Text>
                      <Text>Range (EPA est.)</Text>
                    </Box>
                    <Box>
                      <Text fontSize="24px" fontWeight="semibold">1,020 hp</Text>
                      <Text>Peak Power</Text>
                    </Box>
                  </Box>
                </Box>
              </GridItem>
            </Grid>
            <Box>
              <Text color="gray.500" textAlign="center" pt={10} fontSize="xs">*with rollout substracted</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  )
}
