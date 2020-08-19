import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  ActivityIndicator
} from 'react-native';

export default class SplashScreen extends React.Component {
    render() {
        return (
            <View style = {styles.container}>
                <Text>Loading...</Text>
                <ActivityIndicator size = "large" />
            </View>
        )
    }
}

const styles = StyleSheet.create ({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});