export const Default = {
  blue: {
    regular: "#2C97D1",
  },
  white: {
    regular: "#FFFFFF",
  },
};

export interface ThemeProps {
  background: string;
  buttonColor: string;
  buttonTextColor: string;
  textColor: string;
}

export interface Theme {
  darkness: ThemeProps;
  light: ThemeProps;
}

export const DataDisplay: Theme = {
  darkness: {
    background: "#2A2A2A",
    buttonColor: "#FFFFFF",
    buttonTextColor: "#2A2A2A",
    textColor: "#FFFFFF",
  },
  light: {
    background: "#FBFE63",
    buttonColor: "#2A2A2A",
    buttonTextColor: "#FBFE63",
    textColor: "#2A2A2A",
  },
};
