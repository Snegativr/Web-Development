import { createContext, useContext, useState } from 'react';

const UserContext = createContext();

export const UserProvider = ({ children }) => {
    const [selectedUser, setSelectedUser] = useState(null);
    const [users, setUsers] = useState([]);

    const addUser = (newUser) => {
        setUsers([...users, newUser]);
    };
    const removeUser = (userId) => {
        setUsers(users.filter((user) => user.id !== userId));
        handleUserSelect(null);
    };
    const handleUserSelect = (userId) => {
        setSelectedUser(users.find((user) => user.id === userId));
    };
    return (
        <UserContext.Provider
            value={{
                selectedUser,
                handleUserSelect,
                removeUser,
                addUser,
                users,
            }}
        >
            {children}
        </UserContext.Provider>
    );
};

export const useUserContext = () => {
    const context = useContext(UserContext);
    return context;
};