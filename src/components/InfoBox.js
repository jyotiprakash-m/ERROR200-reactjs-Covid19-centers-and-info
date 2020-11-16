import React from 'react'
import {Card,CardContent,Typography} from "@material-ui/core"
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import "./InfoBox.css"
function InfoBox({title,cases,isRed,active,total,...props}) {
    return (
        
            <Card onClick={props.onClick} className={`infoBox ${active && "infoBox--selected"} ${isRed && "infoBox--red"}`}>
                <CardContent>
                    
                    <Typography className="infoBox_title" color="textSecondary">
                        {title}
                    </Typography>
                    <h2 className={`infoBox_cases ${!isRed && "infoBox_cases--green"}`}>{total} </h2><span >total</span>
                    <Typography className="infoBox_total" color="textSecondary">
                        {cases}<ArrowUpwardIcon /> today
                    </Typography>
                </CardContent>
                    
            </Card>
        
    )
}

export default InfoBox
