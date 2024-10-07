import React from 'react'
// Only import react-native-gesture-handler on native platforms
import 'react-native-gesture-handler';
import { Navigator } from './src/navigator/Navigator';



export const App = () => {
  return (
    <Navigator />
  )
}
export default App;
