import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert, TouchableOpacity } from 'react-native';
import { TextInput, ScrollView } from 'react-native-gesture-handler';
import Axios from "axios";


class Forgot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            numberPhone: '',
            email: ''
        }
    }

    handleOnchange = (text) => {
        if (this.state.numberPhone == '') {
            this.setState({ numberPhone: '+62' })
        } else {
            this.setState({ numberPhone: text })
        }
    }

    handleExecuteEmail = () => {
        const { email } = this.state;
        if (email.includes('@')) {
            const data = {
                email: email
            }
            Axios.post("http://3.80.150.111:8000/password/forget", data).then(response => {
                if (response.data.status == "success") {
                    Alert.alert(response.data.status.toUpperCase(), response.data.msg)
                    setTimeout(() => {
                        this.props.navigation.navigate('InputToken')
                    }, 500);
                } else {
                    Alert.alert(response.data.status.toUpperCase(), response.data.msg)
                }
            }).catch(err => console.log(err))
        } else {
            Alert.alert("failed".toUpperCase(), "This is not an email!");
        }
    }

    handleExecuteNumber = () => {
        const { numberPhone } = this.state;
        let regex = new RegExp(/^[0-9+]+$/i)
        if (regex.test(numberPhone)) {
            const data = {
                phone: numberPhone
            }
            Axios.post("http://3.80.150.111:8000/password/otp", data).then(response => {
                if (response.data.status == "success") {
                    Alert.alert(response.data.status.toUpperCase(), response.data.msg)
                    setTimeout(() => {
                        this.props.navigation.navigate('InputToken')
                    }, 500);
                } else {
                    Alert.alert(response.data.status.toUpperCase(), response.data.msg)
                }
            }).catch(err => console.log(err))
        } else {
            Alert.alert("failed".toUpperCase(), "This is not a phone number!");
        }

    }

    emailOnChange = (text) => {
        this.setState({ email: text })
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <Text
                        style={{
                            fontWeight: 'bold',
                            fontSize: 16
                        }}>Forgot Password</Text>
                </View>
                <ScrollView>
                    <View style={styles.body}>
                        <View style={styles.box}>
                            <Text style={styles.label}>Email</Text>
                            <TextInput style={styles.input} onChangeText={(text) => this.emailOnChange(text)} placeholder="example@tookoin.com" />
                            <TouchableOpacity onPress={this.handleExecuteEmail}>
                                <View style={styles.button}>
                                    <Text style={{ color: "#fff" }}>Kirim Kode</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.separator}>
                            <View style={styles.hr} />
                            <Text style={styles.separatorText}>OR</Text>
                            <View style={styles.hr} />
                        </View>
                        <View style={styles.box}>
                            <Text style={styles.label}>Nomor Handphone</Text>
                            <TextInput useGrouping={false} value={this.state.numberPhone} onChangeText={(text) => {
                                this.handleOnchange(text);
                            }} style={styles.input} placeholder="+6281200000000" />
                            <TouchableOpacity onPress={this.handleExecuteNumber}>
                                <View style={styles.button}>
                                    <Text style={{ color: "#fff" }}>Kirim Kode</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <TouchableOpacity onPress={() => { this.props.navigation.navigate('InputToken') }} style={styles.haveCode}>
                        <Text style={styles.haveCodeText}>Saya sudah punya kode</Text>
                    </TouchableOpacity>
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
        justifyContent: "center",
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
        borderRadius: 10,
    },
    separator: {
        marginTop: 20,
        marginBottom: 20,
        flexDirection: 'row',
        justifyContent: "center"
    },
    hr: {
        borderBottomColor: '#F5F5F6',
        borderBottomWidth: 2,
        flex: 1,
        alignSelf: "center"
    },
    separatorText: {
        marginLeft: 5,
        marginRight: 5,
        fontSize: 40,
        fontWeight: "bold",
        color: "#F5F5F6"
    },
    haveCode: {
        marginTop: 30,
        alignItems: "center",
        marginBottom: 30
    },
    haveCodeText: {
        color: "#4AAE4C",
        fontSize: 15
    }
})

export default (Forgot)