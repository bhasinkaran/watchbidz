import React, { useState, useContext, useEffect } from 'react'
import { Header, Form, Segment, Message, Container, Label, Button, Divider, Icon, Loader, Image, Grid, Item } from 'semantic-ui-react'
import { useParams } from 'react-router-dom';
import { AppState } from '../context';
import Countdown from 'react-countdown';

import AuctionPhotos from '../AuctionPhotos'
import { dbListed, dbSellers, dbRecentlyClosed, dbIncompleteDeals, dbBuyers } from '../firebase/firebase';
import renderer from '../CountDownRenderer'
const AuctionPageSeller = ({ access }) => {

        const { id } = useParams();
        const { listed, sellers, user } = React.useContext(AppState);
        const [auctionItem, setItem] = useState("");
        const [bid, setBid] = useState("");
        const [confirmbid, setConfirmBid] = useState("");
        const [error, setError] = useState(false);
        const [priceShowed, setPrice] = useState("");

        useEffect(() => {
                setItem(listed[id])
                if (listed && listed[id]) {
                        if (listed[id]['highestbid']) {
                                // var format = new Intl.NumberFormat('en-IN', { 
                                //         style: 'currency', 
                                //         currency: 'INR' 
                                //     }).format(100); 
                                setPrice((Number(listed[id]['highestbid'])).toLocaleString('en-US', { style: 'currency', currency: 'USD' }));
                                // console.log
                        }
                        else {
                                // var format=new Intl.NumberFormat('en-INR', { 
                                //         style: 'currency', 
                                //         currency: 'INR', 
                                //         minimumFractionDigits: 2, 
                                //     })
                                //        setPrice(format.format(listed[id]['minimumask'])+" - Minimum Ask")
                                //console.log(Number(listed[id]['minimumAsk']).toLocaleString('ja-JP', { style: 'currency', currency: 'JPY' }))
                                setPrice(Number(listed[id]['minimumAsk']).toLocaleString('en-US', { style: 'currency', currency: 'USD' }) + " - Minimum Ask");
                        }


                }

        }, [listed]);
        if (auctionItem) {
                return (
                        <Container>
                                <Segment centered compact color='purple'>
                                        <Header as='h1' textAlign='center'>{auctionItem.manufacturer} {auctionItem.modelNo} - Purchased  {auctionItem.year}</Header>
                                        {access == "Admin" ?
                                                <div>
                                                        <Button fluid primary onClick={() => {
                                                                let todaySeconds = Date.now();
                                                                console.log(todaySeconds);
                                                                todaySeconds += 259200000; 
                                                                // increment to be after 3 days.
                                                                let livedate = new Date(todaySeconds);
                                                                console.log(livedate);
                                                                // livedate.setUTCHours(13);
                                                                // livedate.setMinutes(30);
                                                                // livedate.setSeconds(0);
                                                                var endDate = livedate.getTime()
                                                                console.log(livedate)
                                                                console.log(livedate)
                                                                console.log(todaySeconds)
                                                                console.log(endDate)
                                                                if(!listed[id]['active']){
                                                                        dbListed.child(id).child("endDate").set(endDate);
                                                                }
                                                                dbListed.child(id).child("active").set(!listed[id]['active'])

                                                                
                                                        }

                                                        }>
                                                                {listed[id]['active'] ? "Unlist" : "List"}
                                                        </Button>
                                                        { listed[id]['endDate'] < Date.now() ?  
                                                                <Button fluid primary onClick={() => {
                                                                        
                                                                        dbListed.child(id).child("active").set(!listed[id]['active'])

                                                                        if(listed[id]['highestbid'])
                                                                        {
                                                                                const k = dbRecentlyClosed.push({
                                                                                        modelNo: listed[id]['modelNo'],
                                                                                        manufacturer: listed[id]['manufacturer'],
                                                                                        year: listed[id]['year'],
                                                                                        boxBool: listed[id]['boxBool'],
                                                                                        finalbid: listed[id]['highestbid'],
                                                                                        bidder: listed[id]['bidder'],
                                                                                        lister: listed[id]['lister'],
                                                                                        "createdAt": {'.sv': 'timestamp'},
                                                                                })
                                                                                const key = k.getKey();
                                                                                console.log(key);
                                                                                dbSellers.child(listed[id]['lister']).child('pastdeals').push(key);
                                                                                dbBuyers.child(listed[id]['bidder']).child('pastdeals').push(key);

                                                                                dbRecentlyClosed.child(key).child('id').set(key);
                                                                        }
                                                                        else{
                                                                                const k =  dbIncompleteDeals.push({
                                                                                        modelNo: listed[id]['modelNo'],
                                                                                        manufacturer: listed[id]['manufacturer'],
                                                                                        year: listed[id]['year'],
                                                                                        boxBool: listed[id]['boxBool'],
                                                                                        lister: listed[id]['lister'],
                                                                                        minimumAsk: listed[id]['minimumAsk'],
                                                                                        "createdAt": {'.sv': 'timestamp'},
                                                                                
                                                                                
                                                                                })
                                                                                const key = k.getKey();
                                                                                dbSellers.child(listed[id]['lister']).child('incompletedeals').push(key);

                                                                        }

                                                                        let arr1=Object.keys(sellers[listed[id]['lister']]['listed'])
                                                                        let arr2=Object.values(sellers[listed[id]['lister']]['listed'])
                                                                        console.log(arr1)
                                                                        console.log(arr2)
                                                                        for(let i=0;i<arr1.length;i+=1){
                                                                                if(sellers[listed[id]['lister']]['listed'][arr1[i]]==id){
                                                                                        dbSellers.child(listed[id]['lister']).child('listed').child(arr1[i]).remove()
                                                                                }
                                                                        }
                                                                        dbListed.child(id).remove()
                                                                        let url = process.env.NODE_ENV =="PRODUCTION" ? "https://www.watchbidzwebsite.web.app/admin/home" : "http://localhost:3000/admin/home"
                                                                        console.log(url)
                                                                        window.location.assign(url)
                                                                }
                                                                        }>
                                                                                MARK AS COMPLETE
                                                                        </Button>  
                                                        : ""}
                                                        <Divider></Divider>
                                                </div>
                                                : ""}
                                        <AuctionPhotos item={auctionItem} />
                                        <Grid centered>
                                                <Grid.Column width="16">
                                                        <Grid centered padded>
                                                                <Grid.Row>
                                                                        {listed[id]['active'] == true ? 
                                                                        <Segment attached color='purple'>
                                                                                <Header as="h1">
                                                                                        Current Bid: {priceShowed}
                                                                                </Header>
                                                                                {/* <Header as="h2"> */}
                                                                                <Countdown renderer={renderer} date={auctionItem.endDate} />
                                                                                        
                                                                                {/* </Header> */}
                                                                                <Header as="h3" textAlign='center'>
                                                                                        You indicated that you {auctionItem.boxBool ? "have" : "do not have"} papers from {auctionItem.manufacturer} for this purchase.
                                                                                </Header>
                                                                        </Segment>
                                                                                : 
                                                                        <div>
                                                                                PENDING REVIEW FROM WATCHBIDZ ADMINISTRATION
                                                                        </div>
                                                                        }
                                                                        
                                                                        {/* <Segment attached color='purple'>
                                                                                <Grid textAlign='center' padded>
                                                                                        <Grid.Column style={{ maxWidth: 450 }}>
                                                                                                
                                                                                        </Grid.Column>
                                                                                </Grid>


                                                                        </Segment> */}
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

export default AuctionPageSeller