import React, { useState, useContext, useEffect } from 'react'
import { Header, Segment, Label, Button, Divider, Icon, Loader, Image, Grid, Item } from 'semantic-ui-react'
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
                        <Segment compact>
                                <Grid compact centered>
                                        <Grid.Column width="5">
                                                <Grid.Row style={{marginTop:"25px"}} >
                                                        <Image verticalAlign='center' size='massive' src={auctionItem.photoTime} />
                                                </Grid.Row>
                                                <Divider />
                                                <Grid.Row>
                                                        <Header as='h1' textAlign='center' color="teal">{auctionItem.manufacturer} {auctionItem.modelNo}</Header>
                                                </Grid.Row>
                                        </Grid.Column>
                                        <Grid.Column width="11">
                                                <Grid centered padded>
                                                        <Grid.Row>

                                                                <Segment inverted color='teal' >
                                                                        <Header color='black' as="h1" floated='left'>
                                                                         {sellers['lister']['firstName']} {sellers['lister']['lastName']}
                                                                </Header>
                                                                        <Header as="h1" floated='left'>
                                                                                Minimum Ask:  ${auctionItem.minimumAsk}
                                                                </Header>

                                                                </Segment>
                                                        </Grid.Row>
                                                        <Segment color='orange' >
                                                        <Grid.Row style={{ marginTop: "-5px" }}>
                                                                
                                                                {/* <div style={{ alignItems: "center" }}>
                                                                        <Header as='h2'>
                                                                               Why I Coach? 
                                                                        </Header>
                                                                        <Header as='h3'>
                                                                        {coach.about}
                                                                        </Header>
                                                                        <Divider />
                                                                </div> */}
                                                        </Grid.Row>
                                                        <Grid.Row style={{ marginTop: "-5px" }}>
                                                                {/* <div style={{ alignItems: "center" }}>
                                                                        <Header as='h2' >
                                                                               Favorite Part About College Applications
                                                                        </Header>
                                                                        <Header as='h3'>
                                                                        {coach.favoritepart}
                                                                        </Header>
                                                                        <Divider />
                                                                </div> */}
                                                        </Grid.Row>
                                                        <Grid.Row style={{ marginTop: "-5px" }}>
                                                                {/* <div style={{ alignItems: "center" }}>
                                                                        <Header as='h2'>
                                                                        {coach.firstName} Enjoys
                                                                        </Header>
                                                                        <Label.Group color='teal' alignItems="center" textAlign="center">
                                                                                {coach.enjoys.map(strength => <Label size='large' >
                                                                                        {strength}
                                                                                </Label>)}
                                                                        </Label.Group>
                                                                        <Divider />
                                                                </div> */}
                                                        </Grid.Row>
                                                        <Grid.Row style={{ marginTop: "-5px" }}>
                                                                {/* <div style={{ alignItems: "center" }}>
                                                                        <Header as='h2' >
                                                                        {coach.firstName}'s Strengths
                                                                        </Header>
                                                                        <Label.Group color='teal' alignItems="center" textAlign="center">
                                                                                {coach.strengths.map(strength => <Label size='large'>
                                                                                        {strength}
                                                                                </Label>)}
                                                                        </Label.Group>
                                                                        <Divider />
                                                                </div> */}
                                                        </Grid.Row>
                                                        </Segment>
                                                </Grid>
                                        </Grid.Column>
                                </Grid>
                        </Segment >);
        }
        else {
                return (<div>Go ahead</div>)
        }
}

export default AuctionPage