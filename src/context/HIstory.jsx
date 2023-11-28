import React, { createContext, useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

export const HistoryContext = createContext();

function History({ children }) {
    const location = useLocation();
    const [history, setHistory] = useState([]);

    useEffect(() => {
        const timestamp = new Date().toLocaleString();
        setHistory((prevHistory) => {
            const newPath = location.pathname;
            if (newPath !== prevHistory[prevHistory.length - 1]?.[0]) {
                return [...prevHistory, [newPath, timestamp]];
            }

            return prevHistory;
        });
    }, [location]);

    return (
        <HistoryContext.Provider value={{ history, setHistory }}>
            {children}
        </HistoryContext.Provider>
    );
}

export default History;