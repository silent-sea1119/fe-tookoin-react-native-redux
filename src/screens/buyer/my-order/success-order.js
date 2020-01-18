import React, { Component } from 'react';
import {
    Text,
    View,
    TouchableOpacity,
    ScrollView,
    Image,
    Linking,
    Button
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import IconMI from 'react-native-vector-icons/MaterialIcons';
import styles from "./success-order.style";
import image from "../../../assets/images/trolli.png";
import ipaymuLogo from "../../../assets/images/ipaymu.png"

class SuccessOrder extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <IconMI style={styles.headerIcon} name="navigate-before" />
                    <Text style={styles.headerText}>Sukses Order</Text>
                    <View style={{
                        flex: 1
                    }} />
                </View>
                <ScrollView>
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={image} />
                    </View>
                    <View style={styles.limit}>
                        <Text>Batas Waktu Pembayaran</Text>
                        <Text style={{
                            fontWeight: "bold"
                        }}>Selasa, 14 Januari 2020 pukul 16.00 WIB</Text>
                    </View>
                    <View style={styles.hr} />
                    <View style={styles.amount}>
                        <Text>Total Tagihan</Text>
                        <Text style={styles.amountNumber}>Rp 39.095</Text>
                    </View>
                    <View style={styles.hr2} />
                    <View style={styles.payment}>
                        <Text>Payment Method</Text>
                        <Text style={styles.paymentMethod}>iPaymu.com</Text>
                        <View style={styles.box}>
                            <Image style={styles.ipaymu} source={ipaymuLogo} />
                            <Text>Session ID</Text>
                            <Text>C0E6D95C-05D3-4039-9105-333333</Text>
                            <TouchableOpacity
                                onPress={() => {
                                    Linking.openURL("https://www.google.com")
                                }}>
                                <Text style={styles.link}>Lanjutkan Pembayaran</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.hr2} />
                    <View style={styles.estimate}>
                        <Text>Pesanan anda akan dikirim pada <Text style={{ fontWeight: "bold" }}>Rabu, 15 Januari 2020 Sore hari (ETA 17.00 - 20.00 WIB)</Text></Text>
                        <Text style={styles.estimateFooter}>LOVE YOUR PARENT IS BETTER THAN YOU LOVE SOMEONE YOU CAN'T HAVE</Text>
                    </View>
                    <View style={styles.hr2} />
                </ScrollView>
                <View style={styles.footer}>
                    <TouchableOpacity>
                        <View style={styles.footerButton}>
                            <Text style={styles.footerText}>Lihat Order Saya</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
}

export default (SuccessOrder);