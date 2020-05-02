import React from 'react';
import { makeStyles, Card, CardContent, Typography } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
    root: {
        height: 300,
        width: 740,
        margin: 5
    },
}));

function HotelCard() {
    const classes = useStyle();
    return (
        <Card className={classes.root}>
            <CardContent>
                <Typography>
                    香港半岛酒店
                </Typography>
            </CardContent>
        </Card>
    );
}
export default HotelCard;