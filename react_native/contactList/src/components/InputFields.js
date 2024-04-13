import React from 'react';
import {StyleSheet, Text, TextInput, View} from "react-native";

function InputFields(props) {

    const {label, value, onChangeText, index, phoneNumber} = props;
    return (
        <View>
            <Text>{label}</Text>
            <TextInput
                editable
                maxLength={40}
                onChangeText={text => onChangeText(text, index)}
                value={value}
                style={styles.input}
                keyboardType={phoneNumber ? "phone-pad" : "default"}
                dataDetectorTypes={phoneNumber ? "phoneNumber" : "none"}
            />
        </View>

    );
}

const styles = StyleSheet.create({
    input: {
        padding: 5,
        borderColor: 'black',
        borderWidth: 1,
        marginBottom: 15,
    }
});

export default InputFields;