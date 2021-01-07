import React, { useContext } from 'react'
// import/{useEffect, useState}
import { Segment, } from 'semantic-ui-react'
import { AppState } from '../context'
import { Link } from 'react-router-dom'
const AdminHomePage = () => {
        const { listed, sellers } = useContext(AppState);
        return (
        <Segment.Group>

                {Object.values(listed).filter(item => item.active == false).map(item => ReturnLinkToPreview(item.id))}
                {Object.values(listed).filter(item => item.active == true).map(item => ReturnLinkToPreview2(item.id))}

        </Segment.Group>)
}
function ReturnLinkToPreview(id) {
        const { listed, sellers } = useContext(AppState);
        return (
                <Link to={`/admin/auction/${id}`} push={true}>
                        <Segment>
                                {sellers[listed[id]['lister']]['firstName'] + " needs an approval on a listing of a " + listed[id]['manufacturer'] + " "+ listed[id]['modelNo'] + " on " + Date(listed[id]['createdAt'])}
                        </Segment>
                </Link>
        );
}
function ReturnLinkToPreview2(id) {
        const { listed, sellers } = useContext(AppState);
        console.log(listed[id]['endDate'])
        console.log(new Date(listed[id]['endDate']))
        return (
                <Link to={`/admin/auction/${id}`} push={true}>
                        <Segment>
                                {"Track " +sellers[listed[id]['lister']]['firstName'] + "'s " + listed[id]['manufacturer'] + " "+ listed[id]['modelNo'] + " set to expire on "+ new Date(listed[id]['endDate'])}
                        </Segment>
                </Link>
        );
}
export default AdminHomePage;