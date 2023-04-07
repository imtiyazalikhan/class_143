import React, {Component} from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity} from reactnative
import {Header, Icon, AirbnbRating} from "react-native-elements";
import {RFValue} from "react-native-responess-font"
import axios from "axios"

export default class HomeScreen extends Component{
    constructor(){
        super();
        this.state = {
            movieDetails :{}    
        };
    }

    componentDidMount(){
        this.getMovie();
        
}

timeConvert(num){
   var  hours = Math.floor(num/60);
   var minutes = num % 60;
   return `${hours} hrs ${minutes}mins`;
   
}

getMovie = () => {
    const url = "https://localhost:5000/get-movie";
    axios
    .get(url)
    .then(response=>{
        let details = response.data.data;
        details ["duration"] = this.timeConvert(details.duration);
        this.setState({movieDetails:details});
        })

   .catch(error =>{
    console.log(error.message)
   }); 
};

likedmovie = ()=>{
    const url = "https://localhost:5000/liked-movie";
    axios
    .post(url)
    .then(response =>{
        this.getMovie();
        
    })
    .catch(error =>{
        console.log(error.message)
    });
};

unlilkemovie = () =>{
    const rul = "https://localhost:5000/unliked-movie";
    axios
    .post(url)
    .then(response =>{
        this.getMovie();
    })
    .catch(error =>{
        console.log(error.message)
    });
};
didnotwatched = () =>{
    const url = "https://localhost:5000/did-not-watched";
    axios
    .post(url)
    .then(response=>{
        this.getMovie();
    })
    .catch(error =>{
        console.log(error.message)
    });
};

render(){
    const {movieDetails} = this.state;
if(movieDetails.poster_link){
    const{
        poster_link,
        title,
        release_date,
        overview,
        rating,

} = movieDetails;


return(
    <View style = {Styles.container}>
        <View style = {Styles.headerContainer}>
            <Header
            centerComponent = {{
                Text:"Movie Recommended",
                style: styles.headerTitle
            }}

            rightComponent = {{icon:"search", color:"#fff"}}
            backgroundcolor = {"#d500f9"}
            containerstyle = {{flex:1}}
            />
            </View>

            <View style = {styles.subContainer}>
                <View style = {styles.subTopContainer}>
           </View>

           <View style = {styles.subBottomContainer}></View>
            </View>

        
    </View>
)
}

}
}