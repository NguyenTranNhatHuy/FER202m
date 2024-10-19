import React, { useContext } from 'react'
import { createContext } from 'react'

const InfoContext = createContext();
const InfoProvider = ({ children, myInfo }) => {
    return (
        <InfoContext.Provider value={myInfo}>
            {children}
        </InfoContext.Provider>
    )
}
const B = () => {
    const info = useContext(InfoContext)
    return (
        <>
            <p>hello : {info.name}</p>
            <C />
        </>
    )
}
const C = () => {
    const info = useContext(InfoContext)
    return (
        <h1>{info.name}, {info.age}</h1>
    )
}
const UseContext = (props) => {
    return (
        <>
            <h1>Demo UseContext</h1>
            <InfoProvider myInfo={props.myInfo}>
                <B />
            </InfoProvider>
        </>
    )
}

export default UseContext;