import { View, Text, Button } from "react-native";
import React, {useState, useEffect} from "react";

// Even No
const checkEven = (ele) => {
  return ele % 2 == 0;
};

const even = () => {
  let arr = [12, 5, 78, 3, 4, 57, 84, 34, 5, 37, 81, 2, 6, 8, 7, 85, 38, 4];
  console.log("OUTPUT : ", arr.filter(checkEven));
};

// Sorting
const sort = () => {
  let arr = [12, 5, 78, 3, 4, 57, 84, 34, 5, 37, 81, 2, 6, 8, 7, 85, 38, 4];
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
  }
  console.log("OUTPUT : ", arr);
};

// Duplicate
const duplicate = () => {
  let arr = [12, 5, 78, 3, 4, 57, 84, 34, 5, 37, 81, 2, 6, 8, 7, 85, 38, 4];
  // console.log("OUTPUT : ", arr.filter());
  let unique = [];
  for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) {
      unique.push(arr[i]);
    }
  }
  console.log("OUTPUT : ", unique);
};

const cam = () => {
  alert("CMAA");
};

const Demo = () => {
  console.log('sdh');
  const [a,setA]=useState();
  
  useEffect(()=>{
    console.log('a')
  },) 
  return (
    <View style={{ top: 50 }}>
      <Text>Demo</Text>
      <Button title="Even" onPress={even} />
      <Button title="Sort" onPress={sort} />
      <Button title="Duplicate" onPress={duplicate} />
      <Button title="CAM" onPress={cam} />
    </View>
  );
};

export default Demo;
