import axios from "axios";
import React ,{useState, useEffect} from "react";
import { Text, View, TextInput, StyleSheet ,Dimensions, TouchableOpacity } from "react-native";

const UpdateVerse = ({route,navigation}) =>{
    const [title, setTitle ] = useState("")
    const [description , setDescription] = useState("")
    const [line, setLine] = useState("")
    const [currentVerse , setCurrentVerse] = useState("")
    const id = route.params.id

    useEffect(() => {
        const getVerse = async() =>{
            try {
                const res = await axios.get(`https://react-native-crud-ild2wrqjd-yschristian7-gmailcom.vercel.app/bible/verse/${id}`)
                setCurrentVerse(res.data)
            } catch (error) {
                console.log(error);
            }
        }
        getVerse()
    }, [])
    const updateVerse = async() =>{
        try {
            await axios.put(`https://react-native-crud-ild2wrqjd-yschristian7-gmailcom.vercel.app/bible/updateVerse/${id}`,
            {title, description, line})
            navigation.navigate("AddVerse")
        }
            
            catch (error) {
            console.log(error);
        }
   
    }

    return(
        <View style={styles.container}>
            <Text
                style={styles.text}
            >Bibble
            </Text>
        {currentVerse && 
            <View style={styles.userRequest} key={currentVerse._id}>
                <TextInput
                    onChangeText={(value) => setTitle(value)}
                    style={styles.requestText}
                    defaultValue={currentVerse.bible.title}
                />
                <TextInput
                    onChangeText={(value) => setDescription(value)}
                    style={styles.requestText}
                    defaultValue={currentVerse.bible.description}
                    multiline
                />
                <TextInput
                    onChangeText={(value) => setLine(value)}
                    style={styles.requestText}
                    defaultValue={currentVerse.bible.line}
                />
                <TouchableOpacity
                onPress={() => updateVerse}
                style={styles.button}
                >
                    <Text style={styles.buttonText}>updateVerse</Text>
                </TouchableOpacity>
            </View>
}
        </View>
    )
}

export default UpdateVerse

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