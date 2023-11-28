import React, { useContext } from 'react';
import { HistoryContext } from '../context/HIstory';

export default function Debug() {
    const context = useContext(HistoryContext);

    console.log(context);

    const { history } = context;

    return (
        <div>
            <h2>Search history</h2>
            <ol>
                {history.map((path, index) => (
                    <li key={index}>{path[0]} - {path[1]}</li>
                ))}
            </ol>
        </div>
    );
}