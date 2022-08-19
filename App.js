import * as React from "react";
import { Text, View, StyleSheet } from "react-native";
import Constants from "expo-constants";
import Login from "./components/Login";
import Screen1 from "./components/Screen1";
import Screen2 from "./components/Screen2";
import { UserContext } from "./components/UserContext";
import { loginCheck } from "./components/loginCheck";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Demo from "./scr/screens/Demo";
import Portfolio from "./scr/screens/Portfolio";
import PortfolioHome from "./portfolio/screens/PortfolioHome";

const Stack = createNativeStackNavigator();
const LoginStack = createNativeStackNavigator();
const LoggedInStack = createNativeStackNavigator();

function LoginStackScreen() {
    return (
        <NavigationContainer>
            <LoginStack.Navigator>
                <LoginStack.Screen name="Login" component={Login} />
            </LoginStack.Navigator>
        </NavigationContainer>
    );
}

function LoggedInStackScreen() {
    return (
        <NavigationContainer>
            <LoggedInStack.Navigator>
                <LoggedInStack.Screen name="Screen1" component={Screen1} />
                <LoggedInStack.Screen name="Screen2" component={Screen2} />
            </LoggedInStack.Navigator>
        </NavigationContainer>
    );
}

export default function App() {
    return <PortfolioHome />;
}

// const [userValue, setUserValue] = React.useState(loginCheck);
// console.log(userValue)
// console.log("App1", userValue.isLogged);
// <LoginStackScreen />
// <UserContext.Provider value={{ userValue, setUserValue }}>
//   <>{userValue.isLogged ? <LoginStackScreen /> : <LoggedInStackScreen />}</>
// </UserContext.Provider>
const styles = StyleSheet.create({});
