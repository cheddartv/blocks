import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import { articlePropTypes } from '../../types'
import DateContainer from '../DateContainer'
import PropTypes from 'prop-types'
import {getThumbnailFallback} from "../../utils/getThumbnailFallback";

const MediaCard = ({ article, cheddar = false, darkMode = false }) => {
  const styles = StyleSheet.create({
    container: {
      marginBottom: 10,
      paddingHorizontal: cheddar ? 20 : 0,
      marginTop: cheddar ? 10 : 0
    },
    image: {
      height: 216
    },
    textCard: {
      paddingVertical: 10,
      paddingHorizontal: cheddar ? 0 : 20
    },
    title: {
      fontFamily: cheddar ? 'Gotham' : 'Graphik-Medium',
      alignContent: 'center',
      fontWeight: '500',
      fontSize: 16,
      lineHeight: 22,
      marginBottom: 10
    },
    darkMode: {
      color: 'white'
    }
  })

  return (
    <View style={styles.container}>
      <Image
        style={styles.image}
        source={{
          uri: article?.thumbnails?.medium || getThumbnailFallback(cheddar)
        }}
      />
      <View style={styles.textCard}>
        {!cheddar && <Text style={styles.title}>{article?.title}</Text>}
        <DateContainer
          publicAt={article?.public_at}
          dontShowIcon={!article?.videoFile}
          cheddar={cheddar}
          media={true}
          duration={article?.videoFile?.duration}
        />
        {cheddar && <Text style={[styles.title, darkMode && styles.darkMode]}>{article?.title}</Text>}
      </View>
    </View>
  )
}

export const MediaCardPropTypes = {
  ...articlePropTypes,
  cheddar: PropTypes.bool
}
MediaCard.propTypes = MediaCardPropTypes

export default MediaCard
