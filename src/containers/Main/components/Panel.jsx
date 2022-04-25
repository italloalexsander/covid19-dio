import React, {memo} from 'react'
import RefreshIcon from '../../../assets/images/refresh.svg'
import { Card, Typography, Button, Select, MenuItem} from '../../../components'
import COUNTRIES from '../../../commons/constants/countries'
import {CardPanelContentStyled, ItemStyled} from './style'
//import { render } from '../../../../node_modules/@testing-library/react/types/index'

const navigatorHasShare = navigator.share

function Panel({updateAt, onChange, data, country, getCovidData }) {
    const { cases, recovered, deaths, todayCases, todayDeaths} = data
    const renderCountries = (country, index) => (
        <MenuItem key={`country-${index}`} value={country.value}>
          <ItemStyled>
            <div>{country.label}</div>
            <img src={country.flag} alt={`País-${country.label}`} />
          </ItemStyled>
        </MenuItem>
    )
    
    const textCovid19 = `País: ${country} - recuperados: ${recovered}`


    const shareInfo = () =>{
        navigator.share[{
            title: `Dados do Covid-19 - ${country}`,
            text: textCovid19,
            url: `https://github.com/italloalexsander`

        }]
    }

    const copyInfo = () => {
        navigator.clipboard.writeText(textCovid19)
    }

    const renderShareButton = (
        <div>
            <Button variant="contained" color="primary" onClick={shareInfo}>
                Compartilhar
            </Button>
        </div>
    )

    const renderCopyButton = (
        <div>
            <Button variant="contained" color="primary" onClick={copyInfo}>
                Compartilhar
            </Button>
        </div>
    )

    return (
     <Card>
         <CardPanelContentStyled>
             <div>
                 <Typography variant="h5" component="p" color="primary">COVID-19</Typography>
                 <Typography variant="h6" component="p" color="primary">Painel do Coronavírus</Typography>
                 <Typography variant="body2" component="p" color="primary">Atualizado em: {updateAt}</Typography>
                 {navigatorHasShare?renderShareButton:renderCopyButton}
                 <div className="pt-2">
                     <Select onChange ={onChange} value={country}>
                         {COUNTRIES.map(renderCountries)}
                     </Select>
                 </div>
             </div>
         </CardPanelContentStyled>
     </Card>
    )
}

export default memo(Panel)
