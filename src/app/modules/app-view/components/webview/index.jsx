import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const WVWrapper = ({ webViewRef, ...props }) => (
  <webview ref={webViewRef} {...props} />
);

WVWrapper.propTypes = {
  webViewRef: PropTypes.any // eslint-disable-line react/forbid-prop-types
};

WVWrapper.defaultProps = {
  webViewRef: React.createRef()
};

export const WebView = styled(WVWrapper)`
  display: flex;
  flex: 1;
`;
