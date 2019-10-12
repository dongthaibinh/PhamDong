import React, {Component} from 'react';
import {
  StyleSheet,
  ImageBackground,
  ScrollView,
  TextInput,
  Button,
  Image,
  Alert,
  View,
  Text,
  TouchableHighlight,
} from 'react-native';
export default class App extends Component
{
  
 render()
 {  
   return(
    
     <View style={{flex:1,alignItems:"center",justifyContent:"center",marginTop:180}}>
        <View style={{}}><Image style={{width:80, height:80, borderRadius:55 }}/></View>
        <View style={{alignItems:"center",justifyContent:"center"}}>
          <Text style={{marginLeft:150, fontSize:20, fontWeight:"bold",color:"orange"}}>Somethings</Text>
          <Text style={{fontWeight:"bold",fontSize:20}}>Email</Text>
          <TextInput placeholder="email" style={{width:350, height:60, borderColor:'#B0AD8E', borderWidth:1, margin:5, borderRadius:5,backgroundColor:'white'}}
        onChangeText={values =>{this.setState({username:values});}}/>
          <Text style={{fontWeight:"bold",fontSize:20}}>Password</Text>
          <TextInput placeholder="password" style={{width:350, height:60, borderColor:'#B0AD8E', borderWidth:1, margin:5,borderRadius:5,backgroundColor:'white'}}
          onChangeText={values=>{this.setState({password:values});}}/>
          <Button color="red" style={{width:350,height:60,borderWidth:1, margin:5,borderRadius:5,}} title='LOGIN' onPress={this.getInput}/>
        </View>
    </View>
   )
 }
 getInput = e => {
   this.state._username.push(this.state.username.toString());
   this.state._password.push(this.state.password.toString());
   let username;
   let password;
   this.state._username.length>0?this.state._username.map(item => username = item ): null
   this.state._password.length>0?this.state._password.map(item => password = item):null
   this.checkInput(username,password);
 };
 checkInput(username,password)
  {
    if(username == '')
Alert.alert("Không để trống");
    if(password=='')
      return Alert.alert("Mat khau không để trống");
    if(username=='dvs' && password=='dvs')
      {
        Alert.alert("Đăng nhập thành công");
      }
      else
      {
        Alert.alert(username,password);
        this.setState._username = [];
        this.setState._password = [];
      }
  }
  state ={ _username:[], _password:[], showN: false, username:"", password:""};
}