import React, { useState, useContext, useEffect } from 'react'
import { Header, Segment, Container, Label, Button, Divider, Icon, Loader, Image, Grid, Item } from 'semantic-ui-react'
import { useParams } from 'react-router-dom';
import { AppState } from '../context';
import AuctionPhotos from './AuctionPhotos'
const AuctionPage = () => {
        const { id } = useParams();
        const { listed, sellers, } = React.useContext(AppState);
        const [auctionItem, setItem] = useState("");

        useEffect(() => {
                setItem(listed[id])

        }, [listed]);
        if (auctionItem) {
                return (
                        <Container>
                        <Segment centered compact color='purple'>
                                <Header as='h1' textAlign='center'>{auctionItem.manufacturer} {auctionItem.modelNo}</Header>
                                <AuctionPhotos item={auctionItem}/>
                                <Grid  compact centered>
                                        {/* <Grid.Column width="5">
                                                <Grid.Row style={{marginTop:"25px"}} >
                                                        <Image verticalAlign='center' size='massive' src={auctionItem.photoTime} />
                                                </Grid.Row>
                                                <Grid.Row style={{marginTop:"25px"}} >
                                                        <Image verticalAlign='center' size='massive' src={auctionItem.photoLatch} />
                                                </Grid.Row>
                                                <Grid.Row style={{marginTop:"25px"}} >
                                                        <Image verticalAlign='center' size='massive' src={auctionItem.photoCrown} />
                                                </Grid.Row>
                                                <Divider />
                                        </Grid.Column> */}
                                        <Grid.Column width="16">
                                                <Grid centered padded>
                                                        <Grid.Row>

                                                                <Segment attached color='purple'>
                                                                      
                                                                        <Header as="h1">
                                                                        Current highest bid: ${auctionItem.highestbid  ? auctionItem.highestbid : auctionItem.minimumAsk} 

                                                                        </Header>
                                                                        <Header as="h3" textAlign='center'>
                                                                                {sellers[auctionItem.lister]['firstName']} {auctionItem.boxBool  ? "has" :"doesn't have"} papers from {auctionItem.manufacturer} for this purchase.
                                                                        </Header>
                                                                        
                                                                </Segment>
                                                                <Segment attached color='purple'>
                                                                      <Header as='h4' floated='left' >
                                                                      Minimum Ask:  ${auctionItem.minimumAsk}
                                                                        Current highest bid: 
                                                                      </Header>

                                                                </Segment>
                                                        </Grid.Row>
                                                        
                                                </Grid>
                                        </Grid.Column>
                                </Grid>
                        </Segment >
                        </Container>
                        );
        }
        else {
                return (<div>Go ahead</div>)
        }
}

export default AuctionPage