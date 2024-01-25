import { Pressable, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import TrashSvg from '../assets/trash.svg'
import { useState } from "react";

export function TaskCard({ title, finished, onDelete, onFinish }) {
  return (
    <View style={styles.container}>
      <Pressable 
        style={[styles.selectable, finished ? {
          backgroundColor: '#5E60CE',
          borderColor: '#5E60CE'
        } : undefined]} 
        hitSlop={10}
        onPress={() => onFinish(title)} 
      />

      <Text numberOfLines={2} style={[styles.title, finished ? { 
        textDecorationLine: 'line-through',
        color: '#808080'
        } : undefined]}>{title}</Text>

      <TouchableOpacity style={styles.trash} hitSlop={10} onPress={() => onDelete(title)}>
        <TrashSvg />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { 
    backgroundColor: '#262626', 
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    borderRadius: 6,
    borderWidth: 1,
    borderStyle: 'solid',
    borderColor: '#333333',
    padding: 12
  },
  selectable: {
    borderWidth: 2,
    borderColor: '#4EA8DE',
    padding: 9,
    borderRadius: '50%'
  },
  title: {
    flex: 1,
    color: '#FFF'
  },
  trash: {}
})