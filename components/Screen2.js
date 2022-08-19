import { View, Text } from 'react-native'
import React from 'react'
import UserContext from './UserContext'


const Screen2 = () => {
  const {userValue, setUserValue} = React.useContext(UserContext)
  console.log('Screen 2',userValue.userDetails.User)
  return (
    <View>
      <Text>Screen 2 {'\n'}{userValue.userDetails.User}</Text>
    </View>
  )
}

export default Screen2