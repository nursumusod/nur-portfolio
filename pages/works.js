import { Container, Box, Heading, SimpleGrid, Divider } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'

import  thumbProject from '../public/images/work.jpg'
const Works = () => {
    return (
        <Container>
            <Heading as ="h3" fontSize={20} mb={4} mt={4}>
                Works
            </Heading>

            <SimpleGrid  gap={6}>
                <Section delay={0.4}>
                    <Divider my={6} />
                    <WorkGridItem id="Portfolio" title="Portfolio" thumbnail={thumbProject}>
                        My first creation in Web Development using Next.js, Chakra ui
                        Framer Motion, and React.js
                    </WorkGridItem>
                </Section>
            </SimpleGrid>
        </Container>
    )
}

export default Works