import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const Project1 = ({ img }) => {
    return (
        <View style={{ flexDirection: "row", marginTop: 100 }}>
            <Image source={img} style={{ width: 650, height: 450 }} />
            <View style={{ marginTop: 25 }}>
                <Text style={styles.textFont}>Drag & Drop Building</Text>
                <Text style={[styles.textFont, { width: 300 }]}>
                    Add, delete and move elements around on the front end of
                    your website. No coding and no confusing back end options
                </Text>
            </View>
        </View>
    );
};

const Project2 = ({ img }) => {
    return (
        <View style={{ flexDirection: "row", marginTop: 20 }}>
            <View style={{ marginTop: 40, marginRight: 30 }}>
                <Text style={[styles.textFont, { textAlign: "right" }]}>
                    Drag & Drop Building
                </Text>
                <Text
                    style={[
                        styles.textFont,
                        { width: 300, textAlign: "right" },
                    ]}
                >
                    Add, delete and move elements around on the front end of
                    your website. No coding and no confusing back end options
                </Text>
            </View>
            <Image source={img} style={{ width: 470, height: 450 }} />
        </View>
    );
};

const Project3 = ({ img }) => {
    return (
        <View style={{ marginTop: 20 }}>
            <Image source={img} style={{ width: 850, height: 410 }} />
            <View
                style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                }}
            >
                <Text style={[styles.textFont, { textAlign: "right" }]}>
                    Drag & Drop Building
                </Text>
                <Text
                    style={[
                        styles.textFont,
                        { width: 300, textAlign: "right" },
                    ]}
                >
                    Add, delete and move elements around on the front end of
                    your website. No coding and no confusing back end options
                </Text>
            </View>
        </View>
    );
};

const Projects = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Some Recent Projects</Text>
            <Project1 img={require("../assets/img/P1.png")} />
            <Project2 img={require("../assets/img/P2.png")} />
            <Project3 img={require("../assets/img/P3.png")} />
            <Project2 img={require("../assets/img/P4.png")} />
            <Project1 img={require("../assets/img/P5.png")} />
            <Project3 img={require("../assets/img/P6.png")} />
        </View>
    );
};

export default Projects;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        paddingVertical: "4.5%",
        paddingHorizontal: "8%",
        backgroundColor: "#D9D9D9",
    },
    title: {
        fontSize: 30,
        fontFamily: "ClashDisplay",
        fontWeight: "600",
    },
    textFont: {
        fontFamily: "ClashDisplay",
    },
});
