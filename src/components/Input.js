import { StyleSheet, TextInput } from "react-native";

export function Input(props) {
  return (
    <TextInput 
      {...props}
      style={[styles.container, props.style]}
      placeholderTextColor="#808080"
    />
  )
}

const styles = StyleSheet.create({
  container: { 
    padding: 16, 
    fontSize: 16,
    borderWidth: 1, 
    borderRadius: 6,
    lineHeight: 22,
    color: '#808080',
    borderStyle: 'solid', 
    borderColor: '#0D0D0D',
    backgroundColor: '#262626',
  }
});