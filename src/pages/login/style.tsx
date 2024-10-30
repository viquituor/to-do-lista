import {Dimensions, StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    container:{
            flex:1,
            alignItems:'center',
            justifyContent:'center',
        
    },
    boxTop:{
            height:Dimensions.get('window').height/3,
            width:'100%',
            alignItems:'center',
            gap:30,
            marginTop:250,
        
            
    },
    boxMid:{
        height:Dimensions.get('window').height/4,
        width:'100%',
        paddingHorizontal:40,
        gap:1,
        fontSize:12,
        color:themas.colors.gray
        },
    boxBottom:{
        height:Dimensions.get('window').height/3,
        width:'100%',
        alignItems:'center'
        
    },
    logo:{
        width:100,
        height:100,
        marginTop:20
    },
    welcome:{
        fontWeight:'bold',
        marginTop:20,
        fontSize:25
    },
    titlein:{
        fontSize:13,
        fontWeight:'bold',
        color:themas.colors.gray,
        marginHorizontal:10 
    },
    box:{
        width:300,
        height:30,
        backgroundColor:'#d7d8d7',
        borderRadius:40,
    }
})