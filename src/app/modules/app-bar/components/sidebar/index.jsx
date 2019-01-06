import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { pallete } from "../../../../core/styles/colors";

const Container = styled.div`
  width: 60px;
  height: 100vh;
  background: ${pallete.primary};
`;

export const SideBar = ({ children }) => <Container>{children}</Container>;

SideBar.propTypes = {
  children: PropTypes.node
};
SideBar.defaultProps = {
  children: null
};
