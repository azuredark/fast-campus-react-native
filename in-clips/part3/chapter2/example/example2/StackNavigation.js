import React, {Component} from 'react';
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {ScreenA} from "./ScreenA";
import {ScreenB} from "./ScreenB";

const Stack = createNativeStackNavigator()

export class StackNavigation extends Component{
    render() {
        return (
            <NavigationContainer>
                <Stack.Navigator screenOptions={{presentation:'card'}}>
                    <Stack.Screen name={'ScreenA'} component={ScreenA}/>
                    <Stack.Screen name={'ScreenB'} component={ScreenB}/>
                </Stack.Navigator>
            </NavigationContainer>
        )
    }
}
