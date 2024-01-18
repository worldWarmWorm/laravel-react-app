import { createContext, useContext, useState } from "react"

const StateContext = createContext({
    user: null,
    token: null,
    setUser: () => {},
    setToken: () => {},
})

export const ContextProvider = ({children}) => {
    const accessToken = 'ACCESS_TOKEN'
    const [user, setUser] = useState({name: 'Valery Davydkin'})
    // const [token, _setToken] = useState(1)
    const [token, _setToken] = useState(localStorage.getItem(accessToken))

    const setToken = (token) => {
        _setToken(token)
        token
            ? localStorage.setItem(accessToken, token)
            : localStorage.removeItem(accessToken)
    }

    return (
        <StateContext.Provider value={{
            user,
            token,
            setUser,
            setToken
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)
