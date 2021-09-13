import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import styles from "./Cards.module.css"
import CountUp from "react-countup";
import cx from "classnames";

const Cards=({data:{confirmed,recovered,deaths,lastUpdate}})=>{
    if(!confirmed){
        return "Loading...."
    }
    return (
        <div className={styles.container}>
            <Grid container spacing ={3} justify="center" >
                <Grid item component={Card} xs={12} md={2} className={cx(styles.card,styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp 
                                start={0}
                                end={confirmed.value}
                                separator=","
                                duration={3}
                            />
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body1">Active cases of Covid-19</Typography>
                    </CardContent>
                </Grid>

                <Grid item component={Card} xs={12} md={2} className={cx(styles.card,styles.recovered)}>                <CardContent>
                    <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                    <Typography variant="h5">
                        <CountUp 
                            start={0}
                            end={recovered.value}
                            separator=","
                            duration={3}
                        />
                    </Typography>
                    <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                    <Typography variant="body2">Recovered cases of Covid-19</Typography>
                </CardContent>
            </Grid>

            <Grid item component={Card} xs={12} md={2} className={cx(styles.card,styles.deaths)}>            <CardContent>
                <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                <Typography variant="h5">
                    <CountUp 
                        start={0}
                        end={deaths.value}
                        separator=","
                        duration={3}
                    />
                </Typography>
                <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                <Typography variant="body3">Death cases of Covid-19</Typography>
            </CardContent>
        </Grid>
        
            </Grid>
        </div>
    )
}
export default Cards;