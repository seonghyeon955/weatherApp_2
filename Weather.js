import React from "react";
import { StyleSheet, View, Text, StatusBar } from "react-native";
import PropTypes from "prop-types";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { LinearGradient} from 'expo-linear-gradient';

const weatherOptions = {
    Thunderstorm :{
        iconName: "weather-lighting",
        gradient: ["#000428", "#004e92"], //왼->오 (위->아래로 그라데이션)
        title: "Outside, lighting strickes horribly😱",
        subTitle: "Don't go outside! If you are outside, avoid under the tree..!"
    },
    Drizzle :{//이슬비
        iconName: "weather-rainy",
        gradient: ["#5B86E5", "#36D1DC"], //왼->오 (위->아래로 그라데이션)
        title: "It rains lightly",
        subTitle: "It would be better to bring an umbrella, right?"
    },
    Rain :{
        iconName: "weather-rainy",
        gradient: ["#000046", "#1CB5E0"], //왼->오 (위->아래로 그라데이션)
        title: "It's rainy day~~~💃",
        subTitle: "Bring your umbrella~~"
    },
    Snow :{
        iconName: "weather-snowy",
        gradient: ["#C9D6FF", "#E2E2E2"], //왼->오 (위->아래로 그라데이션)
        title: "It's snowing!",
        subTitle: "Go goutside and play with Olaf⛄️"
    },
    Atmosphere :{
        iconName: "weather-windy-variant",
        gradient: ["#676C68", "#B9B6B7"], //왼->오 (위->아래로 그라데이션)
        title: "Humm. I recommand do not go outside",
        subTitle: "It's like..the day i miss the sun🥺"
    },
    Clear :{
        iconName: "weather-sunny",
        gradient: ["#2980B9", "#6DD5FA"], //왼->오 (위->아래로 그라데이션)
        title:"IT'S YOUR DAY",
        subtitle: "HAVE A GOOD DAY🥰"
    },
    Clouds :{
        iconName: "weather-cloudy",
        gradient: ["#2c3e50", "#ffffff"], //왼->오 (위->아래로 그라데이션)
        title: "It's soooo cloudy weather!☁️",
        subTitle: "It's not too hot or not too cold,\nperfect for walking"
    },
    Haze :{
        iconName: "weather-fog",
        gradient: ["#59665F", "#DECBA4"], //왼->오 (위->아래로 그라데이션)
        title: "그런데 왜 난 이걸 다 영어로 적고있을까..굳이",
        subTitle: "아주 자연스러웠어"
    },
    Mist :{
        iconName: "weather-fog",
        gradient: ["#141518", "#9AAEC9"], //왼->오 (위->아래로 그라데이션)
        title: "Haze와 Mist. 둘다 안개라고 뜨는데",
        subTitle : "누가 차이 좀 알려줄 사람?🙋‍♀️"
    },
    Dust :{
        iconName: "weather-hail",
        gradient: ["#110608", "#AA905F"], //왼->오 (위->아래로 그라데이션)
        title: "If you have to go outsude, bring your mask☠️",
        subTitle: "THANKS A LOT CHINA"
    }
};

export default function Weather({ temp, condition, name }){ //stateless component인 Weather
    //Text는 temp,온도가 될것이므로 매개변수로 {temp} 넣어주기.
    return (
            <LinearGradient colors={weatherOptions[condition].gradient} style={styles.container}>
            <StatusBar barStyle="light-content" />
                <View style={styles.halfContainer}>
                    <MaterialCommunityIcons
                        size={96}
                        name={weatherOptions[condition].iconName }
                        color="white" />
                    <Text style={styles.temp}>{temp}°C</Text> 
                </View>
                <View style={{...styles.halfContainer, ...styles.textContainer}}>
                    <Text style={styles.si}>{name}</Text>
                    <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                    <Text style={styles.subTitle}>{weatherOptions[condition].subTitle}</Text>
                </View>
            </LinearGradient>
    );
} 

Weather.propTypes = {
    temp :PropTypes.number.isRequried, //온도엔 숫자가 올것이므로.
    condition: PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Atmosphere",
        "Clear",
        "Clouds",
        "Haze",
        "Mist",
        "Dust"
    ]).isRequired
};

const styles = StyleSheet.create({
    container: {
        flex : 1,
        justifyContent: "center",
        alignItems : "center"
    },
    temp : {
        fontSize: 42,
        color: "white"
    },
    halfContainer : {
        flex:1,
        justifyContent: "center", //정렬방향과 동일한방향으로(세로) 가운데 정렬
        alignItems: "center" //정렬방향과 수직방향으로(가로) 가운데 정렬
    },
    title: {
        color: "white",
        fontSize: 44,
        fontWeight: "300",
        marginBottom: 10
    },
    subTitle: {
        color: "white",
        fontWeight: "600",
        fontSize: 24
    },
    textContainer : {
        paddingHorizontal: 20, //가로로 가장자리에 각각 여백주기
        alignItems : "flex-start" 
    },
    si : {
        color: "white",
        fontSize: 23,
        fontWeight: "200"
    }
});