import React, { useEffect, useState } from "react"
import {
    View,
    Text,
    SafeAreaView,
    Image,
    TouchableOpacity,
    TextInput,
    ActivityIndicator,
    Switch
} from "react-native"
import Icon from "react-native-vector-icons/AntDesign"
import styles from "./styles"

const Home = () => {

    // Declare state variables using useState hook

    const [isLoading, setIsLoading] = useState(false);          // to indicate if API request is being processed
    const [temp, setTemp] = useState("");                       // to store temperature data
    const [convertTemp, setConvertTemp] = useState("")         // to store temperature conversion based on switch
    const [inputCity, setInputCity] = useState("London,uk");    // to store user input for city
    const [icon, setIcon] = useState("");                       // to store icon code from weather API
    const [outputCity, setOutPutCity] = useState("");           // to store name of city from weather API
    const [isEnabled, setIsEnabled] = useState(false);          // to toggle between Celsius and Fahrenheit
    const [statusCode, setStatusCode] = useState("200");       // to store status code from API response

    // Declare constants for API key and URL

    const API_KEY = "b42adcd7624d2af30124c771a6f5edc9";
    const API_URL = "https://api.openweathermap.org/data/2.5"

    // useEffect hook to call getWeather function on mount

    useEffect(() => {
        getWeather()
    }, [])

    // useEffect hook to convert temperature based on switch value

    useEffect(() => {
        if (isEnabled) {
            setConvertTemp((temp - 273.15).toFixed(2) + " °C")
        } else {
            setConvertTemp(((temp - 273.15) * 9 / 5 + 32).toFixed(2) + " °F")
        }
    }, [isEnabled])

    // Function to toggle switch state
    const toggleSwitch = () => setIsEnabled(previousState => !previousState);

    // Function to fetch weather data from API
    const getWeather = () => {
        if (inputCity == "") return;
        setIsLoading(true)
        fetch(`${API_URL}/weather?q=${inputCity}&appid=${API_KEY}`)
            .then((response) => response.json())
            .then((json) => {
                if (json.cod == "200") {
                    setTemp((json.main.temp).toFixed(2))
                    setOutPutCity(json.name)
                    setIcon(json.weather[0].icon)
                }
                setStatusCode(json.cod)
            })
            .catch((error) => setStatusCode(500))
            .finally(() => {
                setIsLoading(false)
            });
    }

    // Render UI using components from React Native
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.content}>
                {isLoading &&
                    <View style={styles.loadingContainer}>
                        <ActivityIndicator size="large" color="white" />
                    </View>
                }
                <View style={styles.searchContainer}>
                    <TextInput 
                        placeholder="Search" placeholderTextColor="#FFF" 
                        style={styles.searchBox} 
                        onChangeText={(text) => setInputCity(text)} 
                    />
                    <TouchableOpacity style={styles.btnSearch} onPress={() => getWeather()}>
                        <Icon name="search1" size={24} color="#FFF" />
                    </TouchableOpacity>
                </View>
                {
                    statusCode != 200 &&
                    <View style={styles.errorContainer}>
                        <Text style={{ color: 'red', fontWeight: 'bold' }}>No results for the city or Network error</Text>
                    </View>
                }

                <View style={styles.switchContainer}>
                    <Switch
                        trackColor={{ false: '#767577', true: '#81b0ff' }}
                        thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                        ios_backgroundColor="#3e3e3e"
                        onValueChange={toggleSwitch}
                        value={isEnabled}
                    />
                    <Text style={{ color: 'white' }}>Temperature Type</Text>
                </View>
                <View style={styles.weatherContainer}>
                    <View style={styles.weatherHoderContainer}>
                        <Image 
                            tintColor='#FFF' 
                            source={{ uri: "http://openweathermap.org/img/wn/" + icon + "@2x.png" }} 
                            style={styles.imgWeather} 
                        />
                        <View>
                            <Text style={styles.txtTemp}>{convertTemp}</Text>
                            <Text style={styles.txtCity}>{outputCity} </Text>
                        </View>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Home