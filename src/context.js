import React, { useEffect, createContext, useState } from 'react';
import { dbSellers , dbListed, dbBuyers} from './firebase/firebase'

const AppState = createContext(null);
const { Provider } = AppState;

const StateProvider = ({ children }) => {
        const [sellers, setSellers] = useState("");
        const [listed, setListed] = useState("");
        const [user, setUser] = useState("");
        const [logged, setLogged]=useState("");
        const [buyers, setBuyers]=useState("");
        const [showListed, setShowListed]=useState(false);

        useEffect(() => {
                const handleData = snap => {
                        if (snap.val()) setSellers(snap.val());
                }
                dbSellers.on('value', handleData, error => alert(error));
                return () => { dbSellers.off('value', handleData); };
        }, []);
        useEffect(() => {
                const handleData = snap => {
                        if (snap.val()) setListed(snap.val());
                }
                dbListed.on('value', handleData, error => alert(error));
                return () => { dbListed.off('value', handleData); };
        }, []);
        useEffect(() => {
                const handleData = snap => {
                        if (snap.val()) setBuyers(snap.val());
                }
                dbBuyers.on('value', handleData, error => alert(error));
                return () => { dbBuyers.off('value', handleData); };
        }, []);

        const api = { sellers, user, setShowListed, showListed, setUser, listed, buyers };
        return <Provider value={api}>{children}</Provider>;
};

export { AppState, StateProvider };
