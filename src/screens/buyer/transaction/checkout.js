import * as React from 'react'
import {
    StyleSheet,
    View,
    FlatList,
    ScrollView,
    Text,
    Image,
    Alert,
    TouchableOpacity
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome';
import IconMI from 'react-native-vector-icons/MaterialIcons';
import PictureExample from '../../../assets/images/logo.png';
import Axios from 'axios';
import AsyncStorage from '@react-native-community/async-storage';

export default class App extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            example: 1,
            total: '',
            data: [],
            address: '',
            phone: ''
        }
    }

    componentDidMount() {
        this.handleGetData();
    }

    handleGetData = async () => {
        const item = this.props.navigation.state.params.item;
        let address = await AsyncStorage.getItem('address');
        let phone = await AsyncStorage.getItem('phone');
        let token = await AsyncStorage.getItem('token');
        let config = {
            headers: {
                Authorization: 'Bearer ' + token
            }
        };

        Axios
            .get("http://3.80.150.111:8000/transaction/detail/buyer/" + item, config)
            .then(response => {
                const arrayTotal = [];
                for (let i = 0; i < response.data.data.length; i++) {
                    arrayTotal.push(response.data.data[i].subtotal)
                }
                let total = arrayTotal.reduce((a, b) => a + b, 0)
                this.setState({ data: response.data.data, total: total, address: address, phone: phone });
            })
            .catch(err => console.log(err))
    }

    handlePayment = async () => {
        const product = ['admin'];
        const price = [3500];
        const qty = [1];
        const comments = ['admin'];
        const { data } = this.state;

        for (let i = 0; i < data.length; i++) {
            product.push(data[i].name_product);
            price.push(data[i].price);
            qty.push(data[i].qty);
            comments.push('nocoment');
        }

        // const payload = new FormData(); payload.append('key',
        // '235CA757-AC86-44A6-8EB1-D3510AF5A322');
        // payload.append('235CA757-AC86-44A6-8EB1-D3510AF5A322', 'payment');
        // payload.append('product', product); payload.append('price', price);
        // payload.append('quantity', qty); payload.append('comments', comments);
        // payload.append('ureturn', ''); payload.append('unotif',
        // 'http://3.80.150.111:8000/transaction'); payload.append('ucancel', '');
        // payload.append('format', 'json');

        const payload = {
            key: '235CA757-AC86-44A6-8EB1-D3510AF5A322',
            action: 'payment',
            product: product,
            price: price,
            quantity: qty,
            comments: comments,
            ureturn: '',
            unotif: 'http://3.80.150.111:8000/transaction',
            ucancel: '',
            format: 'json'
        }

        Axios
            .post("https://my.ipaymu.com/payment.htm", payload)
            .then(async (response) => {
                if (response.data) {
                    let token = await AsyncStorage.getItem('token');

                    let config = {
                        headers: {
                            Authorization: 'Bearer ' + token
                        }
                    };

                    Axios
                        .patch("http://3.80.150.111:8000/transaction/sid/" + this.props.navigation.state.params.item, null, config)
                        .then(result => {
                            this
                                .props
                                .navigation
                                .navigate('SuccessOrder', {
                                    url: response.data.url,
                                    sessionID: response.data.sessionID,
                                    total: this.state.total
                                })
                        })
                }
            })
            .catch(err => console.log(err))
    }

    render() {
        const { data } = this.state;
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity>
                        <IconMI style={styles.backIcon} name="navigate-before" />
                    </TouchableOpacity>
                    <Text style={styles.textHeader}>Checkout</Text>
                </View>
                <ScrollView>
                    <View style={styles.top}>
                        <Text style={styles.top1}>Alamat Pengiriman</Text>
                        <TouchableOpacity style={styles.top2}>
                            <Icon name="edit" style={styles.top2Text} />
                            <Text style={styles.top2Text}>&nbsp;Ubah</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.body}>
                        <View style={styles.box}>
                            <Text style={styles.boxTitle}>Alamat Anda</Text>
                            <Text style={styles.boxBody}>{this.state.address}</Text>
                            <Text style={styles.boxFooter}>{this.state.phone}</Text>
                        </View>
                    </View>
                    <View style={styles.hr}>
                        <Text style={styles.hrText}>Detail Pesanan</Text>
                    </View>
                    {data.map(({
                        name_product,
                        unit,
                        price,
                        qty
                    }, index) => {
                        return (
                            <View key={index} style={styles.list}>
                                <Image source={PictureExample} style={styles.image} />
                                <View style={styles.listDetail}>
                                    <Text style={styles.listTitle}>{name_product}</Text>
                                    <Text style={styles.listBody}>{unit}</Text>
                                    <Text style={styles.listFooter}>Rp {price}/ {unit}</Text>
                                </View>
                                <View style={styles.listTools}>
                                    <Text style={styles.listToolsText}>{qty}/ {unit}</Text>
                                </View>
                            </View>
                        )

                    })}
                </ScrollView>
                <View style={styles.footer}>
                    <View style={styles.footerLeft}>
                        <Text style={styles.footerText1}>Total Pembayaran</Text>
                        <Text style={styles.footerText2}>Rp {this.state.total}</Text>
                    </View>
                    <TouchableOpacity onPress={this.handlePayment} style={styles.footerRight}>
                        <Text style={styles.btnText}>Pembayaran</Text>
                    </TouchableOpacity>
                </View>
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
        flexDirection: 'row',
        paddingVertical: 10,
        borderBottomColor: '#F5F5F6',
        borderBottomWidth: 3
    },
    textHeader: {
        marginTop: 3,
        fontWeight: 'bold',
        fontSize: 16,
        flex: 1,
        textAlign: "center",
        marginLeft: -50
    },
    backIcon: {
        marginLeft: 10,
        fontSize: 28,
        color: '#4AAE4C'
    },
    top: {
        flexDirection: 'row',
        margin: 15
    },
    top1: {
        flex: 1,
        fontWeight: "bold"
    },
    top2: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-end"
    },
    top2Text: {
        textAlignVertical: 'center',
        color: "#92969A"
    },
    box: {
        borderWidth: 2,
        borderRadius: 10,
        marginBottom: 10,
        borderColor: "#F5F5F6",
        flexDirection: "column",
        justifyContent: "center"
    },
    body: {
        marginTop: 0,
        marginLeft: 10,
        marginRight: 10
    },
    boxTitle: {
        margin: 10,
        fontWeight: "bold",
        fontSize: 16
    },
    boxBody: {
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 10,
        fontSize: 14
    },
    boxFooter: {
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 15,
        fontSize: 14
    },
    hr: {
        height: 40,
        backgroundColor: '#f0f0f0',
        justifyContent: "center",
        marginBottom: 20
    },
    hrText: {
        margin: 10,
        fontWeight: "bold"
    },
    list: {
        padding: 10,
        marginLeft: 10,
        marginRight: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#F5F5F6",
        flexDirection: "row"
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 10
    },
    listDetail: {
        marginLeft: 10,
        flexDirection: 'column'
    },
    listTitle: {
        marginTop: 5,
        fontSize: 18,
        color: '#4AAE4C',
        flex: 1
    },
    listBody: {
        marginTop: 2,
        fontSize: 14,
        color: '#92969A',
        flex: 1
    },
    listFooter: {
        fontSize: 16,
        color: '#92969A',
        fontWeight: 'bold',
        flex: 1,
        marginBottom: 5
    },
    listTools: {
        marginTop: -20,
        flexDirection: 'row',
        width: "100%",
        flex: 1,
        alignItems: "center",
        justifyContent: 'flex-end'
    },
    listToolsPlus: {
        fontSize: 25,
        color: '#4AAE4C',
        marginLeft: 20
    },
    listToolsText: {
        fontSize: 25,
        color: '#92969A'
    },
    listToolsMinus: {
        fontSize: 25,
        color: '#4AAE4C',
        marginRight: 20
    },
    footer: {
        flexDirection: 'row',
        borderTopColor: "#F5F5F6",
        borderTopWidth: 1,
        padding: 10
    },
    footerLeft: {
        flex: 1,
        flexDirection: 'column'
    },
    footerRight: {
        flex: 1,
        backgroundColor: "#4AAE4C",
        borderRadius: 5,
        justifyContent: "center",
        alignItems: "center"
    },
    footerText1: {
        fontSize: 13
    },
    footerText2: {
        fontSize: 16,
        color: "#4AAE4C",
        fontWeight: "bold"
    },
    btnText: {
        color: "#fff",
        fontWeight: 'bold',
        fontSize: 16
    }
})
