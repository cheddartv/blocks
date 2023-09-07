import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import moment from 'moment'
import Icon from './Icon'

export default ({ isMoreStories, standard, duration, cheddar }) => {
  const showDuration = (cheddar || isMoreStories) && duration 
  const getWidth = () => {
    if (showDuration) return 45

    return standard ? 16 : 12
  }

  const styles = StyleSheet.create({
    playIcon: {
      height: standard ? 16 : 12,
      width: getWidth(),
      flexDirection: 'row',
      justifyContent: showDuration ? 'center' : 'flex-start',
      paddingVertical: standard ? 3 : 1,
      paddingLeft: standard ? 6 : 4.4,
      backgroundColor: '#F0F200',
      borderRadius: 11.52,
    },
    durationText: {
      fontSize: 8,
      marginLeft: 2
    }
  })

  const formatDuration = (duration) => {
    return moment(duration*1000).format('mm:ss')
  }

  return (
    <View style={styles.playIcon}>
      <Icon name="play" size={standard ? 10 : 9} />
      {showDuration && <Text style={styles.durationText}>{formatDuration(duration)}</Text>}
    </View>
  )
}
