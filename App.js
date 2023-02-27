import React, { useEffect, useState } from "react";
import { View, StyleSheet, Text} from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import axios from "axios";

import {
  VictoryChart,
  VictoryLine,
  VictoryArea,
  VictoryAxis,
  VictoryTooltip,
  VictoryVoronoiContainer,
  VictoryZoomContainer,
  VictoryBrushContainer,
} from "victory-native";
import DropdownIntraday from "./DropdownIntraday";

const App = () => {
  const [zoomDomain, setZoomDomain] = useState(null);
  const [selectedDomain, setSelectedDomain] = useState(null);
  const [data, setData] = useState(null)

  const handleZoom = (domain) => {
    setZoomDomain(domain);
  };

  // useEffect(() => {
  //   axios.get("http://192.168.35.181:5000/getAllData")
  //   .then((res)=>{  
  //     console.log("yes" ,res.data.data);
  //       const tempdata = [];
  //       res.data.data.map((item) => {
  //         const dateArray = item.date.split("-");
  //         // console.log(dateArray[0] + "::" + dateArray[1] + "::" + dateArray[2]);
  //         const oneItem = {x: new Date(parseInt(dateArray[0]), parseInt(dateArray[2]), parseInt(dateArray[1])), y: item.ATM_vol}
  //         tempdata.push(oneItem);
  //       })
  //       console.log(tempdata)
  //       setData(tempdata);
  //   }, (err) => {
  //       console.log(err);
  //   })
  // }, [])
  // const data1 = [
  //   { x: new Date(1982, 1, 1), y: 125, l: "hello" },
  //   { x: new Date(1987, 1, 1), y: 257, l: "hello" },
  //   { x: new Date(1993, 1, 1), y: 345, l: "hello" },
  //   { x: new Date(1997, 1, 1), y: 515, l: "hello" },
  //   { x: new Date(2001, 1, 1), y: 132, l: "hello" },
  //   { x: new Date(2005, 1, 1), y: 305, l: "hello" },
  //   { x: new Date(2011, 1, 1), y: 270, l: "hello" },
  //   { x: new Date(2015, 1, 1), y: 470, l: "hello" },
  // ];

  const handleBrush = (domain) => {
    setSelectedDomain(domain);
  };

  return (

    <>
      {
         
    <View style={styles.container}>
      <DropdownIntraday
      />
      
      
      {/* <VictoryChart
        width={375}
        height={250}
        scale={{ x: "time", y: "linear" }}
        containerComponent={
          <VictoryZoomContainer
            responsive={false}
            zoomDimension="x"
            zoomDomain={zoomDomain}
            onZoomDomainChange={handleZoom}
          />
        }
      >
        <VictoryLine
          style={{
            data: { stroke: "rgb(132,194,37)" },
          }}
          data={data}
        />
        <VictoryArea
          data={data}
          style={{
            data: {
              fill: "rgb(132,194,37)",
              fillOpacity: 0.4,
              stroke: "rgb(132,194,37)",
            },
          }}
        />
        <VictoryAxis
          style={{
            axis: { stroke: "white" },
            tickLabels: { fill: "white" },
          }}
        />
        <VictoryAxis
          dependentAxis
          style={{
            axis: { stroke: "white" },
            tickLabels: { fill: "white" },
          }}
        />
      </VictoryChart> */}
    </View>
      }
    
    </>

  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#474545",
    // alignItems: 'center',
    justifyContent: "center",
  },
});
