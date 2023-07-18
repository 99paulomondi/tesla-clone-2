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
        <Box className="mybreak" backgroundImage="url('/images/Side view of red Model S.jpg')"></Box>

        <Box px={{md: '150px', base: '30px'}} py="50px">
          <Grid templateColumns='repeat(6, 1fr)' gap={10}>
            <GridItem colSpan={{md: 2, base: 6}}>
              <Text color="white" fontSize="20px">Exterior</Text>
              <Text color="white" fontSize="28px" fontWeight="semibold" letterSpacing={1}>Designed for Efficiency</Text>
              <div>
                <Button mt={2} w={{base: '100%', md: '70%'}} color="white" border="2px" borderColor="white" bg="none" _hover={{color: 'black', bg: 'white'}}>Order Now</Button>
              </div>
              <div>
                <Button my={4} w={{base: '100%', md: '70%'}} bg="gray.900" color="white" _hover={{bg: 'gray.600'}}>Compare Models</Button>
              </div>
            </GridItem>
            <GridItem colSpan={{md: 4, base: 6}}>
              <Text color="white" fontSize="17px">Model S Plaid has the quickest acceleration of any vehicle in production. Updated battery architecture for all Model S trims enables back-to-back track runs without performance degradation. Chat with a Tesla Advisor to learn more about Model S or schedule a demo drive today.</Text>
            </GridItem>
          </Grid>
        </Box>

        <Box px={{md: '150px', base: '30px'}}>
          <Grid templateColumns='repeat(4, 1fr)'>
            <GridItem colSpan={{base: 4, md: 2}}>
              <Box pt={{base: '20px', md: '100px'}} pr={{md: '90px'}}>
                <Text color="white" fontWeight="semibold" fontSize="18px">Relentless Performance</Text>
                <Text color="white" fontSize="17px" py={2}>Staggered, performance wheels and tires keep the car planted and help transfer maximum power down to the road.</Text>
              </Box>
            </GridItem>
            <GridItem colSpan={{base: 4, md: 2}}>
              <Image src="/images/Red Model S front left wheel.jpg" width="100%" miHeight="350px"/>
            </GridItem>
          </Grid>

          <Grid templateColumns='repeat(4, 1fr)'>
            <GridItem colSpan={{base: 4, md: 2}}>
              <Image src="/images/Red Model S back view.jpg" width="100%" miHeight="350px"/>
            </GridItem>
            <GridItem colSpan={{base: 4, md: 2}}>
              <Box pt={{base: '20px', md: '100px'}} pl={{md: '90px'}}>
                <Text color="white" fontWeight="semibold" fontSize="18px">Optimized Aerodynamics</Text>
                <Text color="white" fontSize="17px" pt={2}>Attention to detail on all exterior surfaces makes Model S the most aerodynamic production car on Earth.</Text>
              </Box>
            </GridItem>
          </Grid>

          <Grid templateColumns='repeat(4, 1fr)'>
            <GridItem colSpan={{base: 4, md: 2}}>
              <Box pt={{base: '20px', md: '100px'}} pr={{md: '90px'}}>
                <Text color="white" fontWeight="semibold" fontSize="18px">Refined Styling</Text>
                <Text color="white" py={2} fontSize="17px">An iconic silhouette meets refreshed, elegant proportions.</Text>
              </Box>
            </GridItem>
            <GridItem colSpan={{base: 4, md: 2}}>
              <Image src="/images/Red Model S front-side view.jpg" width="100%" miHeight="350px"/>
            </GridItem>
          </Grid>
        </Box> 
      </Box>
      {/* End of blackbox */}

      {/* This is a video section */}
      <Box>
        <div className="myrange">
          <video autoPlay muted loop playsInline className="backgroundClip">
            <source src="/videos/Model S  Tesla 18.webm"/>
          </video>
          <Box>
            <Grid templateColumns='repeat(7, 1fr)'>
              <GridItem colSpan={{md: '5', base: '7'}} position="relative" px={{md: '50px', base: '30px'}}>
                <Box>
                  <Box position={{md: 'absolute'}} w={{md:'90%', base: '100%'}} bottom="70px" py={{base: '100px', md: '0px'}}>
                    <Box>
                      <Box display="flex" justifyContent="space-between" py={3}>
                        <Box>
                          <Text fontSize="24px" fontWeight="semibold"  color="white">1.9 s*</Text>
                          <Text  color="white">0-60 mph</Text>
                        </Box>
                        <Box>
                          <Text fontSize="24px" fontWeight="semibold"  color="white">396 mi</Text>
                          <Text  color="white">Range (EPA est.)</Text>
                        </Box>
                        <Box>
                          <Text fontSize="24px" fontWeight="semibold"  color="white">1,020 hp</Text>
                          <Text  color="white">Peak Power</Text>
                        </Box>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </GridItem>
              <GridItem colSpan={{md: '2', base: '7'}}>
                <Box bg="white" minHeight={{md: '100vh', base: '62vh'}} width="100%" position="relative">
                  <Box px="30px" py="50px">
                    <Text fontSize="20px">Range</Text>
                    <Text fontSize="28px" fontWeight="semibold" letterSpacing={1}>Go Anywhere</Text>
                    <Text py={2}>With up to 405 miles of estimated range and access to the world’s largest and most powerful fast charging network, you’ll spend less time plugged in and more time on the road. Chat with a Tesla Advisor to learn more about Model S or schedule a demo drive today.</Text>
                    <Box pt={{md: '30vh', base: '20px'}}>
                      <Box>
                        <Button w="100%" border="2px" borderColor="black" bg="none" _hover={{bg: 'black', color: 'white'}}>Order Now</Button>
                      </Box>
                      <Box>
                        <Button mt="4" w="100%">Find My Route</Button>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </GridItem>
            </Grid>
          </Box>
        </div>
      </Box>
    </>
  )
}
