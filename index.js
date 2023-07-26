/**
 * @format
 */
import * as React from 'react';
import {AppRegistry} from 'react-native';
import {MD3LightTheme as DefaultTheme, PaperProvider} from 'react-native-paper';
import {name as appName} from './app.json';
import App from './App';
import {COLORS, SIZES} from './src/constants';

const theme = {
  ...DefaultTheme,

  colors: {
    ...DefaultTheme.colors,
    primary: COLORS.primary,
    outline: COLORS.darkgray,
    // elevation: 10,

    // textInput: COLORS.gray,
  },
  roundness: SIZES.radius,
};

export default function Main() {
  return (
    <PaperProvider theme={theme}>
      <App />
    </PaperProvider>
  );
}
// export default function Main() {
//   return (
//     <PaperProvider>
//       <App />
//     </PaperProvider>
//   );
// }

AppRegistry.registerComponent(appName, () => Main);
