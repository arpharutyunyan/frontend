import React, {useCallback} from 'react';
import {Linking, StyleSheet, Text, TouchableHighlight, View} from "react-native";

function Actions(props) {
    const {btnStyle, btnText, phoneNumber} = props;

    const callNumber = useCallback(()=>{
        Linking.openURL('tel:'+phoneNumber);
    }, []);

    const messageNumber = useCallback(()=>{
        Linking.openURL('sms:'+phoneNumber);
    }, []);

    return (
        <View style={styles.actionsBlock}>
            <TouchableHighlight
                style={[btnStyle, {backgroundColor: '#27c84a'}]}
                onPress={callNumber}
            >
                <Text style={[btnText]}>Call</Text>
            </TouchableHighlight>
            <TouchableHighlight
                style={[btnStyle, {backgroundColor: '#27c84a'}]}
                onPress={messageNumber}
            >
                <Text style={[btnText]}>Message</Text>
            </TouchableHighlight>
        </View>
    );
}

const styles = StyleSheet.create({
    actionsBlock: {
        display: "flex",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
        gap: 15,
        minHeight: 45,
        marginBottom: 15,
    }
});

export default Actions;