import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
 import { NavigationContainer } from '@react-navigation/native'
import AddVerse from '../screens/addVerse'
import ViewVerse from '../screens/ViewVerse'
import UpdateVerse from '../screens/UpdateVerse'

 const Stack = createStackNavigator()

 const Router = () =>{
       return(
        <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name={"AddVerse"} component= {AddVerse}  />
            <Stack.Screen name={"ViewVerse"} component= {ViewVerse}  />
            <Stack.Screen name={"UpdateVerse"} component= {UpdateVerse}  />
        </Stack.Navigator>
     </NavigationContainer>
       )
 }

 export default Router