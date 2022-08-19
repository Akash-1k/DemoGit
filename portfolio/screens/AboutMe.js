import {
    StyleSheet,
    Text,
    View,
    Image,
    ImageBackground,
    Dimensions,
    Platform,
    PixelRatio,
} from "react-native";
import React, { useEffect, useState } from "react";
import { useFonts } from "expo-font";
import Hand from "../assets/svg/waving-hand.svg";

const AboutMe = () => {
    const [windowSize, setWindowSize] = useState(getWindowSize());
    function getWindowSize() {
        const { innerWidth, innerHeight } = window;
        return { innerWidth, innerHeight };
    }

    useEffect(() => {
        function handleWindowResize() {
            setWindowSize(getWindowSize());
        }
        window.addEventListener("resize", handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        };
    }, []);

    function normalize(size, multiplier = 2) {
        const scale =
            (windowSize.innerWidth / windowSize.innerHeight) * multiplier;
        const newSize = size * scale;
        return Math.round(PixelRatio.roundToNearestPixel(newSize));
    }

    const image = require("../assets/img/aboutMeBg.png");

    return (
        <ImageBackground
            style={[
                styles.aboutMeContainer,
                {
                    width: windowSize.innerWidth - 17.5,
                    height: windowSize.innerHeight,
                },
            ]}
            source={image}
        >
            <Text
                adjustsFontSizeToFit
                style={[
                    styles.aboutMe,
                    {
                        // fontSize: normalize(10),
                        // lineHeight: normalize(20),
                        fontSize:
                            windowSize.innerWidth === 1366 &&
                            windowSize.innerHeight === 657
                                ? normalize(10)
                                : normalize(19),
                        lineHeight:
                            windowSize.innerWidth === 1366 &&
                            windowSize.innerHeight === 657
                                ? normalize(20)
                                : normalize(28.5),
                        lineHeight: windowSize.innerWidth / 17,
                    },
                ]}
            >
                {" "}
                {innerWidth} {innerHeight}
                Hey
                <Image
                    source={require("../assets/img/Hi.png")}
                    style={{
                        height: windowSize.innerWidth / 28,
                        width: windowSize.innerWidth / 30,
                        top: windowSize.innerWidth / 270,
                    }}
                />{" "}
                I’m Rahul, a UIUX Designer based out of Haryana,{" "}
                <Image
                    source={require("../assets/img/Flag.png")}
                    style={{
                        height: windowSize.innerWidth / 32,
                        width: windowSize.innerWidth / 29,
                        top: windowSize.innerWidth / 175,
                    }}
                />{" "}
                India. I am eager to create user experiences that are seamless
                and{" "}
                <Image
                    source={require("../assets/img/Fire.png")}
                    style={{
                        height: windowSize.innerWidth / 28,
                        width: windowSize.innerWidth / 34,
                        top: windowSize.innerWidth / 270,
                    }}
                />{" "}
                impactful. In my past life, I have experience working on B2B and
                B2C products. I designed{" "}
                <Image
                    source={require("../assets/img/Rocket.png")}
                    style={{
                        height: windowSize.innerWidth / 28,
                        width: windowSize.innerWidth / 34,
                        top: windowSize.innerWidth / 270,
                    }}
                />{" "}
                a learning/career based product in various platforms.
            </Text>
        </ImageBackground>
    );
};

export default AboutMe;

const styles = StyleSheet.create({
    aboutMeContainer: {
        backgroundColor: "#DAE9FB",
        paddingVertical: "4.5%",
        paddingHorizontal: "8%",
        justifyContent: "center",
        alignItems: "center",
    },

    aboutMe: {
        textAlign: "center",
        fontFamily: "ginger",
    },
});
