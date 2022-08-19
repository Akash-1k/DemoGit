import { View, Text, TextInput, Button } from 'react-native'
import React, {useEffect, useContext} from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import UserContext from './UserContext'

const Login = ({navigation}) => {
  
  const [user, setUser]= React.useState(null)
  const [password, setPassword]= React.useState(null)

  const {userValue, setUserValue} = useContext(UserContext)
  console.log('login', userValue)
  useEffect(() => {
   getData()
  },[])

  const getData = () => {
    try{
      AsyncStorage.getItem('UserData')
        .then(value => {
          if(value != null){
            navigation.navigate('Screen1')
          }
        })
    }
    catch (error){
      console.log(error)
    }
  }

    const logout = async () => {
    {
      try {
        // await AsyncStorage.removeItem('UserName'); // removes the specific (provided value) value in AsyncStorage
        await AsyncStorage.clear(); // removes all the value in AsyncStorage
        // userValue.isLogged = false
        // userValue.userDeatils = ''
        setUserValue({isLogged: false, userDeatils: ''})
        navigation.navigate('Login');
      } catch (error) {
        console.log(error);
      }
    }
    };
    
  const _loginBtnPress = async () =>{
    console.log('1')
    if (user.length <= 4 || password.length <=6){
      console.log('Enter full name')
    } 
    else {
      try {
        console.log('2')
        const userInfo = {
          User: user,
          Password: password
        }
        console.log('3a')
        setUserValue({isLogged: true, userDetails: userInfo})
        console.log('4')
        await AsyncStorage.setItem('UserData', JSON.stringify(userInfo));
        navigation.navigate('Screen1')
        console.log('5')
      }catch (error){
        console.log(error)
      }
    }
  }
  return (
    <View>
      <Text>Login Screen </Text>
      <TextInput  
        placeholderTextColour='#444'
        placeholder='Phone number, username, or email'
        autoFocus={false}
        onChangeText={setUser}
        value={user}
      />
      <TextInput  
        placeholderTextColour='#444'
        placeholder='Password'
        autoFocus={false}
        onChangeText={setPassword}
        value={password}
      />
      
      <Button title='Submit' onPress={_loginBtnPress}/>
      <Button title="Logout" onPress={logout} />
    </View>
  )
}

export default Login
