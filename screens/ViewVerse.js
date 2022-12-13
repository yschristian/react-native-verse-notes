import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, FlatList, ScrollView } from 'react-native';
import { AntDesign, EvilIcons } from '@expo/vector-icons';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';

const ViewVerse = () => {
    const [verses, setVerses] = useState([])
    const navigation = useNavigation()

    const getVerses = async () => {
        try {
            const res = await axios.get("https://react-native-crud-ild2wrqjd-yschristian7-gmailcom.vercel.app/bible/allVerse")
            setVerses(res.data)
        } catch (error) {
            console.log(error);
        }
    }
    const deleteVerse = async (id) => {
        try {
         await axios.delete(`https://react-native-crud-ild2wrqjd-yschristian7-gmailcom.vercel.app/bible/deleteVerse/${id}`)
        } catch (error) {

        }
    }
    useEffect(() => {
        getVerses()
    }, [])

    return (
        <ScrollView style={styles.container}>
            {/* <Text style={styles.toptext}>all Verses</Text> */}
            <FlatList
                data={verses.bible}
                keyExtractor={(item,index) => item._id}
                renderItem={({ item }) => (
                    <View style={styles.card} key={item._id}>
                        <View>
                            <Text style={styles.text}>title:{item.title} </Text>
                            <Text style={styles.text1}>Description:{item.description} </Text>
                            <Text style={styles.text1}>Line:{item.line}  </Text>
                        </View>
                        <View style={styles.iconContainer}>
                            <EvilIcons name="pencil" onPress={() =>{navigation.navigate("UpdateVerse",{id:item._id})}} style={styles.icon} size={24} color="white" />
                            <AntDesign onPress={() =>deleteVerse(item._id)} name="delete" style={styles.icon} size={24} color="white" />
                        </View>
                    </View>
                )} />
        </ScrollView>
    )
}

export default ViewVerse

const styles = StyleSheet.create({
    container: {
        marginTop: 50,
        flexDirection: "row",
        flexWrap: "wrap"
    },
    head: {

    },
    card: {
        marginTop: 15,
        marginBottom: 50,
        backgroundColor: "grey",
        width: "100%",
        height: 200,
        marginHorizontal: 10,
        borderRadius: 20,
        marginRight:100

    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 12,
        marginTop: 12
    },
    text1: {
        fontSize: 16,
        marginLeft: 12,
        marginTop: 25
    },
    toptext: {
        marginLeft: 120,
        color: "grey",
        fontSize: 20,
        fontWeight: '600'
    },
    icon: {
        left:234 ,
        top: 0,
        bottom: 0,
        marginLeft: 7,
    },
    iconContainer: {
        flexDirection: "row",
        marginLeft: 15,
        marginTop: 35,
        top: 0

    }

})
