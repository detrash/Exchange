import React, { Component } from "react";
import styled, { css } from "styled-components";

function Homepagebutton(props) {
  return (
    <Container {...props}>
      <Image2
        src={require("../assets/images/LOGO_DETRASH_BRANCO_TODO_(1).png")}
      ></Image2>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Image2 = styled.img`
  width: 130px;
  height: 100%;
  object-fit: contain;
`;

export default Homepagebutton;
