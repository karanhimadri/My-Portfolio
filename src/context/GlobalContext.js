'use client'; // Required for Context with App Router

import { createContext, useContext, useRef, useState } from 'react';

const GlobalContext = createContext();

function GlobalContextProvider({ children }) {
    const [user, setUser] = useState(null);
    const aboutRef = useRef(null);
    const values = {
        user,
        aboutRef,
        setUser,
    }

    return (
        <GlobalContext.Provider value={values}>
            {children}
        </GlobalContext.Provider>
    );
}

export function useGlobalContext() {
    return useContext(GlobalContext);
}

export default GlobalContextProvider