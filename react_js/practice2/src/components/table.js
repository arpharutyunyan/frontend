import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Api from "../Api";
import {useCallback, useEffect, useState} from "react";
import {Alert} from "@mui/material";
import Modal from "./Modal";

function CustomizedTables() {
    const [productList, setProductListData] = useState(null);
    const [productData, setProductData] = useState(null);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        console.log('table useeffect')
        try {
            (async () => {
                const productListData = await Api.getProductList();
                setProductListData(productListData.data);
                // console.log('Product List:', productListData.data);
            })()

        } catch (error) {
            console.error(error);
        }
    }, []);

    const handleShowModal = useCallback((id) => {
        try {
            (async () => {
                const product = await Api.getProduct(id);
                setProductData(product.data);
                setShowModal(!showModal);
            })()

        } catch (error) {
            console.error(error);
        }
    }, [showModal]);

    const handleCloseModal = useCallback(() => {
        setShowModal(!showModal);
    }, [showModal]);

    return (
        <>
            {
                productList ?
                    <TableContainer component={Paper}>
                        <Table sx={{minWidth: 700}} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Id</TableCell>
                                    <TableCell>Title</TableCell>
                                    <TableCell>Description</TableCell>
                                    <TableCell>Price</TableCell>
                                    <TableCell>Image</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {productList.map((row) => (
                                    <TableRow key={row.id} onClick={() => handleShowModal(row.id)}>
                                        <TableCell component="th" scope="row">
                                            {row.id}
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            {row.title}
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            {row.description}
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            {row.price}
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            <img src={row.image} alt='' style={{width: '50px', height: '50px'}}/>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    :
                    <Alert severity="warning">Something went wrong</Alert>

            }

            {
                showModal ? <Modal product={productData} onClose={handleCloseModal}/>
                    : null
            }

        </>
    );
}

export default CustomizedTables;