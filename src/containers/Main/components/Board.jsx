import React, {memo} from 'react'
import { PropTypes } from '../../../../node_modules/@mui/material/index'
import { Grid, Skeleton} from '../../../components/'
import Card from './Card'


function Board ({ data }) {
    const { cases, todayDeaths, recovered, deaths, todayCases} = data;

    const getValue = (value) => value ? value : <Skeleton variant="text" width={182} height={60} />


    return(
        <Grid container spacing = {4}>
            <Grid item xs={12} md={3}>
                <Card value = {getValue(cases)} label="Total de casos" color="#5d78ff"></Card>
            </Grid>
            <Grid item xs={12} md={3}>
                <Card value = {getValue(todayDeaths)} label="Óbitos hoje" color="#F7B829"></Card>
            </Grid>
            <Grid item xs={12} md={3}>
                <Card value = {getValue(recovered)} label="Recuperados" color="#000"></Card>
            </Grid>
            <Grid item xs={12} md={3}>
                <Card value = {getValue(deaths)} label="Total de Óbitos" color="#E95078"></Card>
            </Grid>
            <Grid item xs={12} md={3}>
                <Card value = {getValue(todayCases)} label="Casos Hoje" color="#67C887"></Card>
            </Grid>
        </Grid>
    )
}

export default memo(Board)