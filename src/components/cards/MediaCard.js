import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { articlePropTypes } from '../../types'
import thumbnail from '../../assets/news12.jpeg'
import DateContainer from '../DateContainer'

const MediaCard = ({ article }) => {
  const styles = StyleSheet.create({
    container: {
      marginBottom: 10
    },
    image: {
      height: 216
    },
    textCard: {
      paddingVertical: 10,
      paddingHorizontal: 20
    },
    title: {
      fontFamily: 'Graphik-Medium',
      alignContent: 'center',
      fontWeight: '500',
      fontSize: 16,
      lineHeight: 22,
      marginBottom: 10
    }
  })

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: article?.thumbnails?.medium || thumbnail
        }}
      />
      <View style={styles.textCard}>
        <Text style={styles.title}>{article?.title}</Text>
        <DateContainer
          publicAt={article?.public_at}
          dontShowIcon={!article?.videoFile}
        />
      </View>
    </View>
  )
}

export const MediaCardPropTypes = {
  ...articlePropTypes
}
MediaCard.propTypes = MediaCardPropTypes

export default MediaCard
