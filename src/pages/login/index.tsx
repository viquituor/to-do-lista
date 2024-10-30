import React from "react";

import {Text, View, Image, TextInput, Button} from 'react-native';

import { style } from "./style";
import LOGO from '../../assets/logo.png'

export default function Login(){

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
                <TextInput />
            </View>
            
            <Text style={style.titlein}>SENHA </Text>
            <View style={style.box}>
                <TextInput />  
            </View>
            
            </View>

            <View style={style.boxBottom}> 
                <Text> ENTRAR </Text>
            <Text>pass </Text>
            </View>
        </View>
    )
}