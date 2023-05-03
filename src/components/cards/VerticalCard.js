import React from 'react'
import 'moment-duration-format'
import PropTypes from 'prop-types'
import { View, Text, Image, StyleSheet } from 'react-native'
import { cheddarShowPropTypes } from '../../types'
import { getThumbnailFallback } from '../../utils/getThumbnailFallback'
import DateContainer from "../DateContainer"
import DurationPill from "../DurationPill"

const VerticalCard = ({show, cheddar = true, darkMode = false}) => {
  const styles = StyleSheet.create({
    cardShadow: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62
    },
    container: {
      backgroundColor: 'white',
      margin: 15,
      width: 160,
      height: 230,
      elevation: 4
    },
    image: {
      height: 100
    },
    title: {
      paddingTop: 6.8,
      justifyContent: 'center',
      alignItems: 'center'
    },
    titleText: {
      textAlign: 'center',
      marginHorizontal: 15,
      fontFamily: cheddar ? 'Gotham' : 'Graphik-Medium',
      fontWeight: '500',
      fontSize: 15,
      lineHeight: 22
    },
    darkModeText: {
      color: 'white'
    },
    darkModeContainer: {
      backgroundColor: 'black'
    },
    darkModeShadow: {
      shadowColor: 'white',
      shadowOffset: {
        width: 0,
        height: 2
      },
      shadowOpacity: 0.3,
      shadowRadius: 2.62
    }
  })

  return (
    <View style={darkMode ? styles.darkModeShadow : styles.cardShadow}>
      <View style={[styles.container, darkMode && styles.darkModeContainer]}>
        <View>
          <Image
            style={styles.image}
            resizeMode="cover"
            source={{
              uri: show.thumbnail || getThumbnailFallback(cheddar)
            }}
          />
          {show.videoFile && (
            <DurationPill
              standard={true}
              duration={show?.videoFile?.duration}
            />
          )}
        </View>
        <View style={styles.title}>
          <DateContainer
            dontShowIcon={true}
            publicAt={show?.publishedAt}
            cheddar={cheddar}
          />
          <Text numberOfLines={4} ellipsizeMode="tail" style={[styles.titleText, darkMode && styles.darkModeText]}>
            {show?.title}
          </Text>
        </View>
      </View>
    </View>
  )
}

export const VerticalCardPropTypes = {
  ...cheddarShowPropTypes,
  cheddar: PropTypes.bool
}
VerticalCard.propTypes = VerticalCardPropTypes

export default VerticalCard
