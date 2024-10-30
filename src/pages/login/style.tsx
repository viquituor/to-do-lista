import {Dimensions, StyleSheet } from "react-native";
import { themas } from "../../global/themes";
import { Colors } from "react-native/Libraries/NewAppScreen";

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
        gap:5,
        fontSize:12,
        color:themas.colors.gray
        },
    boxBottom:{
        height:Dimensions.get('window').height/3,
        width:'100%',
        alignItems:'center',
        
        
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
        marginHorizontal:10, 
        
    },
    box:{
        width:300,
        height:35,
        backgroundColor:'#f1f7fa',
        borderRadius:40,
        flexDirection:'row',
        alignItems:'center',
        borderWidth:1,
        borderColor:'#d7d8d7'
        
    },

    input:{
        width:260,
        height:30,
        marginLeft:8
    },
    entra:{
        width:200,
        height:50,
        backgroundColor:themas.colors.primary,
        borderRadius:40,
        alignItems:'center',
        bottom:80,
        shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 4,
},
shadowOpacity: 0.32,
shadowRadius: 5.46,

elevation: 9,
        
    },
    botao:{
        color:'#ffffff',
        fontSize:20,
        fontWeight:'bold',
        top:13

    },
    singin:{
        flexDirection:'row', 
        top:90
    },
    ask:{
        color:themas.colors.lightgray,
    },
    create:{
        color:'#878af6'
    }
  
})