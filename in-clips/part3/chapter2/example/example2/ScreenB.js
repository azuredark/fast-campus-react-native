import React, {Component} from 'react';
import {Button, Text, View} from "react-native";

export class ScreenB extends Component{

    render() {
        return (
            <View style={{flex:1, alignItems:'center', justifyContent:'center'}}>
                <Text>이것은 Screen B입니다.{'\n'}그리고 받은 파라미터 : {this.props.route.params.value}</Text>
                <Button
                    title={'뒤로가기'}
                    onPress={()=>{
                        this.props.navigation.pop();
                    }}
                />
            </View>
        )
    }
}
