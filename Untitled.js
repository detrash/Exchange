import React, { Component } from "react";
import styled, { css } from "styled-components";
import EntypoIcon from "react-native-vector-icons/dist/Entypo";
import IoniconsIcon from "react-native-vector-icons/dist/Ionicons";
import MaterialIconsIcon from "react-native-vector-icons/dist/MaterialIcons";
import MaterialCommunityIconsIcon from "react-native-vector-icons/dist/MaterialCommunityIcons";
import Homepagebutton from "../components/Homepagebutton";
import MaterialButtonDark from "../components/MaterialButtonDark";

function Untitled(props) {
  return (
    <Container>
      <Group2Stack>
        <Group2>
          <EntypoIcon
            name="drop"
            style={{
              color: "rgba(141,219,246,1)",
              fontSize: 178
            }}
          ></EntypoIcon>
          <IconRow>
            <IoniconsIcon
              name="md-globe"
              style={{
                color: "rgba(150,238,151,1)",
                fontSize: 180
              }}
            ></IoniconsIcon>
            <MaterialIconsIcon
              name="attach-money"
              style={{
                color: "rgba(170,234,171,1)",
                fontSize: 200,
                marginLeft: 96,
                marginTop: 89
              }}
            ></MaterialIconsIcon>
          </IconRow>
          <MaterialCommunityIconsIcon
            name="cloud-check"
            style={{
              color: "rgba(170,213,229,1)",
              fontSize: 154,
              marginTop: 50,
              marginLeft: -236
            }}
          ></MaterialCommunityIconsIcon>
        </Group2>
        <Image src={require("../assets/images/1.png")}></Image>
        <Buy>Buy</Buy>
        <And>And take part on cleaning the world.</And>
        <Homepagebutton
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            height: 130,
            width: 130
          }}
        ></Homepagebutton>
      </Group2Stack>
      <MaterialButtonDark
        style={{
          height: 36,
          width: 160,
          marginTop: 276,
          marginLeft: 100
        }}
      ></MaterialButtonDark>
      <Group>
        <Rect>
          <SwapComponent>Swap component (Replace it)</SwapComponent>
        </Rect>
      </Group>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  background-color: rgba(0,160,215,1);
  flex-direction: column;
  height: 100vh;
  width: 100vw;
`;

const Group2 = styled.div`
  top: 18px;
  left: 224px;
  width: 178px;
  height: 194px;
  position: absolute;
  flex-direction: column;
  display: flex;
`;

const IconRow = styled.div`
  height: 289px;
  flex-direction: row;
  display: flex;
  margin-top: 16px;
  margin-left: -246px;
  margin-right: -18px;
`;

const Image = styled.img`
  top: 111px;
  width: 200px;
  height: 200px;
  position: absolute;
  left: 75px;
  object-fit: contain;
`;

const Buy = styled.span`
  font-family: Roboto;
  top: 90px;
  left: 130px;
  position: absolute;
  font-style: normal;
  font-weight: 700;
  color: rgba(0,26,53,1);
  height: 40px;
  width: 90px;
  font-size: 32px;
  text-align: center;
`;

const And = styled.span`
  font-family: Roboto;
  top: 297px;
  left: 75px;
  position: absolute;
  font-style: normal;
  font-weight: 700;
  color: rgba(0,26,53,1);
  height: 40px;
  width: 200px;
  font-size: 32px;
  text-align: center;
`;

const Group2Stack = styled.div`
  width: 402px;
  height: 337px;
  margin-top: 25px;
  margin-left: 5px;
  position: relative;
`;

const Group = styled.div`
  width: 293px;
  height: 136px;
  flex-direction: column;
  display: flex;
  margin-top: -203px;
  margin-left: 33px;
`;

const Rect = styled.div`
  width: 293px;
  height: 136px;
  background-color: #E6E6E6;
  flex-direction: column;
  display: flex;
`;

const SwapComponent = styled.span`
  font-family: Roboto;
  font-style: normal;
  font-weight: 400;
  color: #121212;
  height: 57px;
  width: 232px;
  font-size: 30px;
  text-align: center;
  margin-top: 14px;
  margin-left: 31px;
`;

export default Untitled;
