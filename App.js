import React from 'react';
import Loading from "./Loading";
import * as Location from "expo-location";
import { Alert } from 'react-native';
import axios from "axios";
import Weather from "./Weather";

const API_KEY = "764f4e2d06690cdb7e1e0c118ea2b3e8";

export default class extends React.Component {
  state = {
    isLoading : true
  };
  getWeather = async ( latitude, longitude ) => {
    const { data : {
      main : { temp },
      weather,
      name
      }
    } = await axios.get(
      `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
      );
      this.setState({ 
        isLoading: false,
        condition: weather[0].main,
        //temp: data.main.temp
        temp,
        name: name
       });
  };  

  getLocation = async () => {
    try{
      await Location.requestPermissionsAsync();//permission 요청, promise 리턴
      const {
        coords : {latitude,longitude }
      } = await Location.getCurrentPositionAsync();
      this.getWeather(latitude, longitude);
    } catch(error){
      Alert.alert("Can't find you", "so saddddd:(");
    }
  };

  componentDidMount(){
    this.getLocation();
  }
  render(){
    const { isLoading, temp, condition, name } = this.state;
    return isLoading ? <Loading /> : <Weather temp={ Math.round(temp)} name={name} condition={condition} />;
  }
}