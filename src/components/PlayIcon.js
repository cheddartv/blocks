import React from 'react'
import { StyleSheet, View } from 'react-native'
import Icon from './Icon'

export default ({ standard }) => {
  const styles = StyleSheet.create({
    playIcon: {
      height: standard ? 16 : 12,
      width: standard ? 16 : 12,
      paddingVertical: standard ? 3 : 1,
      paddingLeft: standard ? 6 : 4.4,
      backgroundColor: '#F0F200',
      borderRadius: 11.52
    }
  })

  return (
    <View style={styles.playIcon}>
      <Icon name="play" size={standard ? 10 : 9} />
    </View>
  )
}
