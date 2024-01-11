import React, {useState} from 'react';
import callback from '../assets/images/callback.png';
import {Box, Button, InputLabel, MenuItem, Select, TextField} from "@mui/material";

function Contact() {
    const ages = [10, 20, 30, 40, 50];
    const [age, setAge] = useState([]);


    return (
        <section className="contact" id="contact">
            <div className="container">
                <div className="contact__form__block">
                    <h3 className="section__title">Requeste a call back</h3>
                    <div className="form">
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': {m: 1, width: '25ch'},
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <TextField
                                id="outlined-controlled"
                                label="Name"
                                value=''
                                onChange={(event) => {
                                }}
                            />
                            <TextField
                                id="outlined-controlled"
                                label="Email"
                                value=''
                                onChange={(event) => {
                                }}
                            />
                            <TextField
                                id="outlined-controlled"
                                label="Phone"
                                value=''
                                onChange={(event) => {
                                }}
                            />
                            <InputLabel id="demo-simple-select-label">Age</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={age}
                                onChange={(ev) => setAge(ev.target.value)}
                            >
                                {ages.map((age) => (
                                    <MenuItem
                                        key={age}
                                        value={age}
                                    >
                                        {age}
                                    </MenuItem>
                                ))}
                            </Select>
                            <Button variant="contained" color="secondary">Send</Button>
                        </Box>


                    </div>
                </div>
                <img src={callback} alt=" " className="contact__img"/>
            </div>
        </section>
    );
}

export default Contact;