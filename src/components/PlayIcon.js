import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import moment from 'moment'
import Icon from './Icon'

export default ({ isMoreStories, standard, duration, cheddar }) => {
  const showDuration = (cheddar || isMoreStories) && duration 
  const getWidth = () => {
    if (showDuration) return  isMoreStories ? 55 : 45

    return standard ? 16 : 12
  }

  const styles = StyleSheet.create({
    playIcon: {
      height: isMoreStories ? 20 : standard ? 16 : 12,
      width: getWidth(),
      flexDirection: 'row',
      justifyContent: showDuration ? 'center' : 'flex-start',
      paddingVertical: isMoreStories ? 2 : standard ? 3 : 1,
      paddingLeft: isMoreStories ? 5 : standard ? 6 : 4.4,
      backgroundColor: '#F0F200',
      borderRadius: 11.52
    },
    durationText: {
      fontSize: isMoreStories ? 13 : 8,
      fontWeight: isMoreStories ? '500' : '400',
      marginLeft: 2,
      lineHeight: 15
    }
  })

  const formatDuration = (duration) => {
    return moment(duration*1000).format(isMoreStories? 'm:ss' : 'mm:ss')
  }

  return (
    <View style={styles.playIcon}>
      <Icon name="play" size={isMoreStories? 14 : standard ? 10 : 9} />
      {showDuration && <Text style={styles.durationText}>{formatDuration(duration)}</Text>}
    </View>
  )
}
