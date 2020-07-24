import React, { useState, useContext, useEffect } from 'react'
import { Header, Segment, Container, Label, Button, Divider, Icon, Loader, Image, Grid, Item } from 'semantic-ui-react'
import { useParams } from 'react-router-dom';
import { AppState } from '../context';
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
                        <Segment compact color='purple'>
                                <Header as='h1' textAlign='center'>{auctionItem.manufacturer} {auctionItem.modelNo}</Header>
                                <Grid compact centered>
                                        <Grid.Column width="5">
                                                <Grid.Row style={{marginTop:"25px"}} >
                                                        <Image verticalAlign='center' size='massive' src={auctionItem.photoTime} />
                                                </Grid.Row>
                                                <Divider />
                                        </Grid.Column>
                                        <Grid.Column width="11">
                                                <Grid centered padded>
                                                        <Grid.Row>

                                                                <Segment attached >
                                                                      
                                                                        <Header as="h1" textAlign='center'>
                                                                                Minimum Ask:  ${auctionItem.minimumAsk}
                                                                        </Header>
                                                                        <Header as="h3" textAlign='center'>
                                                                                {sellers[auctionItem.lister]['firstName']} {auctionItem.boxBool  ? "has" :"doesn't have"} papers from {auctionItem.manufacturer} for this purchase.
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