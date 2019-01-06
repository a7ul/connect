import React from "react";
import styled from "styled-components";
import { AppBar } from "../../modules/app-bar";
import { AppView } from "../../modules/app-view";

const Container = styled.section`
  display: flex;
`;

export const Home = () => (
  <Container>
    <AppBar />
    <AppView />
  </Container>
);
