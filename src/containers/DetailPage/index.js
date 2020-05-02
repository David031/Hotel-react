import React from 'react';
import Typography from '@material-ui/core/Typography';
import Layout from '../../components/Layout';
import HotelCard from '../../components/HotelCard';
import { Grid, makeStyles } from "@material-ui/core";
import { BlockLoading } from 'react-loadingg';
import { useLocation } from "react-router-dom";

const useStyle = makeStyles((theme) => ({
    root: {

    }
}));

function DetailPage() {
    const classes = useStyle();
    const location = useLocation();
    const district = location.state.imagekey;
    return (
        <Layout title={`酒店選擇 : ${district}`}>
            <Grid container alignContent='flex-start' alignItems='flex-start'>
                <HotelCard />
                <HotelCard />
                <HotelCard />
            </Grid>

        </Layout>
    );
}

DetailPage.propTypes = {};

export default DetailPage;
