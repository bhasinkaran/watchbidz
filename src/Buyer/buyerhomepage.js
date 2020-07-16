
import React, { useState, useEffect, isValidElement, useContext } from 'react';
import { Grid, Image, Header, Search, Button, Container, Menu, Dropdown } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { AppState } from '../context';


// const mongoose = require('mongoose');
const BuyerHomepage = () => {
        const { listed, user } = useContext(AppState);
        const [relevant, setRelevant] = useState([]);
        const [filter, setFilter] = useState("All");
        const [brands, setBrands] = useState([]);
        const brands_list = ["All","Rolex", "A Lange and Sohne", "Audemars Piguet", "Blancpain", "Breitling", "Cartier", "FP Journe", "Glashutte Original",
                "Grand Seiko", "H Moser & Cie", "Hublot", "IWC", "Jaeger LeCoultre", "Nomos Glashutte", "Omega", "Panerai",
                "Patek Philippe", "Tag Heuer", 'Tudor', "Vacheron Constantin", "Zenith"];
        
        function setOptions(){
                var builder=[];
                for(let i = 0; i<brands_list.length;i++){
                        builder.push({
                                key:i,
                                value: brands[i],
                                text: brands[i]
                        });
                }
                setBrands(builder);
        }        
        useEffect(setOptions, []);
        useEffect(initializeState, [listed, filter]);
        
        function initializeState() {
                let temp=[];
                Object.keys(listed).map(id=>{
                        if(filter=="All" || filter==listed[id]['manufacturer'])
                        {
                                temp.push(id);
                        }
                })
                setRelevant(temp);
        }

        const ReturnWatch = ({ id }) => {
                var img = listed[id]['photoCrown'];
                if (img) {
                        //      console.log(imageurl);
                        return (
                                <Grid.Column key={id.toString()} mobile={16} tablet={8} computer={8} id={id}>
                                        {/* <Link to={`/track/${[id]}`} > */}
                                                <Image size='medium' rounded verticalAlign='middle' src={img} />
                                                <Header size='huge'>{listed[id]['modelNo']}</Header>
                                        {/* </Link> */}
                                        <br></br>
                                </Grid.Column>);
                }
                else {
                        // console.log(imageurl)
                        return null;
                }
        }
        

        //      console.log(artistnames)
        return (
                <div>
                        <Container>
                        <Header size='huge'>Inventory</Header>
                        <Grid padded centered>
                        <Grid.Row>
                                <Grid.Column>
                                {/* <div style={{ marginTop: "0px", marginLeft: "0px", marginBottom: "0px", textAlign: "start" }}> */}
                                        <Menu compact>
                                                <Dropdown text={filter}
                                                        options={brands}
                                                        simple item
                                                        onChange={(e, { value }) => setFilter(value)} />
                                        </Menu>
                                {/* </div> */}
                                </Grid.Column>
                        </Grid.Row>
                        <Grid.Row >
                                
                                {relevant.length > 0 ? relevant.map(id => <ReturnWatch key={id.toString()} id={id} />) : ""}
                        </Grid.Row>
                        </Grid>
                        </Container>

                </div>

        )
}

export default BuyerHomepage;