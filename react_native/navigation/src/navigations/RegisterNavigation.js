import React, {useCallback, useState} from "react";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import HeaderLeft from "../components/header/HeaderLeft";
import WrapperLogOut from "../components/WrapperLogOut";
import {useDispatch} from "react-redux";
import {registerRequest} from "../store/actions/users";
import {Toast as toast} from "toastify-react-native";
import {useNavigation} from "@react-navigation/native";
import {TextInput, TouchableOpacity, View, Text, SafeAreaView} from "react-native";

const Stack = createNativeStackNavigator();

const screenOptions = {
    headerTitleAlign: "center",
    headerLeft: (p) => <HeaderLeft {...p} />,
    headerBackVisible: false,
};

function RegisterNavigation(props) {
    const dispatch = useDispatch();
    const navigate = useNavigation();
    const [errors, setErrors] = useState({})
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
    })

    const onChange = useCallback((path) => (value) => {
        setFormData({...formData, [path]: value})
        setErrors({...errors, [path]: ''});
    }, [formData, errors]);

    const handleSubmit = useCallback(async () => {
        console.log(formData);
        const {payload} = await dispatch(registerRequest(formData));
        if (payload.status === 'ok') {
            navigate.replace('Login');
        } else if (payload.errors) {
            setErrors(payload.errors);
        } else {
            toast.error(payload.message || 'Something went wrong')
        }
    }, [formData]);

    return (
        // <SafeAreaView>
            <WrapperLogOut>
                <View>
                    <View>
                        <View>
                            <Text>Sign up</Text>
                            <TextInput
                                value={formData.firstName}
                                onChangeText={onChange('firstName')}
                                placeholder="First Name"
                            />
                            <TextInput
                                value={formData.lastName}
                                onChangeText={onChange('lastName')}
                                placeholder="Last Name"
                            />
                            <TextInput
                                value={formData.email}
                                onChangeText={onChange('email')}
                                placeholder="Your Email"
                                keyboardType="email-address"
                            />
                            <TextInput
                                value={formData.password}
                                onChangeText={onChange('password')}
                                placeholder="Password"
                                secureTextEntry
                            />
                            <TouchableOpacity onPress={handleSubmit}>
                                <Text>Register</Text>
                            </TouchableOpacity>
                        </View>
                        <View>
                            <Text>I am already a member</Text>
                        </View>
                    </View>
                </View>
            </WrapperLogOut>
        // </SafeAreaView>
    );
}

export default RegisterNavigation;
