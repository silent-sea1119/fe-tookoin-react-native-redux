import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FEFEFE',
        flex: 1
    },
    header: {
        padding: 15,
        backgroundColor: '#FEFEFE',
        borderColor: "#f5f5f5",
        borderBottomWidth: 3,
        flexDirection: 'row'
    },
    headerIcon: {
        marginTop: 9,
        fontSize: 40,
        color: '#4AAE4C',
        flex: 1
    },
    headerText: {
        marginTop: 19,
        height: "100%",
        fontSize: 16,
        fontWeight: 'bold'
    },
    image: {
        width: "70%",
        resizeMode: "contain"
    },
    imageContainer: {
        alignItems: "center",
    },
    limit: {
        marginLeft: 20,
        marginBottom: 25
    },
    hr: {
        borderBottomColor: '#f0f0f0',
        borderBottomWidth: 2
    },
    amount: {
        marginTop: 25,
        marginLeft: 20,
        marginBottom: 25,
    },
    amountNumber: {
        fontSize: 25
    },
    hr2: {
        borderBottomColor: '#f0f0f0',
        borderBottomWidth: 20
    },
    payment: {
        margin: 20
    },
    paymentMethod: {
        fontWeight: 'bold'
    },
    box: {
        marginTop: 20,
        height: 160,
        borderWidth: 1,
        borderColor: "#f0f0f0",
        alignItems: 'center'
    },
    ipaymu: {
        resizeMode: "contain",
        width: 130
    },
    link: {
        marginTop: 5,
        color: "#4AAE4C"
    },
    estimate: {
        margin: 20,
    },
    estimateFooter: {
        marginTop: 10,
        fontWeight: "bold"
    },
    footer: {
        borderTopWidth: 2,
        borderColor: "#f0f0f0",
        padding: 15
    },
    footerButton: {
        height: 45,
        shadowColor: '#fff',
        width: "100%",
        backgroundColor: "#4AAE4C",
        borderRadius: 8,
        alignItems: 'center',
        justifyContent: "center"
    },
    footerText: {
        color: "#fff",
        fontWeight: "bold"
    }
})

export default (styles);

