import { Pressable, StyleSheet } from "react-native";

import PlusSvg from '../assets/plus.svg'

export function AddButton(props) {
  return (
    <Pressable {...props} style={[styles.container, props.style]}>
      <PlusSvg style={styles.icon} />
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: { 
    padding: 18, 
    flexGrow: 0,
    flexShrink: 1,
    borderRadius: 6, 
    backgroundColor: '#1E6F9F', 
  },
  icon: {  }
})