import React, { Component } from 'react'
import { Button, Header, Icon, Modal } from 'semantic-ui-react'
import { AppState } from '../../context';

const ListWatchModal = () => {
const { showListed,setShowListed } = React.useContext(AppState);

 
    return (
      <Modal
        // trigger={<Button onClick={this.handleOpen}>Show Modal</Button>}
        open={showListed}
        onClose={()=>setShowListed(false)}
        basic
        size='small'
      >
        <Header icon='browser' content='No messages.' />
        <Modal.Content>
          <h3>You don't have any matches yet.</h3>
        </Modal.Content>
        <Modal.Actions>
          <Button color='green' onClick={()=>setShowListed(false)} inverted>
            <Icon name='checkmark' /> Got it
          </Button>
        </Modal.Actions>
      </Modal>
    )
  
}

export default ListWatchModal;