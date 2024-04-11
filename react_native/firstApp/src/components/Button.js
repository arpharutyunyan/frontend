import React from 'react';
import {Dimensions, StyleSheet, Text, TouchableOpacity} from "react-native";

function Button(props) {

    const {btnStyles, txtStyles, value, btnClick} = props;
    return (
        <TouchableOpacity style={[styles.btn, btnStyles]} onPress={(e) => btnClick(value)}>
            <Text style={[styles.btnText, txtStyles]}>{value}</Text>
        </TouchableOpacity>
    );
}

const windowWidth = Dimensions.get('window').width;
const buttonWidth = windowWidth / 4 - 5 * 2

const styles = StyleSheet.create({
    btnText: {
        color: "#fff",
        fontSize: 30,
        fontWeight: "500",
    },
    btn: {
        backgroundColor: "#333333",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        margin: 5,
        borderRadius: 100,
        height: buttonWidth,
        width:buttonWidth,
    },
})

export default Button;