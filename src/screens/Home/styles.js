import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        height: '100%',
        width: '100%'
    },
    content: {
        height: "100%",
        width: "100%",
        backgroundColor: '#009999'
    },
    searchContainer: {
        height: 60,
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row",
        marginTop: 30
    },
    searchBox: {
        height: 50,
        width: "80%",
        borderColor: "#FFF",
        borderWidth: 1,
        borderRadius: 15,
        color: "#FFF",
        paddingHorizontal: 15
    },
    btnSearch: {
        marginLeft: "5%",
        height: "35%",
        width: "8%",
        justifyContent: "center",
        alignItems: "center"
    },
    weatherContainer: {
        height: "30%",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "row"
    },
    weatherHoderContainer: {
        height: "80%",
        width: "90%",
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        borderRadius: 15,
        alignItems: "center",
        flexDirection: "row"
    },
    imgWeather: {
        height: "80%",
        width: "50%"
    },
    txtTemp: {
        fontSize: 30,
        color: "#FFF",
        marginLeft: "5%"
    },
    txtCity: {
        fontSize: 20,
        color: "#FFF",
        marginLeft: "5%",
        marginTop: "3%"
    },
    loadingContainer: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute'
    },
    errorContainer: {
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 15,
        alignItems: 'center'
    },
    switchContainer: {
        width: '100%',
        flexDirection: 'row',
        paddingHorizontal: 15,
        alignItems: 'center',
        marginTop: 10
    }

})

export default styles