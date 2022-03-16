import NextLink from 'next/link';
import {
    Text,
    Container, 
    Box, 
    Heading, 
    Image, 
    useColorModeValue, 
    Button
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import { ChevronRightIcon } from '@chakra-ui/icons'
import {BioSection, BioYear} from '../components/bio'

const Page = () => {
    return (
        <Container>
            <Box borderRadius="lg" bg={useColorModeValue('orange.300', 'orange.700')} p={2} mb={6} mt={6} align="center">
                Hello! i&apos;m a self-taught developer based in the Philippines!
            </Box>

            <Box display={{md: 'flex' }} >
                <Box flexGrow={1}>
                <Heading as="h2" variant="page-title">
                    Nur Sumusod
                </Heading>
                <p>Artist / Web Designer / Self-taught developer</p>
                </Box>
                
                <Box 
                flexShrink={0} 
                mt={{base:4, md: 0}} 
                ml={{md: 6}} 
                align="center"
                >
                    <Image  
                    borderColor="red.400" 
                    borderWidth={3} 
                    borderStyle="solid" 
                    maxWidth="100px" 
                    display="inline-block" 
                    borderRadius="full" 
                    src="/images/nur.jpg"
                    alt="Profile Image"/>
                </Box>
            </Box>
            
            <Section delay={0.1}>
                <Heading as="h3" variant="section-title" mt={6} > 
                    Work
                </Heading>
                <Text bg={useColorModeValue('orange.300', 'orange.700')} 
                borderBottomLeftRadius={20} 
                borderTopRightRadius={20} 
                borderTopLeftRadius={5} 
                borderBottomRightRadius={5} 
                p={5}
                boxShadow={"2xl"}
                >
                <Paragraph >Nur is a freelance and has a passion to learn
                    on how to become a software engineer. as of now, he spend
                    his time learning new software to develop his skill more. currently unemloyed
                    and looking for a company to grow with.
                </Paragraph>
                </Text>
                <Box align="center" my={4}>
                    <NextLink href="/works">
                        <Button rightIcon={<ChevronRightIcon />} colorScheme="orange" mt={4} >
                            My portfolio
                        </Button>
                    </NextLink>
                </Box>
            </Section>

            <Section delay={0.2}>
                <Heading as="h3" variant="section-title">
                    Bio
                </Heading>
                    <Text bg={useColorModeValue('orange.300', 'orange.700')} 
                    borderBottomLeftRadius={20} borderTopRightRadius={20} 
                    borderTopLeftRadius={5} 
                    borderBottomRightRadius={5} 
                    p={5}
                    boxShadow={"2xl"}
                    >
                        <BioSection >
                            <BioYear>1996</BioYear>
                             Born in Pagadian CIty, Zamboanga Del Sur, Philippines.
                        </BioSection>
                        <BioSection>
                            <BioYear>2019</BioYear>
                            Completed the Bachelor&apos;s Program in Computer Engineering
                            at Southern Mindanao Colleges, Pagadian City.
                        </BioSection>
                        <BioSection>
                            <BioYear>2020</BioYear>
                            Worked as a Contact Tracer for the Department of the Interior and Local
                            Government which spearheaded the fight against COVID-19 in the Country.
                        </BioSection>
                    </Text>
             </Section>
            <Box align="center" my={4}>
                    <NextLink href="/resume">
                        <Button rightIcon={<ChevronRightIcon />} colorScheme="orange" mt={4} >
                            My Resume/CV
                        </Button>
                    </NextLink>
                </Box>
                
        </Container>
        
    )
}

export default Page
