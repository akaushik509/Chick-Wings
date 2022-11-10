import { Box,
    Image,
    Input,
    Flex,
    Spacer,
    Heading,
    Modal,
    ModalBody,
    Text,
    ModalHeader,
    ModalContent,
    ModalOverlay,
    Button,
    useDisclosure,
    ModalCloseButton,
    ModalFoote,InputGroup,InputLeftElement,InputRightElement,Stack,ModalFooter,MenuButton,Menu,ChevronDownIcon,MenuList,MenuItem

} from "@chakra-ui/react";
import { SearchIcon} from '@chakra-ui/icons';
import Login from "./Login";
import {AppContext} from "../Context/AppContextProvider";
import { useContext } from "react";
import Cart from "./Cart";
import Home from "./Home";
import { Link, NavLink } from "react-router-dom";
import Chicken from "./Chicken";

function Navbar(){

    const { isOpen, onOpen, onClose } = useDisclosure()
    const { authState,handleLogout } = useContext(AppContext);
   
    return (
        <div>
            {/* Top Why Licious */}
            <Box bg="#EAEAEA"  h="25px">
                <Flex w="80%" border="1px solid" margin="auto">
                    <Box>
                        <Flex gap="10px">
                            <p size="xs">Why Chick Wings?</p>
                            <p size="xs">*</p>
                            <p size="xs">Download App</p>
                            <Image src="https://www.licious.in/img/rebranding/ios_app_icon.svg"/>
                            <Image src="https://www.licious.in/img/rebranding/android_app_icon.svg"/>
                        </Flex>
                    </Box>
                    <Spacer />
                    <Box>
                        <Flex gap="10px">
                            <p size="xs">FSSC 22000 Certification</p>
                            <p size="xs">*</p>
                            <p size="xs">About</p>
                            <p size="xs">*</p>
                            <p size="xs">Careers @Chick Wings</p>
                        </Flex>
                    </Box>
                </Flex>
            </Box>

            {/* navbar */}

            <Box style={{
            display:"flex",
            width:"100%",
            justifyContent:"space-around",
            marginTop:"5px",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
            position:"stiky",
            top:"0px",
            marginBottom:"0px",
            }} bg="white" h="70px">
                <Flex w="80%" border="1px solid" gap="20px">
                    <Image src="https://i.ibb.co/cCpV9hk/logo.jpg" margin="15px 15px 15px 15px"/>

                    <Flex>
                        <Image src="https://www.licious.in/img/rebranding/location_icon.svg" margin="15px 15px 15px 15px"/>
                        <Box margin="15px 0 0 -15px ">
                            <Heading size="xs" color="gray">BANGALORE</Heading>
                            <Flex gap="20px">
                                <Heading size="xs">Indira nagar</Heading>
                                <button onClick={onOpen}>^</button>
                                <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
                                    <ModalOverlay />
                                    <ModalContent>
                                    <ModalHeader>Looking at changing your location?</ModalHeader>
                                    <ModalCloseButton />
                                    <ModalBody>
                                        <Text mb='1rem'>
                                            This might affect the availability of items in your cart. Stay here/Change Location
                                        </Text>
                                        
                                    </ModalBody>

                                    <ModalFooter gap="10px">
                                        <Button variant='ghost' border="1px solid">Stay Here</Button>
                                        <Button colorScheme='red' mr={3} onClick={onClose}>
                                            Change Area
                                        </Button>
                                    </ModalFooter>
                                    </ModalContent>
                                </Modal>
                            </Flex>
                        </Box>
                    </Flex>
                    {/* <Input placeholder='Search for any delicious product' size="lg" w="30%" marginLeft="20px" marginTop="10px"/> */}
                    <Stack spacing={1} gap="20px">
                    <InputGroup size="lg" w="350px" marginLeft="20px" marginTop="10px"> 
                        <Input placeholder='Search for any delicious product'  />
                        <InputRightElement children={<SearchIcon color='green.500' />} />
                    </InputGroup>
                    </Stack>

                    {/* Category */}
                    <Flex gap="10px" >
                        <Image src="https://www.licious.in/img/rebranding/category-dropdown-icon.svg" margin="25px 0px 25px 25px"/>
                        <Menu>
                            <MenuButton as={Button}  _hover={{color:"#FF6200"}} bg="white" marginTop={"15px"}>
                                Category
                            </MenuButton>
                            <MenuList>
                                <MenuItem minH='48px'>
                                <Image
                                    boxSize='2rem'
                                    borderRadius='full'
                                    src='https://dao54xqhg9jfa.cloudfront.net/OMS-Category/d52759ea-ba5a-0f5b-3dc1-d28875335a3f/original/Todays_Deal_1.png'
                                    alt="Today's Deals"
                                    mr='12px'
                                />
                                <span><NavLink to="/">Today's Deals</NavLink></span>
                                
                                </MenuItem>
                                <MenuItem minH='40px'>
                                <Image
                                    boxSize='2rem'
                                    borderRadius='full'
                                    src='https://dao54xqhg9jfa.cloudfront.net/OMS-Category/ad04872e-60af-387c-533c-efa7dc6eb565/original/Chicken_(1).png'
                                    alt='Simon the pensive'
                                    mr='12px'
                                />
                                <span><NavLink to="/chicken">Chicken</NavLink></span>
                                </MenuItem>
                                <MenuItem minH='40px'>
                                <Image
                                    boxSize='2rem'
                                    borderRadius='full'
                                    src='https://dao54xqhg9jfa.cloudfront.net/OMS-Category/eb162d28-5f88-a381-1d45-7f2f66d2c776/original/FIsh.png'
                                    alt='Chicken'
                                    mr='12px'
                                />
                                <span><NavLink to="/fish">Fish & Seafood</NavLink></span>
                                </MenuItem>
                                <MenuItem minH='40px'>
                                <Image
                                    boxSize='2rem'
                                    borderRadius='full'
                                    src='https://dao54xqhg9jfa.cloudfront.net/OMS-Category/7113e792-7025-9e6f-6057-7174edf30856/original/Mu.png'
                                    alt='Simon the pensive'
                                    mr='12px'
                                />
                                <span>Mutton</span>
                                </MenuItem>
                                <MenuItem minH='40px'>
                                <Image
                                    boxSize='2rem'
                                    borderRadius='full'
                                    src='https://dao54xqhg9jfa.cloudfront.net/OMS-Category/43faaebc-f2ae-102a-ea01-af3e6c37a890/original/RTC.png'
                                    alt='Simon the pensive'
                                    mr='12px'
                                />
                                <span><NavLink to="/cook">Ready to Cook</NavLink></span>
                                </MenuItem>
                                <MenuItem minH='40px'>
                                <Image
                                    boxSize='2rem'
                                    borderRadius='full'
                                    src='https://dao54xqhg9jfa.cloudfront.net/OMS-Category/404e48e5-c887-1e12-7a3a-232e01fc9771/original/Prawn.png'
                                    alt='Simon the pensive'
                                    mr='12px'
                                />
                                <span><NavLink to="/prawns">Prawns</NavLink></span>
                                </MenuItem>
                                <MenuItem minH='40px'>
                                <Image
                                    boxSize='2rem'
                                    borderRadius='full'
                                    src='https://dao54xqhg9jfa.cloudfront.net/OMS-Category/5c7f1b3a-47b4-3ade-f170-f003cace2482/original/Coldcuts.png'
                                    alt='Simon the pensive'
                                    mr='12px'
                                />
                                <span><NavLink to="/coldcuts">Cold Cuts</NavLink></span>
                                </MenuItem>
                                <MenuItem minH='40px'>
                                <Image
                                    boxSize='2rem'
                                    borderRadius='full'
                                    src='https://dao54xqhg9jfa.cloudfront.net/OMS-Category/88d8c760-ee1f-7696-7827-fcc9661925cc/original/Spread_Bottle1.png'
                                    alt='Simon the pensive'
                                    mr='12px'
                                />
                                <span><NavLink to="/spreads">Spreads</NavLink></span>
                                </MenuItem>
                                <MenuItem minH='40px'>
                                <Image
                                    boxSize='2rem'
                                    borderRadius='full'
                                    src='https://dao54xqhg9jfa.cloudfront.net/OMS-Category/04d58840-f014-e613-24d4-1908db9a7e63/original/Eggs.png'
                                    alt='Simon the pensive'
                                    mr='12px'
                                />
                                <span><NavLink to="/eggs">Eggs</NavLink></span>
                                </MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex>

                    {/* Profile/Login */}

                    <Flex gap="10px" margin="15px 15px 15px 15px">
                        <Image src="https://www.licious.in/img/rebranding/profile_icon.svg"/>
                        <Box>
                            
                            <Button>{authState.isAuth?"Logout":<NavLink to="/login">Login</NavLink>}</Button>
                            
                        </Box>
                    </Flex>

                    <Box margin="15px 15px 15px 15px">
                        <Button><NavLink to="/cart">Cart</NavLink></Button>
                    </Box>

                </Flex>
            </Box>
            
        </div>
    )
}
export default Navbar;