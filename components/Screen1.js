import { View, Text, Button } from 'react-native';
import React, { useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserContext from './UserContext';

const Screen1 = ({ navigation }) => {
  // const userDetails = React.useContext(UserContext);
  const {userValue, setUserValue} = React.useContext(UserContext)


  const [user, setUser] = React.useState(null);
  const [password, setPassword] = React.useState(null);

  useEffect(() => {
    getData();
  }, []);

  const logout = async () => {
    {
      try {
        // await AsyncStorage.removeItem('UserName'); // removes the specific (provided value) value in AsyncStorage
        await AsyncStorage.clear(); // removes all the value in AsyncStorage
        setUserValue({isLogged: false, userDeatils: ''})
        navigation.navigate('Login');
      } catch (error) {
        console.log(error);
      }
    }
  };

  const getData = () => {
    try {
      AsyncStorage.getItem('UserData').then((value) => {
        if (value != null) {
          const userInfo = JSON.parse(value);

          setUser(userInfo.User);
          setPassword(userInfo.Password);
        }
      });
    } catch (error) {
      console.log(error);
    }
  };
  console.log('Screen 1',userValue);
  return (
    <View>
      <Text>
        Screen 1  {'\n'}
      </Text>
      <Button title="Logout" onPress={logout} />
      <Button title="Screen 2" onPress={() => navigation.navigate('Screen2')} />
    </View>
  );
};

export default Screen1;
