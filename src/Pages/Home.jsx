import { Box,Heading,Grid,Image } from "@chakra-ui/react";
import ImageSlider from "./ImageSlider";
import { SlideData } from "./SlideData";

function Home(){
    /* const style={
        marginTop:"0px"
    } */
    return(
        <div>
            <div >
            <Box w="100%" p={4} h="400px" margin="auto">
                <ImageSlider slides={SlideData} />
                <Box marginTop="10px" w="80%" border={"1px solid black"} margin="auto">
                    <Box align="left">
                        <Heading size="lg">Shop by categories</Heading>
                        <p>Freshest meats just for you</p>
                    </Box>
                    <Grid templateRows='repeat(3, 1fr)' templateColumns='repeat(4, 1fr)' gap={4}  align="center">
                        <div>
                            <Image src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/7db4abf7-cdba-6809-37d1-e988cb4c8af0/original/Todays_Deal_1.png?format=webp"/>
                            <Heading size="sm">Today's Deals</Heading>
                        </div>
                        <div>
                            <Image src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/85c38154-50b0-d61b-cf39-c4a3ff5dd4f7/original/Chicken_(1).png?format=webp"/>
                            <Heading size="sm">Chicken</Heading>
                        </div>
                        <div>
                            <Image src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/02337ccd-8109-c890-c9e9-226563158761/original/FIsh.png?format=webp"/>
                            <Heading size="sm">Fish & Seafood</Heading>
                        </div>
                        <div>
                            <Image src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/9d609a50-3c06-2b15-5f84-5792e54d6788/original/Mu.png?format=webp"/>
                            <Heading size="sm">Mutton</Heading>
                        </div>
                        <div>
                            <Image src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/8cd5f147-5466-1ae9-8886-3ac40256f1c7/original/RTC.png?format=webp"/>
                            <Heading size="sm">Ready to Cook</Heading>
                        </div>
                        <div>
                            <Image src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/28af2cf6-6ace-49b9-d976-4a1f454acec9/original/Prawn.png?format=webp"/>
                            <Heading size="sm">Prawns</Heading>
                        </div>
                        <div>
                            <Image src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/1d392d04-cbd8-694f-af12-df8fef2d309f/original/Coldcuts.png?format=webp"/>
                            <Heading size="sm">Cold Cuts</Heading>
                        </div>
                        <div>
                            <Image src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/12a04930-95cc-73f5-fd3b-16a90ef5bad5/original/Spread_Bottle1.png?format=webp"/>
                            <Heading size="sm">Spreads</Heading>
                        </div>
                        <div>
                            <Image src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/6e4632bb-b664-3b17-9d68-10fab8cdfbd4/original/Eggs.png?format=webp"/>
                            <Heading size="sm">Eggs</Heading>
                        </div>
                        <div>
                            <Image src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/67879217-d0e3-42ff-c158-02b20074aa27/original/Biryani.png?format=webp"/>
                            <Heading size="sm">Biriyani & kebab</Heading>
                        </div>
                        <div>
                            <Image src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/399f1295-122a-5e94-66e1-d605d35f60a0/original/Combo_(1).png?format=webp"/>
                            <Heading size="sm">Combos</Heading>
                        </div>
                        <div>
                            <Image src="https://dao54xqhg9jfa.cloudfront.net/OMS-Category/4f3d8a54-b260-79ec-a110-6bc31a6b987d/original/PBM_6_(7).png?format=webp"/>
                            <Heading size="sm">Plant-Based-Meat</Heading>
                        </div>
                    </Grid>
                </Box>
            </Box>
            
            </div>
        </div>
    )
}

export default Home