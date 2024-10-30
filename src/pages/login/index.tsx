import React, { useState } from "react";

import {Text, View, Image, TextInput, Button, TouchableOpacity, Alert} from 'react-native';

import { style } from "./style";
import LOGO from '../../assets/logo.png';
import mail from '../../assets/email.png';
import eye from '../../assets/eye.png'


export default function Login(){
const [email,setEmail] = useState('vitor');
const [password,setPassword] = useState('');

function getLogin(){
    try{
        if(!email || ! password){
            return Alert.alert('atenção', 'informe os campos obrigatorios!')
        } Alert.alert('login sucedido!')
    } catch (error){ console.log(error) }
}
    return(
        <View  style={style.container}>
            <View style={style.boxTop}> 
                <Image 
                source={LOGO}
                style={style.logo}
                resizeMode="contain"
                />
                <Text style={style.welcome}>Bem vindo de volta!</Text>
            </View>

            <View style={style.boxMid}>
                    <Text style={style.titlein}>ENDEREÇO E-MAIL </Text>
                <View style={style.box}>
                    <TextInput style={style.input} value={email}
                                onChangeText={setEmail}
                                placeholder="Digite seu e-mail"
                                keyboardType="email-address"
                                autoCapitalize="none" />
                    <Image source={mail} resizeMode="contain"  />
                </View>
            
                    <Text style={style.titlein}>SENHA </Text>
                <View style={style.box}>
                    <TextInput style={style.input} value={password} onChangeText={setPassword}
                        secureTextEntry
                        placeholder="Digite sua senha"
                        keyboardType="email-address" 
                        autoCapitalize="none"/>  
                    <Image source={eye} resizeMode="contain"/>
                </View>
            
            </View>

            <View style={style.boxBottom}> 

                <TouchableOpacity style={style.entra } onPress={getLogin}><Text style={style.botao}> ENTRAR </Text></TouchableOpacity>
                
                <View style={style.singin}>
                <Text style={style.ask} >Não tem conta?</Text><TouchableOpacity><Text style={style.create}>Crie agora!</Text></TouchableOpacity>
                </View>
            
            </View>
        </View>
    )
}