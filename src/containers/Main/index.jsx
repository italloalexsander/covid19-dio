import React, { useEffect, useState, useCallback, memo } from "react";
import Api from '../../api'
import {ContainerStyled} from './style'
import Board from './components/Board'
import Panel from './components/Panel'


function Main() {
    const[data, setData] = useState({})
    const[country, setCountry] = useState('brazil')
    const updateAt = new Date().toLocaleString()

    const getCovidData = useCallback((country) =>{
        Api.getCountry(country)
            .then(data => setData(data))
    }, [])

    useEffect(() => {
        getCovidData(country)
    }, [getCovidData, country])

    const handlerChange = ({ target }) => {
        const country = target.value
        setCountry(country)
    }

    return (
    <ContainerStyled>
        <div className = "mb-2">
            <Panel
                data={data}
                updateAt={updateAt}
                onChange={handlerChange}
                country={country}
                getCovidData={getCovidData}
            />
        </div>
        <Board data={data}/>
    </ContainerStyled>
    )
}

export default memo(Main);