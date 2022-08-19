import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

const Portfolio = () => {
    return (
        <View style={{ top: 45, paddingHorizontal: 220 }}>
            <Text style={styles.title}>Some Recent Projects</Text>
            <View
                style={{
                    flexDirection: "row",
                    marginTop: 60,
                }}
            >
                <Image
                    source={require("../../assets/1.png")}
                    style={{ width: 500, height: 400 }}
                />
                <View
                    style={{
                        justifyContent: "flex-start",
                        top: 50,
                        left: 30,
                    }}
                >
                    <Text
                        style={{
                            fontWeight: "700",
                            fontSize: 20,
                            marginBottom: 20,
                        }}
                    >
                        Drag & Drop Building
                    </Text>
                    <Text style={{ width: "40%" }}>
                        Add, delete and move elements around on the front end of
                        your website. No coding and no confusing back end
                        options
                    </Text>
                </View>
            </View>
            <View
                style={{
                    flexDirection: "row",
                    marginTop: 60,
                }}
            >
                <Image
                    source={require("../../assets/2.png")}
                    style={{ width: 500, height: 400 }}
                />
            </View>
        </View>
    );
};

export default Portfolio;

const styles = StyleSheet.create({
    title: {
        fontSize: 30,
        fontWeight: "500",
        alignSelf: "center",
    },
    t: {
        paddingHorizontal: 20,
        justifyContent: "flex-start",
    },
});
