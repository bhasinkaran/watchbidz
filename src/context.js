import React, { useEffect, createContext, useState } from 'react';
import {dbSellers} from './firebase/firebase'

const AppState = createContext(null);
const { Provider } = AppState;

const StateProvider = ({ children }) => {
        const[sellers, setSellers]=useState("");
        useEffect(() => {
                const handleData = snap => {
                  if (snap.val()) setSellers(snap.val());
                }
                dbSellers.on('value', handleData, error => alert(error));
                return () => { dbSellers.off('value', handleData); };
              }, []);
        const api = {sellers};
        return <Provider value={api}>{children}</Provider>;
};

export { AppState, StateProvider };
