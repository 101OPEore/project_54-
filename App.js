import {Component} from "react"
import{Text,Button,View,Alert} from "react-native"



class RedButton extends Component{

displayAlert = ()=>{
  alert("I am an alert box")
}
message = ()=>{

  Alert.alert("Hi I am a message")
}
  render(){
    return(
    <View>
    <Button title = "click" color = "red" onPress = {this.displayAlert}> </Button>
    <Button title = "click" color = "orange" onPress = {this.message}> </Button>
    <Button title = "click" color = {this.props.color}> </Button>

    </View>


    )
  }
}
export default class App extends Component{

render(){
  return(
    <View>
    <Text style = {{color:"black",fontSize:30}}> Hello </Text>
    <RedButton color = "yellow"/>
    </View>
  )
}


}