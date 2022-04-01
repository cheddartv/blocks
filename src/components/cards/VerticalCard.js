import React from 'react'
import 'moment-duration-format'
import PropTypes from 'prop-types'
import { View, Text, Image, StyleSheet } from 'react-native'
import { cheddarShowPropTypes } from '../../types'
import { DateContainer } from "../../index"
import DurationPill from "../DurationPill"

const VerticalCard = ({ show, cheddar = true }) => {
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
      fontFamily: 'Graphik-Medium',
      fontWeight: '500',
      fontSize: 15,
      lineHeight: 22
    }
  })

  return (
    <View style={styles.cardShadow}>
      <View style={styles.container}>
        <View>
          <Image
            style={styles.image}
            resizeMode="cover"
            source={{
              uri: show.thumbnail.url
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
          <Text numberOfLines={4} ellipsizeMode="tail" style={styles.titleText}>
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
