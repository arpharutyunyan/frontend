import * as React from 'react';
import Stack from '@mui/material/Stack';
import Header from "./components/header";
import Table from './components/table'

export default function BasicTable() {

    return (
        <>
            <Header/>
            <Table/>
            <Stack direction="row" spacing={1}></Stack>
        </>
    );
}
