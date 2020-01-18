import React, { Component } from 'react';
import {
    View, StyleSheet, Text, Image
} from 'react-native';
import Logo from '../assets/images/logo.png'

export default class Splashscreen extends Component {

    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.navigate('HomeBuyer');
        }, 1000);
    }

    render() {
        return (
            <View>
                <View style={styles.container}>
                    <Image style={styles.image} source={Logo} />
                    <View style={styles.full} />
                    <Text style={styles.text}>© TookoIn 2020</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#c5e1ab",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100%"
    },
    image: {
        resizeMode: "contain",
        width: 300,
        justifyContent: "center",
        flex: 1,
        marginBottom: 100,
    },
    text: {
        fontSize: 13,
        color: "#669e42"
    },
    full: {
        marginTop: 100,
    }
})