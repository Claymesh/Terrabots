import React, { useState } from 'react';

// set a variable to export to state handlers into components
export const StateContext = React.createContext({})

const StateProvider = ({ children }) => {
    // create a set of variables to use and change
    const [address, setAddress] = useState(null)
    // create a set of function to change said variables
    const addressHandler = (userAddress) => {
        setAddress(userAddress);
    }
return (
    <StateContext.Provider value={{
        address, addressHandler,
    }}>
        {children}
    </StateContext.Provider>
)}

export default StateProvider