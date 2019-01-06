import React, { useRef, useEffect } from "react";
import { WebView } from "./components/webview";

const fakeUserAgent =
  "Mozilla/5.0 (Windows NT 6.4) AppleWebKit/537.36.0 (KHTML, like Gecko) Chrome/71.0.0.0 Safari/537.36.0";

export const AppView = () => {
  const wv = useRef();
  useEffect(() => {
    wv.current.openDevTools();
  });
  return (
    <WebView
      webViewRef={wv}
      enableremotemodule="false"
      preload="file:///Users/atul.ramachandran/Projects/personal/connect/public/recipies/whatsapp/preload.js" // TODO
      src="https://web.whatsapp.com"
      useragent={fakeUserAgent}
      allowpopups="true"
      partition="persist:whatsapp"
      webpreferences="nativeWindowOpen"
    />
  );
};
