import axios from "axios";
import React ,{useState} from "react";
import { Text, View, TextInput, StyleSheet ,Dimensions, TouchableOpacity } from "react-native";
import { NavigationHelpersContext, useNavigation } from "@react-navigation/native";

const AddVerse = () =>{
    const [title, setTitle ] = useState("")
    const [description , setDescription] = useState("")
    const [line, setLine] = useState("")
    const navigation = useNavigation()

    const addVese = async() =>{
        try {
            await axios.post("https://react-native-crud-ild2wrqjd-yschristian7-gmailcom.vercel.app/bible/create",{
                title,description,line
            })
        } catch (error) {
            console.log(error);
        }
        
    }

    return(
        <View style={styles.container}>
            <Text
                style={styles.text}
            >Bibble
            </Text>
            <View style={styles.userRequest}>
                <TextInput
                    onChangeText={(value) => setTitle(value)}
                    style={styles.requestText}
                    placeholder="Tittle"
                />
                <TextInput
                    onChangeText={(value) => setDescription(value)}
                    style={styles.requestText}
                    placeholder="Descriptions"
                    multiline
                />
                <TextInput
                    onChangeText={(value) => setLine(value)}
                    style={styles.requestText}
                    placeholder="line"
                    
                />
                <TouchableOpacity
                onPress={() => addVese()}
                
                style={styles.button}
                >
                    <Text style={styles.buttonText}>Add</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={() => navigation.navigate("ViewVerse")}
                
                style={styles.button}
                >
                    <Text style={styles.buttonText}>View</Text>
                </TouchableOpacity>
            </View>
        </View>
        
    )
}

export default AddVerse

const styles = StyleSheet.create({
    container:{
        backgroundColor: "#8cd98c",
        width:"100%",
        height:"100%"
    },
    userRequest:{
        marginVertical:100,
        justifyContent:'center',
        alignItems:"center",
        backgroundColor:"#339933", 
        borderRadius:23,
        marginHorizontal:10,
        width:Dimensions.get('screen').width - 20,
    },
    requestText:{
        width:"60%",
        height:40,
        margin:20,
        borderRadius:15,
        backgroundColor: "white",
        color: "black",
        paddingLeft:10,
        fontSize: 16,
        fontWeight:"bold"
    },
    button:{
        width:"60%",
        height:30,
        margin:20,
        borderRadius:15,
        alignItems:'center',
        backgroundColor:"#66cc66"
    },
    buttonText:{
        color:"white",
        fontWeight:"bold",
        fontSize:20
    },
    text:{
        color: "white",
        textAlign:"center",
        marginTop:100,
        fontWeight:"bold",
        fontSize:30,
        },
    selectPicker:{
        width: 100,
        height:50
        },
    optionTitle:{
        color:"white",
        fontWeight:"bold",
        fontSize:30,
    },
    item:{
       padding: 12 
    }
})