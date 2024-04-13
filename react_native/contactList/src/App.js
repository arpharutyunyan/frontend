import React, {useCallback, useEffect, useRef, useState} from "react";
import _ from "lodash";
import {
    View,
    Text,
    StyleSheet,
    Platform,
    TouchableOpacity,
    RefreshControl,
    PermissionsAndroid,
    Dimensions, SectionList, Modal, TextInput, TouchableHighlight,
} from "react-native";
import Contacts from "react-native-contacts";
import InputFields from "./components/InputFields";
import Actions from "./components/Actions";

const {height: windowHeight, width} = Dimensions.get("window");

function App(props) {
    const flatList = useRef();
    const [loading, setLoading] = useState(false);
    const [activeContact, setActiveContact] = useState(null);
    const [contacts, setContacts] = useState([]);

    useEffect(() => {

        getContactsList();
    }, []);

    const getContactsList = async () => {
        setLoading(true);
        if (Platform.OS === "android") {
            await PermissionsAndroid.requestMultiple([
                PermissionsAndroid.PERMISSIONS.READ_CONTACTS,
                PermissionsAndroid.PERMISSIONS.WRITE_CONTACTS,
            ]);
        }
        const list = await Contacts.getAll();
        const listGrouped = _.chain(list)
            .groupBy(d => d.givenName ? d.givenName[0].toUpperCase() : "#")
            .map((data, title) => ({
                title,
                data,
            }))
            .orderBy(d => d.title)
            .value();
        setContacts(listGrouped);
        setLoading(false);
    };
    console.log(contacts);
    const handlePress = () => {
        const i = contacts.findIndex(u => u.givenName === "Qeri");
        flatList.current.scrollToIndex({
            index: i,
            animated: true,
            viewOffset: windowHeight - 80,
        });
    };

    const onChangeText = useCallback((text, id) => {
        setActiveContact({...activeContact, givenName: text});
    }, [activeContact]);

    const onChangeNumber = useCallback((text, id) => {
        const phoneNumberIndex = activeContact.phoneNumbers.findIndex((phoneNumber) => phoneNumber.id === id);
        setActiveContact((prevContact) => {
            const updatedContact = {...prevContact};
            updatedContact.phoneNumbers[phoneNumberIndex].number = text;
            return updatedContact;
        });
    }, [activeContact]);

    const onSaveContact = async () => {
        const updatedContacts = contacts.map((item) => ({
            ...item,
            data: item.data.map((elem) =>
                elem.recordID === activeContact.recordID
                    ? activeContact
                    : elem
            ),
        }));

        setContacts(updatedContacts);
        setActiveContact(null);
        await Contacts.updateContact(activeContact);
    };

    console.log(activeContact)
    return (
        <View style={styles.wrapper}>
            <SectionList
                sections={contacts}
                stickySectionHeadersEnabled
                keyExtractor={(item) => item.recordID}
                ListEmptyComponent={() => <Text>Empty</Text>}
                refreshControl={<RefreshControl refreshing={loading} onRefresh={getContactsList}/>}
                renderSectionHeader={({section}) => (
                    <Text style={styles.header}>{section.title}</Text>
                )}
                renderItem={({item}) => (
                    <TouchableOpacity onPress={() => setActiveContact(item)} style={styles.item}>
                        <Text>{item.givenName}</Text>
                    </TouchableOpacity>
                )}
            />
            <Modal
                visible={activeContact !== null}
                onRequestClose={() => setActiveContact(null)}
                transparent
                style={{margin: 40, justifyContent: "center"}}
            >
                <View style={styles.modal}>
                    <View style={styles.innerModal}>
                        <Actions
                            btnStyle={styles.button}
                            btnText={styles.btnText}
                            phoneNumber={activeContact ? activeContact.phoneNumbers[0].number : ''}
                        />

                        <InputFields
                            label='Name'
                            onChangeText={onChangeText}
                            value={activeContact ? activeContact.givenName : ''}
                        />
                        {
                            activeContact ?
                                activeContact.phoneNumbers.map(item => (
                                    <InputFields
                                        key={item.id}
                                        index={item.id}
                                        label={item.label}
                                        onChangeText={onChangeNumber}
                                        value={item.number}
                                        phoneNumber={true}
                                    />
                                ))
                                : null
                        }
                        <TouchableHighlight style={styles.button} onPress={onSaveContact}>
                            <Text style={styles.btnText}>Save</Text>
                        </TouchableHighlight>
                    </View>
                </View>

            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
    },
    item: {
        paddingHorizontal: 16,
        height: 40,
        paddingLeft: 40,
    },
    hr: {
        width: "100%",
        height: 2,
        backgroundColor: "red",
    },
    header: {
        paddingHorizontal: 16,
        paddingVertical: 16,
        fontSize: 22,
    },
    modal: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    innerModal: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        width: '80%',
    },
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#8e9ad4',
        padding: 5,
    },
    btnText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 24,
    }
});

export default App;
