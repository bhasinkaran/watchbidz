import React , {useContext} from 'react'
// import/{useEffect, useState}
import {Segment, } from 'semantic-ui-react'
import {AppState} from '../context'
const AdminHomePage  = () => {
        const {listed, sellers} = useContext(AppState);
        return(<Segment.Group>
                {Object.values(listed).filter(item=>item.active==false).map(item=> ReturnLinkToPreview(item.id))}       
        </Segment.Group>)
}
function ReturnLinkToPreview (id){
        const {listed, sellers} = useContext(AppState);
        return(
                <Segment>
                        {sellers[listed[id]['lister']]['firstName']}
                </Segment>
        );
}
export default AdminHomePage;