import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Button from './components/Button';

const App = () => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState('');
    const [operation, setOperation] = useState('');

    const handleDigitPress = (value) => {
        setInput(input + value);
    }

    const handleBtnPress = (value) => {
        setOperation(value);
        setInput('');
    }

    return (
        <View style={styles.container}>
            <View style={styles.display}>
                {/*<Text style={styles.inputText}>{input}</Text>*/}
                <Text style={styles.resultText}>{input}</Text>

                <View style={styles.row}>
                    <Button btnClick={handleBtnPress} btnStyles={styles.btnGrey} txtStyles={styles.btnTextBlack} value="C"/>
                    <Button btnClick={handleBtnPress} btnStyles={styles.btnGrey} txtStyles={styles.btnTextBlack} value="+/-"/>
                    <Button btnClick={handleBtnPress} btnStyles={styles.btnGrey} txtStyles={styles.btnTextBlack} value="%"/>
                    <Button btnClick={handleBtnPress} btnStyles={styles.btnYellow} value="/"/>
                </View>
                <View style={styles.row}>
                    <Button btnClick={handleDigitPress} value="7"/>
                    <Button btnClick={handleDigitPress} value="8"/>
                    <Button btnClick={handleDigitPress} value="9"/>
                    <Button btnClick={handleBtnPress} btnStyles={styles.btnYellow} value="x"/>
                </View>
                <View style={styles.row}>
                    <Button btnClick={handleDigitPress} value="4"/>
                    <Button btnClick={handleDigitPress} value="5"/>
                    <Button btnClick={handleDigitPress} value="6"/>
                    <Button btnClick={handleBtnPress} btnStyles={styles.btnYellow} value="-"/>
                </View>
                <View style={styles.row}>
                    <Button btnClick={handleDigitPress} value="1"/>
                    <Button btnClick={handleDigitPress} value="2"/>
                    <Button btnClick={handleDigitPress} value="3"/>
                    <Button btnClick={handleBtnPress} btnStyles={styles.btnYellow} value="+"/>
                </View>
                <View style={styles.row}>
                    <Button btnStyles={styles.zeroBtn} value="0"/>
                    <Button value=","/>
                    <Button btnClick={handleBtnPress} btnStyles={styles.btnYellow} value="="/>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create(
    {
        container: {
            flex: 1,
            backgroundColor: "#202020",
            justifyContent: "flex-end",
        },

        inputText: {
            fontSize: 36, color: '#fff',
        },
        resultText: {
            color: "#fff",
            fontSize: 40,
            textAlign: "right",
            marginRight: 20,
            marginBottom: 10,
        },

        row: {
            flexDirection: "row",
        },
        btnText: {
            color: "#fff",
            fontSize: 25,
            fontWeight: "500",
        },

        btn: {
            backgroundColor: "#333333",
            flex: 1,
            alignItems: "center",
            justifyContent: "center",
            margin: 5,
            borderRadius: 100,
            height: 100 / 4 - 10,
        },
        btnGrey: {
            backgroundColor: "#a6a6a6",
        },
        btnTextBlack: {
            color: "#060606",
        },
        btnYellow: {
            backgroundColor: "#f09a36",
        },
        zeroBtn: {
            alignItems: "flex-start",
            flex: 0,
            width: 100 * 2 - 5 * 2,
            paddingLeft: 100 / 2 - 5,
        },
    });

export default App;
