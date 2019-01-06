import theme from "styled-theming";

export const pallete = {
  primary: theme("mode", { light: "#002c54" }),
  primaryLight: theme("mode", { light: "#395481" }),
  primaryDark: theme("mode", { light: "#00002b" }),
  secondary: theme("mode", { light: "#26c6da" }),
  secondaryLight: theme("mode", { light: "#6ff9ff" }),
  secondaryDark: theme("mode", { light: "#0095a8" }),
  background: theme("mode", { light: "#FFFFFF" }),
  surface: theme("mode", { light: "#EAEAEA" }),
  error: theme("mode", { light: "#B00020" }),
  onPrimary: theme("mode", { light: "#ffffff" }),
  onSecondary: theme("mode", { light: "#000000" }),
  onBackground: theme("mode", { light: "#000000" }),
  onSurface: theme("mode", { light: "#000000" }),
  onError: theme("mode", { light: "#FFFFFF" })
};
