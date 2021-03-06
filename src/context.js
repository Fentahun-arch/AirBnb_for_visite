import React, {useContext, useReducer, useEffect} from 'react'
import {initialState} from './reducer'
import {reducer} from './reducer'

const AppContext = React.createContext()

const AppProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        const laodHome = setTimeout(() => {
            dispatch({type: 'RENDER_COMPONENT'})
        }, 500)
        return () => clearImmediate(laodHome)
    }, [])

    return (
        <AppContext.Provider
            value={{
                ...state,
            }}
        >
            {children}
        </AppContext.Provider>
    )
}
export const useGlobalContext = () => {
    return useContext(AppContext)
}

export {AppProvider}
