import React, { useContext } from 'react'
// import/{useEffect, useState}
import { Segment, } from 'semantic-ui-react'
import { AppState } from '../context'
import { Link } from 'react-router-dom'
const AdminHomePage = () => {
        const { listed, sellers } = useContext(AppState);
        return (<Segment.Group>
                {Object.values(listed).filter(item => item.active == false).map(item => ReturnLinkToPreview(item.id))}
        </Segment.Group>)
}
function ReturnLinkToPreview(id) {
        const { listed, sellers } = useContext(AppState);
        return (
                <Link to={`/admin/auction/${id}`} push={true}>
                        <Segment>
                                {sellers[listed[id]['lister']]['firstName'] + 'listed a ' + listed[id]['manufacturer'] + listed[id]['modelNo'] + 'on' + Date(listed[id]['createdAt'])}
                        </Segment>
                </Link>
        );
}
export default AdminHomePage;