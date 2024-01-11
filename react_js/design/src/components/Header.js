import React from 'react';
import logo from '../assets/images/logo.png'
import {Button, IconButton} from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

function Header() {
    return (
        <header className="header">
            <div className="container">
                <img src={logo} alt=" " className="logo__img"/>
                <nav className="nav">
                    {
                        (['HOME', 'ABOUT', 'SERVICES', 'WEB ELEMENTS', 'CONTACT']).map((anchor) => (
                            <React.Fragment key={anchor}>
                                <Button>{anchor}</Button>
                            </React.Fragment>
                        ))
                    }
                    <IconButton color="primary">
                        <SearchIcon/>
                    </IconButton>
                </nav>
            </div>
        </header>
    )
}

export default Header;