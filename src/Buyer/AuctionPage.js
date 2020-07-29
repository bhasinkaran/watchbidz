import React, { useState, useContext, useEffect } from 'react'
import { Header, Form, Segment, Message, Container, Label, Button, Divider, Icon, Loader, Image, Grid, Item } from 'semantic-ui-react'
import { useParams } from 'react-router-dom';
import { AppState } from '../context';


import AuctionPhotos from './AuctionPhotos'
import { dbListed } from '../firebase/firebase';
const AuctionPage = () => {
        const { id } = useParams();
        const { listed, sellers,user } = React.useContext(AppState);
        const [auctionItem, setItem] = useState("");
        const [bid, setBid] = useState("");
        const [confirmbid, setConfirmBid] = useState("");
        const [error, setError]=useState(false);
        const[priceShowed, setPrice]=useState("");
        function updateBid() {
                if(confirmbid!=bid){
                        setError(true);
                        console.log("not match")
                }
                if(Number(bid)<Number(auctionItem.highestbid)||Number(bid)<Number(auctionItem.minimumAsk)){
                        setError(true)
                        console.log("too low")

                }
                else{
                        setError(false);
                        dbListed.child(id).child('highestbid').set(Number(confirmbid));
                        dbListed.child(id).child('bidder').set(user);

                }
                setConfirmBid("");
                setBid("");
        }
        useEffect(() => {
                setItem(listed[id])
                if(listed && listed[id]){
                        if(listed[id]['highestbid']){
                                // var format = new Intl.NumberFormat('en-IN', { 
                                //         style: 'currency', 
                                //         currency: 'INR' 
                                //     }).format(100); 
                                setPrice((Number(listed[id]['highestbid'])).toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' })); 
                                // console.log
                        }       
                        else{
                                // var format=new Intl.NumberFormat('en-INR', { 
                                //         style: 'currency', 
                                //         currency: 'INR', 
                                //         minimumFractionDigits: 2, 
                                //     })
                        //        setPrice(format.format(listed[id]['minimumask'])+" - Minimum Ask")
                        console.log(Number(listed[id]['minimumAsk']).toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' }))
                        setPrice(Number(listed[id]['minimumAsk']).toLocaleString('en-US', { style: 'currency', currency: 'USD' })+" - Minimum Ask"); 

                        }

        
                }
                
        }, [listed]);
        if (auctionItem) {
                return (
                        <Container>
                                <Segment centered compact color='purple'>
                                        <Header as='h1' textAlign='center'>{auctionItem.manufacturer} {auctionItem.modelNo}</Header>
                                        <AuctionPhotos item={auctionItem} />
                                        <Grid centered>
                                                <Grid.Column width="16">
                                                        <Grid centered padded>
                                                                <Grid.Row>
                                                                        <Segment attached color='purple'>
                                                                                <Header as="h1">
                                                                                        Current Bid: {priceShowed}
                                                                                </Header>
                                                                                <Header as="h3" textAlign='center'>
                                                                                        {sellers[auctionItem.lister]['firstName']} {auctionItem.boxBool ? "has" : "doesn't have"} papers from {auctionItem.manufacturer} for this purchase.
                                                                        </Header>
                                                                        </Segment>
                                                                        <Segment attached color='purple'>
                                                                                <Grid textAlign='center' padded>
                                                                                        <Grid.Column style={{ maxWidth: 450 }}>
                                                                                                <Header as='h2' color='teal' textAlign='center'>
                                                                                                        Place Your Bid:
                                                                                                </Header>
                                                                                                <Form size='large' warning={error} >
                                                                                                        <Segment stacked>
                                                                                                                <Form.Input icon='dollar sign' fluid value={bid}  iconPosition='left' onChange={(e) => { setBid(e.target.value) }} placeholder='Your Bid' />
                                                                                                                <Form.Input
                                                                                                                        onChange={(e) => { setConfirmBid(e.target.value) }}
                                                                                                                        fluid
                                                                                                                        value={confirmbid}
                                                                                                                        
                                                                                                                        icon='lock'
                                                                                                                        iconPosition='left'
                                                                                                                        placeholder='Confirm Bid'
                                                                                                                        type='password'
                                                                                                                />

                                                                                                                <Form.Button color='teal' fluid size='large' onClick={() => updateBid()}>
                                                                                                                        Confirm Bid
                                                                                                                </Form.Button>
                                                                                                        </Segment>
                                                                                                        <div style={{ maxWidth: 450 }}>
                                                                                                                <Message
                                                                                                                        warning
                                                                                                                        floating
                                                                                                                        content="Please make sure your bids match and that they are at least the minimum ask + higher than highest ask."
                                                                                                                        size="tiny"
                                                                                                                />
                                                                                                        </div>
                                                                                                </Form>
                                                                                                {/* <Message>
    New to us? {!inst ? <a href='/signup'>Sign Up</a> :  ""}
   <a href=`/${inst}/signup`>Sign Up with {inst}</a> 
  </Message>  */}
                                                                                        </Grid.Column>
                                                                                </Grid>


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