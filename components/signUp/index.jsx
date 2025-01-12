import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Icon from "@expo/vector-icons/MaterialCommunityIcons";

import { TextInput, Button , IconButton} from "@react-native-material/core";

function SignUp() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('')

    const navigation = useNavigation()

    const handleSignUp = () => {
        navigation.navigate('Login')
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Kaydol</Text>
            
            <View style={{ flexDirection: 'row', alignItems: 'center',marginBottom: 10, padding: 10 , width: 240,}}>
                <Icon name="account" size={20} color="gray" />
                <TextInput
                    value={name}
                    onChangeText={setName}
                    keyboardType="name"
                    variant="outlined" label="Adınız" style={{ width: 200, flex: 1, marginLeft: 10}}
                />
            </View>
            

            <View style={{ flexDirection: 'row', alignItems: 'center',marginBottom: 10, padding: 10 , width: 240,}}>
                <Icon name="mail" size={20} color="gray" />
                <TextInput
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    variant="outlined" label="E-posta" style={{ width: 200, flex: 1, marginLeft: 10}}
                />
            </View>

            <View style={{ flexDirection: 'row', alignItems: 'center',marginBottom: 10, padding: 10 , width: 240,}}>
                <Icon name="lock" size={20} color="gray" />
                <TextInput
                    secureTextEntry={true}
                    value={password}
                    onChangeText={setPassword}
                    variant="outlined" label="Şifre" style={{ width: 200, flex: 1, marginLeft: 10}}
                />
            </View>



            <TouchableOpacity >
                <Button onPress={handleSignUp} title="Kayıt Ol" uppercase={false} color="#ff6131" tintColor="white"/>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 24,
        marginBottom: 10,
    },
    
    button: {
        padding: 10,
        zIndex: 2,
    },
});

export default SignUp;
