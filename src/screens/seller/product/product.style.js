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
    body: {
        marginTop: 5,
        backgroundColor: '#fff',
        height: 260,
    },
    imagepicker: {
        margin: 10,
        height: 100,
        width: 100,
        borderStyle: 'dotted',
        borderColor: "#4AAE4C",
        borderWidth: 1,
        borderRadius: 2,
        justifyContent: "center",
    },
    imagepickerText: {
        textAlign: "center",
        color: '#4AAE4C',
    },
    hr: {
        marginLeft: 10,
        marginRight: 10,
        borderBottomColor: '#f0f0f0',
        borderBottomWidth: 1
    },
    TextInput: {
        margin: 10,
        fontSize: 15,
    },
    category: {
        marginTop: 10,
        flexDirection: "row",
        height: 50,
        backgroundColor: "#fff"
    },
    categoryIcon: {
        marginLeft: 10,
        marginRight: 15,
        marginTop: 15,
        color: "#000",
        fontSize: 20
    },
    categoryText: {
        marginTop: 14,
        color: "#000",
        fontSize: 15,
        flex: 1
    },
    categoryNavigate: {
        marginTop: 15,
        fontSize: 20,
        color: "#5f5f5f"
    },
    body2: {
        marginTop: 10,
        backgroundColor: '#fff',
        height: 280,
        marginBottom: 70
    },
    body2Content: {
        flexDirection: 'row'
    },
    body2Icon: {
        marginLeft: 15,
        marginRight: 15,
        marginTop: 25,
        marginBottom: 10,
        color: "#000",
        fontSize: 20
    },
    body2Text: {
        marginTop: 25,
        color: "#000",
        fontSize: 15,
        flex: 1
    },
    TextInput2: {
        margin: 10,
        fontSize: 15,
        textAlign: "right"
    }
})

export default (styles)