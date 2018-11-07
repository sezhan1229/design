import React from 'react'
import {Router, Link as RouteLink} from '@reach/router'
import {BorderBox, Box, Link, Flex, Relative} from '@primer/components'
import root from './nav'

export default props => (
  <Relative {...props}>
    <BorderBox
      id="sidenav"
      is="nav"
      width={['100%', '100%', 256, 256]}
      height="100%"
      bg="gray.0"
      borderLeft={0}
      borderBottom={0}
      borderRight={1}
      borderTop={[1, 1, 0, 0]}
      borderColor="gray.2"
      borderRadius={0}
    >
      <Router>
        <Section path="/design/global">
          <SectionLink to=".">Global</SectionLink>
          <PageLink to="accessibility">Accessibility</PageLink>
        </Section>
        <Section path="/design/foundation">
          <SectionLink to=".">Foundation</SectionLink>
          <PageLink to="color">Color</PageLink>
        </Section>
      </Router>
    </BorderBox>
  </Relative>
)

const Section = ({children, ...rest}) => (
  <BorderBox px={5} py={3} border={0} borderBottom={1} borderColor="gray.2" borderRadius={0} bg={null} {...rest}>
    <Flex flexDirection="column" alignItems="start">
      {children}
    </Flex>
  </BorderBox>
)

const SectionLink = props => (
  <Box my={3}>
    <Link is={RouteLink} color="gray.9" getProps={isCurrentSwitch('fontWeight', 'bold', null)} {...props} />
  </Box>
)

const PageLink = props => (
  <Box mb={3}>
    <Link is={RouteLink} fontSize={1} getProps={isCurrentSwitch('color', 'gray.9', 'blue.5')} {...props} />
  </Box>
)

function isCurrentSwitch(key, ifCurrent, otherwise) {
  return ({isCurrent}) => ({[key]: isCurrent ? ifCurrent : otherwise})
}
