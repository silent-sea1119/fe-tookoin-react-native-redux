import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F6F6F6'
    },
    header: {
        backgroundColor: '#fff',
        height: 50,
        borderColor: "#f5f5f5",
        borderBottomWidth: 1
    },
    headerIcon: {
        flexDirection: 'row'
    },
    touchBackIcon: {
        margin: 10
    },
    backIcon: {
        fontSize: 28,
        color: '#4AAE4C'
    },
    checkIcon: {
        fontSize: 28,
        color: '#4AAE4C',
        margin: 10,
    },
    headerText: {
        flex: 1,
        margin: 13,
        fontSize: 16
    },
    picture: {
        backgroundColor: '#4AAE4C',
        height: 150,
        justifyContent: "center",
        alignContent: "center",
        alignItems: "center",
        flexDirection: 'column'
    },
    pictureCircle: {
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        marginTop: -50,
        opacity: 70,
        width: 70,
        height: 70,
        borderRadius: 50,
        flexDirection: 'column',
        justifyContent: "center",
        alignItems: "center",
    },
    pictureIcon: {
        color: "#fff",
        fontSize: 30,
    }
    ,
    pictureText: {
        color: "#fff",
        fontSize: 12,
    },
    pictureFooter1: {
        backgroundColor: '#4AAE4C',
        height: 20,
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    pictureFooter: {
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        height: 20,
        width: "100%",
        alignItems: "center",
        justifyContent: "center"
    },
    pictureFooterText: {
        color: "#fff",
        fontSize: 12
    },
    body: {
        flexDirection: "row",
        backgroundColor: '#fff',
        height: 50,
    },
    bodyText: {
        marginLeft: 10,
        marginTop: 16,
        fontSize: 15,
        flex: 1
    },
    bodyInput: {
        marginRight: 10,
        fontSize: 15,
        textAlign: 'right'
    },
    bodyInputMulti: {
        marginRight: 10,
        fontSize: 15,
        textAlign: 'right',
        maxWidth: "70%"
    },
    hr: {
        marginLeft: 10,
        marginRight: 10,
        borderBottomColor: '#f0f0f0',
        borderBottomWidth: 1
    },
})

export default styles