import React, { useEffect, useState } from 'react'
import { AppContext } from './AppContext'
import { getData } from '../helpers/fetchData'

export default function GlobalState({ children }) {


    const [data, setData] = useState([])

    useEffect(() => {
        const updateState = async () => {
            const resp = await getData()

            setData(resp)
        }
        updateState()
    }, [])

    return (
        <AppContext.Provider
            value={
                { data }
            }
        >
            {children}
        </AppContext.Provider>
    )
}
