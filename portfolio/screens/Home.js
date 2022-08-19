import {
    Image,
    ImageBackground,
    Pressable,
    StyleSheet,
    Text,
    View,
} from "react-native";
import React, { useEffect, useState } from "react";

const Home = () => {
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
    return (
        <ImageBackground
            source={require("../assets/img/HomeBg.png")}
            style={[
                styles.container,
                {
                    width: windowSize.innerWidth - 17.5,
                    height: windowSize.innerHeight,
                },
            ]}
        >
            <View style={styles.header}>
                <Image
                    source={require("../assets/img/Logo.png")}
                    style={{ width: 80, height: 80 }}
                />
                <Pressable style={styles.button}>
                    <Text style={styles.hire}>Hire Me</Text>
                </Pressable>
            </View>
        </ImageBackground>
    );
};

export default Home;

const styles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        flex: 1,
    },
    container: {
        paddingVertical: "4.5%",
        paddingHorizontal: "5%",
    },
    button: {
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 2,
        borderRadius: 6,
        width: 150,
        height: 40,
        borderColor: "#3A3B42",
    },
    hire: {
        fontFamily: "ClashDisplay",
        fontWeight: "500",
    },
});
