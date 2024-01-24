import { StyleSheet, View } from "react-native";

import TodoLogoSvg from '../assets/todo-logo.svg'

export function Header() {
  return (
    <View style={styles.container}>
      <TodoLogoSvg style={styles["logo-icon"]} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { 
    height: '100%', 
    maxHeight: '21.31%', 
    backgroundColor: '#0D0D0D', 
    alignItems: 'center',
    justifyContent: 'center'
  },
  'logo-icon': { width: 110, aspectRatio: 3.4481 }
});