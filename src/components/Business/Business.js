import React from "react";
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import "./Business.css";

const useStyles = makeStyles({
    root: {
        maxWidth: 500,
        minWidth: 450,
        margin: 10,
    },
    media: {
        height: 200,
    },
});

const sprite =
    "https://images.unsplash.com/photo-1523905330026-b8bd1f5f320e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1358&q=80";

export default function Business(props) {
    const classes = useStyles();

    return (
        <Card
            className={classes.root}
            style={{ margin: "30px 15px", maxWidth: 350, minWidth: 350 }}
        >
            <CardActionArea>
                <CardMedia
                    className={classes.media}
                    image={
                        props.content.bCoverPictureUrl
                            ? props.content.bCoverPictureUrl
                            : sprite
                    }
                    title={props.content.fullName}
                />

                <CardContent>
                    <Typography gutterBottom variant="h6" component="h4">
                        {props.content.bFullName}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                    >
                        id: {props.content.id}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                    >
                        Email: {props.content.bEmail}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                    >
                        Address: {props.content.bAddress}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                    >
                        Phone: {props.content.bPhone}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="textSecondary"
                        component="p"
                    >
                        Tags: {props.content.bTags}
                    </Typography>
                </CardContent>
            </CardActionArea>

            <CardActions>
                <Link to={`/business/menu/${props.content.id}`}>
                    <Button size="small" color="secondary">
                        Menu
                    </Button>
                </Link>
                <Button size="small" color="secondary">
                    Quick Order
                </Button>
            </CardActions>
        </Card>
    );
}
