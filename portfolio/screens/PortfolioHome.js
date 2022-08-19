import { StyleSheet, View } from "react-native";
import React, { useState } from "react";
import AboutMe from "./AboutMe";
import Home from "./Home";
import Projects from "./Projects";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

const PortfolioHome = () => {
    const [IsReady, SetIsReady] = useState(false);

    const LoadFonts = async () => {
        await Font.loadAsync({
            ClashDisplay: require("../fonts/ClashDisplay-Variable.ttf"),
            Ginger: require("../fonts/Ginger.ttf"),
            Montserrat: require("../fonts/Montserrat-ExtraBoldItalic.ttf"),
        });
    };

    if (!IsReady) {
        return (
            <AppLoading
                startAsync={LoadFonts}
                onFinish={() => SetIsReady(true)}
                onError={() => {}}
            />
        );
    }
    return (
        <View>
            <Home />
            <AboutMe />
            <Projects />
        </View>
    );
};

export default PortfolioHome;

const styles = StyleSheet.create({});
