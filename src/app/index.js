import { hot } from "react-hot-loader/root";
import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background: lime;
`;

export const App = hot(() => {
  return <Container>Hello World</Container>;
});
