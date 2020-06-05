import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './Business.css'

const useStyles = makeStyles({
    root: {
        maxWidth: 200,
        margin: 10
    },
    media: {
        height: 140,
    },
});

const Pokemon = {
    name: 'Chiya Pasal',
    type1: 'Bhatti',
    type2: 'Churot',
    sprite: 'https://images.unsplash.com/photo-1587461158349-e8d15154d7fa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80',
    ability: 'chlorophyll'

}


export default function Business(){

    const classes = useStyles();
    return(
        <Card className={classes.root} >
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={Pokemon.sprite}
                    title= {Pokemon.name}
                />
                <CardContent>
                    <Typography gutterBottom variant="h6" component="h4">
                        {Pokemon.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Type1: {Pokemon.type1}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Type2: {Pokemon.type2}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                        Ability: {Pokemon.ability}
                    </Typography>
                </CardContent>
            </CardActionArea>
            <CardActions>
                <Button size="small" color="primary">
                    Order
                </Button>
                <Button size="small" color="primary">
                    More Details
                </Button>
            </CardActions>
        </Card>
    );
}