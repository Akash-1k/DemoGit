import * as Font from "expo-font";

export default customUseFonts = async () =>
    await Font.loadAsync({
        ClashDisplay: require("../fonts/ClashDisplay-Variable.ttf"),
        Ginger: require("../fonts/Ginger.ttf"),
    });
