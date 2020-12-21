import PropTypes from 'prop-types'
import React, { Component , useContext} from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom';
// import  Carousel  from  'semantic-ui-carousel-react';
import firebase from 'firebase/app';

import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Menu,
  Responsive,
  Segment,
  Sidebar,
  Visibility,
} from 'semantic-ui-react'


// We using React Static to prerender our docs with server side rendering, this is a quite simple solution.
// For more advanced usage please check Responsive docs under the "Usage" section.
const getWidth = () => {
  const isSSR = typeof window === 'undefined'

  return isSSR ? Responsive.onlyTablet.minWidth : window.innerWidth
}

/* eslint-disable react/no-multi-comp */
/* Heads up! HomepageHeading uses inline styling, however it's not the best practice. Use CSS or styled components for
 * such things.
 */

  
const HomepageHeading = ({ mobile }) => 
{
return (<div>
  <Container text>
    <Header
      as='h1'
      content='Seller Portal'
      inverted
      style={{
        fontSize: mobile ? '2em' : '4em',
        fontWeight: 'normal',
        marginBottom: 0,
        marginTop: mobile ? '1.5em' : '3em',
      }}
    />
    <Divider hidden></Divider>
    <Button primary size='huge' as={Link} to={'/seller/login'}>
      Get Started
      <Icon name='right arrow' />
    </Button>

  </Container>
  {/* <div>
  <Carousel
    elements  =  {  elements  }
    duration  ={3000}
    animation  ='slide left'
    showNextPrev  =  {false}
  />
</div> */}
</div>
)
  }

HomepageHeading.propTypes = {
  mobile: PropTypes.bool,
}

/* Heads up!
 * Neither Semantic UI nor Semantic UI React offer a responsive navbar, however, it can be implemented easily.
 * It can be more complicated, but you can create really flexible markup.
 */
class DesktopContainer extends Component {
  state = {}

  hideFixedMenu = () => this.setState({ fixed: false })
  showFixedMenu = () => this.setState({ fixed: true })

  render() {
    const { children } = this.props
    const { fixed } = this.state

    return (
      <Responsive getWidth={getWidth} minWidth={Responsive.onlyTablet.minWidth}>
        <Visibility
          once={false}
          onBottomPassed={this.showFixedMenu}
          onBottomPassedReverse={this.hideFixedMenu}
        >
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 700, padding: '1em 0em' }}
            vertical
          >
            <Menu
              fixed={fixed ? 'top' : null}
              inverted={!fixed}
              pointing={!fixed}
              secondary={!fixed}
              size='large'
            >
              <Container>
                <Menu.Item href='/' fluid >
                  Home
                </Menu.Item>
                <Menu.Item href='/seller/homepage' active fluid>
                  Seller
                </Menu.Item>
                <Menu.Item href='/buyer/homepage' fluid>
                  Buyer
                </Menu.Item>
                <Menu.Item href='/contactus' fluid>
                  Contact Us
                </Menu.Item>



                
              </Container>
            </Menu>
            <HomepageHeading />
          </Segment>
        </Visibility>

        {children}
      </Responsive>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {
  state = {}

  handleSidebarHide = () => this.setState({ sidebarOpened: false })

  handleToggle = () => this.setState({ sidebarOpened: true })

  render() {
    const { children } = this.props
    const { sidebarOpened } = this.state

    return (
      <Responsive
        as={Sidebar.Pushable}
        getWidth={getWidth}
        maxWidth={Responsive.onlyMobile.maxWidth}
      >
        <Sidebar
          as={Menu}
          animation='push'
          inverted
          onHide={this.handleSidebarHide}
          vertical
          visible={sidebarOpened}
        >
          <Menu.Item href='/' active>
            Home
          </Menu.Item>
          <Menu.Item href='/seller/homepage'>
            Seller
          </Menu.Item>
          <Menu.Item href='/buyer/homepage' fluid>
                Buyer
          </Menu.Item>
          <Menu.Item href='/contactus' fluid>
                                                Contact Us
                </Menu.Item>
       
        </Sidebar>

        <Sidebar.Pusher dimmed={sidebarOpened}>
          <Segment
            inverted
            textAlign='center'
            style={{ minHeight: 350, padding: '1em 0em' }}
            vertical
          >
            <Container>
              <Menu inverted pointing secondary size='large'>
                <Menu.Item onClick={this.handleToggle}>
                  <Icon name='sidebar' />
                </Menu.Item>
               
              </Menu>
            </Container>
            <HomepageHeading mobile />
          </Segment>

          {children}
        </Sidebar.Pusher>
      </Responsive>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveContainer = ({ children }) => (
  <div>
    <DesktopContainer>{children}</DesktopContainer>
    <MobileContainer>{children}</MobileContainer>
  </div>
)

ResponsiveContainer.propTypes = {
  children: PropTypes.node,
}

const SellerLandingPage = () => (
  <ResponsiveContainer>
    <Segment style={{ padding: '4em 0em' }} vertical>
      <Grid container >
        <Grid.Row>
        <Grid.Column width={1}>
          </Grid.Column>
          <Grid.Column width={14}>
            <Header as='h3' style={{ fontSize: '2em' }}>
           Our Philosophy
            </Header>
            <p style={{ fontSize: '1.33em' }}>
            We want to make the watch selling process as simple as possible for you, and also get you maximum
market value. Once you list your watch, only authorized dealers who have been vetted by Watchbidz
will have three days to submit bids on your listing. After the auction is complete, you’ll receive the
contact info for the winning dealer and you can coordinate the rest of the transaction with them.
            </p>
          </Grid.Column>
          
        </Grid.Row>
        <Grid.Row>
          <Grid.Column width={1}>
          </Grid.Column>
          <Grid.Column width={14}>
          <Header as='h3' style={{ fontSize: '2em' }}>
           How It Works
            </Header>
            <p style={{ fontSize: '1.33em' }}>
            Upload 3 photos of your watch (whole piece, dial, and strap/bracelet)
             
             </p>
             <p style={{ fontSize: '1.33em' }}>
             Fill out all necessary watch details, including model number             
             </p>
             <p style={{ fontSize: '1.33em' }}>
             Hit ‘submit!’ and, once approved, you can see the latest bids!
             </p>
          </Grid.Column>
        </Grid.Row>
        

      </Grid>
    </Segment>
   
    {/* <Segment style={{ padding: '4em 0em' }} vertical>
      <Grid container >
       
      </Grid>
    </Segment>
    <Segment style={{ padding: '4em 0em' }} vertical>
      <Grid container >
        
      </Grid>
    </Segment> */}
    
  </ResponsiveContainer>
)

export default SellerLandingPage;