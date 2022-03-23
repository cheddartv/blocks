import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { articlePropTypes } from '../../types'
import thumbnail from '../../assets/news12.jpeg'
import DateContainer from '../DateContainer'
import theme from '../../theme'
import PropTypes from 'prop-types'

const HorizontalCard = ({ article, cheddar = false }) => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      paddingVertical: 12,
      marginHorizontal: 20,
      borderTopWidth: 0.25,
      borderStyle: 'solid',
      borderTopColor: theme.colors.lightBlack
    },
    title: {
      paddingLeft: 10,
      flexShrink: 1
    },
    titleText: {
      paddingTop: 6.8,
      fontFamily: 'Graphik-Medium',
      alignContent: 'center',
      fontWeight: '500',
      fontSize: 16,
      lineHeight: 22
    }
  })

  return (
    <View style={styles.container}>
      <View>
        <Image
          style={{ height: 90, width: 90 }}
          source={{
            uri: article?.thumbnails?.medium || thumbnail
          }}
        />
      </View>
      <View style={styles.title}>
        <DateContainer
          dontShowIcon={!article?.videoFile}
          publicAt={article?.public_at}
          cheddar={cheddar}
          duration={article?.videoFile?.duration}
        />
        <Text style={styles.titleText}>{article?.title}</Text>
      </View>
    </View>
  )
}

export const HorizontalCardPropTypes = {
  ...articlePropTypes,
  cheddar: PropTypes.bool
}
HorizontalCard.propTypes = HorizontalCardPropTypes

export default HorizontalCard
