import React from 'react';
import PropTypes from "prop-types";
import {Button, Card, CardActions, CardContent, CardMedia, Typography} from "@mui/material";

function Modal(props) {
    const {product, onClose} = props;
    console.log(product)
    return (
        <Card sx={{maxWidth: 345}}>
            <CardActions>
                <Button size="small" onClick={onClose}>Close</Button>
            </CardActions>
            <CardMedia
                sx={{height: 140}}
                image={product.image}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {product.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {product.description}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default Modal;

Modal.propTypes = {
    product: PropTypes.object.isRequired,
    onClose: PropTypes.func.isRequired
}

Modal.defaultProps = {
    product: {},
    onClose: () => {
    }
}