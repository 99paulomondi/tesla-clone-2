import { Box, Text, Button, Image } from "@chakra-ui/react";
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

      
      <Box bg="black" paddingTop="50px" paddingBottom="50px">
        {/* this is the section for the modal S with the white interior */}
        <Box>
          <Text color="white" textAlign="center" fontSize="30px" fontWeight="semibold">Interior of the Future</Text>
        </Box>

        <Box>
          <Image src="/images/Model S with white interior.jpg" width="100%" minHeight={{md: '600px'}}/>
        </Box>

      {/* tis is the carousel section */}
      <Box py="90px" px="50px" borderRadius={5}>
        <Box>
          <Swiper spaceBetween={0} pagination={{clickable: true, el: '.swiper-custom-pagination'}} autoplay={{delay: 8000, disableOnInteraction: false,}} modules={[Pagination, Autoplay]} className="mySwiper">
            <SwiperSlide >
              <Box width="100%" height="550px" borderRadius={5}>
                <video autoPlay muted loop playsInline width="100%">
                  <source src="/videos/Model S _Tesla_11.webm"/>
                </video>
              </Box>
            </SwiperSlide>
            <SwiperSlide >
              <Box width="100%" height="550px" bg="blue" borderRadius={5}>
                <video autoPlay muted loop playsInline width="100%">
                  <source src="/videos/Model S _Tesla_2.webm"/>
                </video>
              </Box>
            </SwiperSlide>
            <SwiperSlide >
              <Box width="100%" height="500px" bg="orange" borderRadius={5}>
                <video autoPlay muted loop playsInline width="100%">
                  <source src="/videos/Model S _Tesla_13.webm"/>
                </video>
              </Box>
            </SwiperSlide>
            <SwiperSlide >
              <Box width="100%" height="500px" bg="green" borderRadius={5}>
                <video autoPlay muted loop playsInline width="100%">
                  <source src="/videos/Model S _Tesla_3.webm"/>
                </video>
              </Box>
            </SwiperSlide>
            <SwiperSlide >
              <Box width="100%" height="500px" bg="green" borderRadius={5}>
                <video autoPlay muted loop playsInline width="100%">
                  <source src="/videos/Model S _Tesla_15.webm"/>
                </video>
              </Box>
            </SwiperSlide>
          </Swiper>
          <Box py={2} display="flex" justifyContent="center">
            <Box>
              <div className="swiper-custom-pagination"/>
            </Box>
          </Box>
          
        </Box>
      </Box>
      </Box>

      
    </>
  )
}
