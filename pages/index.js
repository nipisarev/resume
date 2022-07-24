import NextLink from 'next/link'
import {
  Container,
  Box,
  Badge,
  Heading,
  Image,
  UnorderedList,
  ListItem,
  useColorModeValue,
  Link
} from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'

const Page = () => {
  return (
    <Container maxW="container.md">
      <Box
        borderRadius="lg"
        bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
        p={3}
        mb={6}
        align="center"
      >
        Hi, I'm a full-stack developer based in Russia!
      </Box>

      <Box display={{ md: 'flex' }}>
        <Box flexGrow={1}>
          <Heading as="h2" variant="page-title">
            Nikolay Pisarev
          </Heading>
          <p>Software engineer</p>
        </Box>
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 0 }}
          ml={{ md: 6 }}
          align="center"
        >
          <Image
            borderColor="whiteAlpha.800"
            borderWidth={2}
            borderStyle="solid"
            borderRadius="full"
            maxWidth="100px"
            display="inline-block"
            src="/images/pisarev512.png"
          />
        </Box>
      </Box>
      <Section delay={0.1}>
        <Box display={{ md: 'flex' }}>
          <Box flexGrow={0}>
            <Heading as="h3" variant="section-title">
              <a href="https://parkly.ru" target="_blank">
                Parkly.ru
              </a>
            </Heading>
          </Box>
          <Box
            flexShrink={0}
            ml={{ base: 4 }}
            mr={{ base: 2 }}
            mt={{ base: 4 }}
          >
            <Heading as="h4" size="sm">
              Russia, Moscow
            </Heading>
          </Box>
          <Box flexShrink={0} mt={{ base: 3.5 }}>
            <Badge color={useColorModeValue('gray400', 'whiteAlpha.900')}>
              Lead Software Engineer
            </Badge>
          </Box>
          <Box flexGrow={1} mt={{ base: 4 }} align="right">
            <p>2021 - NOW</p>
          </Box>
        </Box>
        <Paragraph>
          Today users in Moscow have the new product and the best app for
          booking parking spaces in business centers and commercial parkings.
          Now they can ease booking, pay, and control all of the entries and
          exits on the parking.
        </Paragraph>
        <UnorderedList m={{ base: 4 }}>
          <ListItem>
            Created from zero a backend API service on Laravel and Postgres for
            booking parking spaces in business centers and commercial parking,
            we growing up on 25% MoM
          </ListItem>
          <ListItem>
            Ownership and management of the whole development cycle. Implemented
            a lot of different integrations with offline parking systems
            SOAP/XML/HTTP/TCP proto
          </ListItem>
          <ListItem>
            Developed own integration system, where parking doesn't have an
            automated system, only a barrier or gate, so now we can automate it
          </ListItem>
          <ListItem>
            Build new products type: partners API, monthly subscriptions,
            billing accounts for organizations and mobile payments
          </ListItem>
          <ListItem>
            Managing all of the scrum process: planning, online daily syncs by
            zoom, providing demo and retro. Interviewed new people to our team
            and motivated them for the best performance and efficiency. And
            organizing outside of work activities, where we can share knowledge,
            learn new technologies, programming languages and some interesting
            resolving algorithms issues
          </ListItem>
        </UnorderedList>
      </Section>
    </Container>
  )
}

export default Page
