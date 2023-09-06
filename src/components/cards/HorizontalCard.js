import React from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { articlePropTypes } from '../../types'
import { getThumbnailFallback } from '../../utils/getThumbnailFallback'
import DateContainer from '../DateContainer'
import theme from '../../theme'
import PropTypes from 'prop-types'

const HorizontalCard = ({ article, cheddar = false, darkMode = false }) => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      paddingVertical: 12,
      marginHorizontal: 20,
      borderTopWidth: 0.25,
      borderStyle: 'solid',
      borderTopColor: theme.colors[darkMode ? 'news12Metallic' : 'lightBlack'],
    },
    title: {
      paddingLeft: 10,
      flexShrink: 1,
      width: '100%',
    },
    titleText: {
      paddingTop: 6.8,
      fontFamily: cheddar ? 'Gotham' : 'Graphik-Medium',
      alignContent: 'center',
      fontWeight: '500',
      fontSize: 16,
      lineHeight: 22,
    },
    darkMode: {
      color: 'white',
    },
  })

  return (
    <View style={styles.container}>
      <View>
        <Image
          style={{ height: 90, width: 90 }}
          source={{
            uri: article?.thumbnails?.medium || getThumbnailFallback(cheddar),
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
        <Text style={[styles.titleText, darkMode && styles.darkMode]}>
          {article?.title}
        </Text>
      </View>
    </View>
  )
}

export const HorizontalCardPropTypes = {
  ...articlePropTypes,
  cheddar: PropTypes.bool,
}
HorizontalCard.propTypes = HorizontalCardPropTypes

export default HorizontalCard
