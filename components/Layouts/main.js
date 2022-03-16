import Head from 'next/head'
import Navbar from '../navbar.js'
import { Box, Container } from '@chakra-ui/react'
import VoxelNur from './voxel-nur.js'
import NoSsr from '../no-ssr.js'


const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <title>Nur Sumusod - Homepage</title>
            </Head>

            <Navbar path={router.asPath} />
            
            <Container maxW="container.md" pt={14}>
                <NoSsr>
                <VoxelNur />
                </NoSsr>
            {children}
            </Container>
        </Box>
    )
}

export default Main