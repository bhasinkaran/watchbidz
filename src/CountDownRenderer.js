import { Header, Form, Segment, Message, Container, Label, Button, Divider, Icon, Loader, Image, Grid, Item } from 'semantic-ui-react'
import React, { useState, useContext, useEffect } from 'react'

const renderer = ({ days,hours, minutes, seconds, completed }) => {
        if (completed) {
          // Render a completed state
          return <Header>Completed bid.</Header>;
        } else {
          // Render a countdown
        return (
        <div>
                <Segment>

                
                <Header color='purple'>Live Countdown</Header>
                <Header>{days} days {hours} hours {minutes} minutes and {seconds} seconds left</Header>
                </Segment>
                </div>);
                }}

export default renderer;