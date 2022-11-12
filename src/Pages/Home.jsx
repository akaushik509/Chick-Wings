import { Box,Heading,Grid,Image,Flex,Button } from "@chakra-ui/react";
import { hover } from "@testing-library/user-event/dist/hover";
import ImageSlider from "./ImageSlider";
import { SlideData } from "./SlideData";
import Footer from "./Footer";


function Home(){
    /* const style={
        marginTop:"0px"
    } */
    const style={
        boxShadow:"rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
        padding:"10px",
        
    }
    const hoverStyle={
        boxShadow:"rgba(0, 0, 0, 0.35) 0px 5px 15px",
        padding:"10px"
    } 
    return(
        <div>
            <div >
            <Box w="100%" p={4} h="400px" margin="auto">
                <ImageSlider slides={SlideData} />
                <Box marginTop="20px" w="80%" margin="auto">
                    <Box align="left">
                        <Heading size="lg">Shop by categories</Heading>
                        <p>Freshest meats just for you</p>
                    </Box>
                    <Grid templateRows='repeat(3, 1fr)' templateColumns='repeat(4, 1fr)' gap={10}  align="center"  >
                        <div style={style}  >
                            <Image src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/7db4abf7-cdba-6809-37d1-e988cb4c8af0/original/Todays_Deal_1.png?format=webp"/>
                            <Heading size="sm">Today's Deals</Heading>
                        </div>
                        <div style={style}>
                            <Image src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/85c38154-50b0-d61b-cf39-c4a3ff5dd4f7/original/Chicken_(1).png?format=webp"/>
                            <Heading size="sm">Chicken</Heading>
                        </div>
                        <div style={style}>
                            <Image src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/02337ccd-8109-c890-c9e9-226563158761/original/FIsh.png?format=webp"/>
                            <Heading size="sm">Fish & Seafood</Heading>
                        </div>
                        <div style={style}>
                            <Image src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/9d609a50-3c06-2b15-5f84-5792e54d6788/original/Mu.png?format=webp"/>
                            <Heading size="sm">Mutton</Heading>
                        </div>
                        <div style={style}>
                            <Image src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/8cd5f147-5466-1ae9-8886-3ac40256f1c7/original/RTC.png?format=webp"/>
                            <Heading size="sm">Ready to Cook</Heading>
                        </div>
                        <div style={style}>
                            <Image src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/28af2cf6-6ace-49b9-d976-4a1f454acec9/original/Prawn.png?format=webp"/>
                            <Heading size="sm">Prawns</Heading>
                        </div>
                        <div style={style}>
                            <Image src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/1d392d04-cbd8-694f-af12-df8fef2d309f/original/Coldcuts.png?format=webp"/>
                            <Heading size="sm">Cold Cuts</Heading>
                        </div>
                        <div style={style}>
                            <Image src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/12a04930-95cc-73f5-fd3b-16a90ef5bad5/original/Spread_Bottle1.png?format=webp"/>
                            <Heading size="sm">Spreads</Heading>
                        </div>
                        <div style={style}>
                            <Image src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/6e4632bb-b664-3b17-9d68-10fab8cdfbd4/original/Eggs.png?format=webp"/>
                            <Heading size="sm">Eggs</Heading>
                        </div>
                        <div style={style}>
                            <Image src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/67879217-d0e3-42ff-c158-02b20074aa27/original/Biryani.png?format=webp"/>
                            <Heading size="sm">Biriyani & kebab</Heading>
                        </div>
                        <div style={style}>
                            <Image src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/399f1295-122a-5e94-66e1-d605d35f60a0/original/Combo_(1).png?format=webp"/>
                            <Heading size="sm">Combos</Heading>
                        </div>
                        <div style={style}>
                            <Image src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/4f3d8a54-b260-79ec-a110-6bc31a6b987d/original/PBM_6_(7).png?format=webp"/>
                            <Heading size="sm">Plant-Based-Meat</Heading>
                        </div>
                    </Grid>
                    <Box align="left" marginTop={"20px"}>
                        <Heading size="lg">Breakfast & Snacking Specials</Heading>
                    </Box>
                    <Flex gap="20px">
                        <div style={style}>
                            <Image src="https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/0d28ad62-9409-c682-3c22-8e0ebc1697d5/original/Chunky-Continental-Chicken-Spread.jpg?format=webp"/>
                            <Heading size="xs">Chunky Continental Chicken Spread</Heading>
                            <br/>
                            <br/>
                            <p>A Nakhrebaaz chef's creation: Real chicken & mega flavour</p>
                            <br/>
                            <br/>
                            <Heading size="xs">Pieces: 1</Heading>
                            <br/>
                            <Flex justifyContent={"space-between"}>
                                <Heading size="md">MRP: Rs.219</Heading>
                                <Button backgroundColor={"red"} color="white">ADD TO CART</Button>
                            </Flex>
                            <br/>
                            <hr/>
                            <Flex justifyContent={"center"}>
                                <Image src="https://www.licious.in/img/rebranding/express_delivery.svg"/>
                                <p>Today in 90 min</p>
                            </Flex>
                        </div>
                        <div style={style}>
                            <Image src="https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/ad60f59b-612e-11b8-80f4-3308430cc609/original/Peppery-Chicken-Salami_(1).jpg?format=webp"/>
                            <Heading size="xs">Chunky Continental Chicken Spread</Heading>
                            <br/>
                            <br/>
                            <p>A Nakhrebaaz chef's creation: Real chicken & mega flavour</p>
                            <br/>
                            <br/>
                            <Heading size="xs">Pieces: 1</Heading>
                            <br/>
                            <Flex justifyContent={"space-between"}>
                                <Heading size="md">MRP: Rs.219</Heading>
                                <Button backgroundColor={"red"} color="white">ADD TO CART</Button>
                            </Flex>
                            <br/>
                            <hr/>
                            <Flex justifyContent={"center"}>
                                <Image src="https://www.licious.in/img/rebranding/express_delivery.svg"/>
                                <p>Today in 90 min</p>
                            </Flex>
                        </div>
                        <div style={style}>
                            <Image src="https://dao54xqhg9jfa.cloudfront.net/OMS-ProductMerchantdising/36c60289-829d-830f-d4c7-c62675adb323/original/Frank---Chorizo-unCooked+new.jpg?format=webp"/>
                            <Heading size="xs">Chunky Continental Chicken Spread</Heading>
                            <br/>
                            <br/>
                            <p>A Nakhrebaaz chef's creation: Real chicken & mega flavour</p>
                            <br/>
                            <br/>
                            <Heading size="xs">Pieces: 1</Heading>
                            <br/>
                            <Flex justifyContent={"space-between"}>
                                <Heading size="md">MRP: Rs.219</Heading>
                                <Button backgroundColor={"red"} color="white">ADD TO CART</Button>
                            </Flex>
                            <br/>
                            <hr/>
                            <Flex justifyContent={"center"}>
                                <Image src="https://www.licious.in/img/rebranding/express_delivery.svg"/>
                                <p>Today in 90 min</p>
                            </Flex>
                        </div>
                    </Flex>
                    <Box align="left" marginTop={"70px"}>
                        <Heading size="lg">Check out our blog</Heading>
                    </Box>
                    <Flex gap="20px" padding="30px" marginBottom="50px">
                        <div>
                            <Image src="https://www.licious.in/blog/wp-content/uploads/2022/10/shutterstock_521679751.jpg" w="100%" h="90%" borderRadius="5px"/>
                            <Heading size="md">Do you love sandwiches? If yes, how about you
                            learn how to make a healthy and yummy
                            Chicken Club Sandwich at home?</Heading>
                        </div>
                        <div>
                            <Image src="https://www.licious.in/blog/wp-content/uploads/2022/10/shutterstock_1437076970.jpg" w="100%" h="90%" borderRadius="5px"/>
                            <Heading size="md">This Balsamic Chicken Breast Recipe Is
                            Succulent, Juicy and Loaded with Flavour - A
                            Must Try!</Heading>
                        </div>
                        <div>
                            <Image src="https://www.licious.in/blog/wp-content/uploads/2022/10/shutterstock_336645890-5.jpg" w="100%" h="90%" borderRadius="5px"/>
                            <Heading size="md">Check Out This Saucy, Creamy Pasta Recipe
                            With Salmon and Peas - An Easy Throw
                            Together Recipe</Heading>
                        </div>
                    </Flex>
                    <Image  src="https://d2407na1z3fc0t.cloudfront.net/homepageStaticBanner/homepageStaticBanner_62a34b8cba7db" margin={"auto"}/>
                   
                    <Footer/>
                </Box>
            </Box>
            
            </div>
        </div>
    )
}

export default Home