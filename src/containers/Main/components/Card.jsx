import React, {memo} from 'react'
import { PropTypes } from '../../../../node_modules/@mui/material/index'
import {Card as CardUI} from '../../../components'
import{
    LabelStyled,
    ValueStyled,
    CardContentStyled

} from './style'

function Card({value, label, color}){
    return(
        <CardUI>
            <CardContentStyled color ={color}>
                <ValueStyled>{value}</ValueStyled>
                <LabelStyled>{label}</LabelStyled>
            </CardContentStyled>
        </CardUI>
    )
}

export default memo(Card)