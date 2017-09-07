import React from "react";
import styled from "styled-components";
import bg from "./header-bk.png";

const Header = styled.header`
  background: url(${bg}) center;
  background-size: cover;
  border-bottom: 1px solid #ccc;
`;

const Content = styled.div`
  margin: auto;
  padding: 20px 16px;
  overflow: auto;
`;

const Title = styled.h1`
  font-weight: 300;
  font-size: 25px;
  text-decoration: none;
  color: #fff;
`;

export default props => (
  <Header role="banner" aria-label="Seek Header" {...props}>
    <Content>
      <Title>SEEK</Title>
    </Content>
  </Header>
);
