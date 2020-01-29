import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { TextInput, ScrollView } from 'react-native-gesture-handler';
import Axios from "axios";
import {showToast} from '../../../components/toast';

class InputToken extends Component {
    constructor(props) {
        super(props);
        this.state = {
            newPassword: '',
            reType: '',
            code: ''
        }
    }

    handleExecute = () => {
        const { newPassword, reType, code } = this.state;

        if (newPassword != reType) {
            // Alert.alert("error".toUpperCase(), "Password is not same");
            showToast(`Password did not match`, `warning`);
        } else {
            const data = {
                password: newPassword,
                confirm: reType,
                token: code
            }
            Axios.post('http://3.80.150.111:8000/password/reset', data).then(response => {
                if (response.data.status != 200) {
                    // Alert.alert("Failed", response.data.msg)
                    showToast(response.data.msg, `warning`);
                } else {
                    showToast(response.data.msg, `success`);
                    // Alert.alert("Success", response.data.msg)
                    setTimeout(() => {
                        this.props.navigation.navigate('Login')
                    }, 500);
                }
            }).catch(err => console.log(err))
        }
    }

    handlePassword(text) {
        this.setState({ newPassword: text })
    }

    handleRetype(text) {
        this.setState({ reType: text })
    }

    handleCode(text) {
        this.setState({ code: text })
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text
                        style={{
                            fontWeight: 'bold',
                            fontSize: 16
                        }}>Reset Password</Text>
                </View>
                <ScrollView>
                    <View style={styles.body}>
                        <View style={styles.box}>
                            <Text style={styles.label}>Password Baru</Text>
                            <TextInput
                                secureTextEntry={true}
                                value={this.state.newPassword}
                                onChangeText={(text) => {
                                    this.handlePassword(text)
                                }}
                                style={styles.input}
                                placeholder="Input Password Baru" />
                            <Text style={styles.label}>Tulis Ulang</Text>
                            <TextInput
                                secureTextEntry={true}
                                value={this.state.reType}
                                onChangeText={(text) => {
                                    this.handleRetype(text)
                                }}
                                style={styles.input}
                                placeholder="Tulis Ulang" />
                            <Text style={styles.label}>Kode Email/SMS</Text>
                            <TextInput
                                style={styles.input}
                                value={this.state.code}
                                onChangeText={(text) => {
                                    this.handleCode(text)
                                }}
                                placeholder="Input Kode" />
                            <TouchableOpacity onPress={this.handleExecute}>
                                <View style={styles.button}>
                                    <Text style={{
                                        color: "#fff"
                                    }}>Simpan</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    header: {
        alignItems: 'center',
        paddingVertical: 10,
        borderBottomColor: '#F5F5F6',
        borderBottomWidth: 4
    },
    box: {
        borderWidth: 2,
        borderRadius: 10,
        borderColor: "#F5F5F6",
        flexDirection: "column",
        justifyContent: "center"
    },
    body: {
        marginTop: 50,
        marginLeft: 10,
        marginRight: 10
    },
    button: {
        height: 40,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 10,
        shadowColor: '#fff',
        backgroundColor: "#4AAE4C",
        borderRadius: 5,
        alignItems: 'center',
        justifyContent: "center"
    },
    label: {
        alignSelf: "center",
        marginTop: 10,
        marginBottom: 10
    },
    input: {
        alignSelf: "center",
        textAlign: "center",
        backgroundColor: '#F5F5F6',
        width: "90%",
        borderRadius: 10
    }
})

export default (InputToken);