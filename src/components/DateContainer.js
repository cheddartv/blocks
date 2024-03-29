import React from 'react'
import { Text, View, StyleSheet, Platform } from 'react-native'
import moment from 'moment'
import PropTypes from 'prop-types'
import PlayIcon from './PlayIcon'
import timeAgo from '../utils/timeAgo'
import theme from '../theme'

export const renderPlayIcon = ({
  isMoreStories,
  isArticle,
  isStoryList,
  cheddar,
  duration
}) => {
  const styles = StyleSheet.create({
    icon: {
      marginTop: isMoreStories ? 20 : 0,
      marginLeft: isMoreStories ? 0 : 12,
      justifyContent: 'center',
       ...(isMoreStories && {
        position:'absolute',
        top: 15,
        left: 8,
      })
    },
  })

  return !isArticle || !isStoryList ? (
    <View style={styles.icon}>
      <PlayIcon standard={true} isMoreStories={isMoreStories} cheddar={cheddar} duration={duration} />
    </View>
  ) : null
}

const DateContainer = ({
  publicAt,
  isArticle,
  isStoryList,
  isMoreStories,
  dontShowIcon = false,
  cheddar = false,
  duration,
  media,
  darkMode = false,
}) => {
  const getFontStyle = () => {
    if (isArticle || cheddar || isStoryList || isMoreStories) return 'normal'

    return 'italic'
  }

  const getFontColor = () => {
    if (!isArticle && !isStoryList) return theme.colors.news12Grey

    if (isStoryList || isMoreStories) return theme.colors.news12Metallic

    if (darkMode) return 'white'

    return theme.colors.lightBlack
  }

  const styles = StyleSheet.create({
    dateContainer: {
      flexDirection: isMoreStories ? 'column' : 'row',
      justifyContent: cheddar ? 'space-between' : 'flex-start',
      marginBottom: cheddar && media ? 10 : 0,
    },
    publicAt: {
      fontFamily: cheddar ? 'Gotham' : 'Graphik-MediumItalic',
      color: getFontColor(),
      fontSize: isArticle || isStoryList || isMoreStories ? 15 : 12,
      fontWeight: isArticle || isMoreStories? '500' : isStoryList ? '800' : '400',
      ...(isMoreStories ? { height: 27, lineHeight: 15 } : { lineHeight: 21 }),
      fontStyle: getFontStyle(),
      paddingBottom: isMoreStories ? 12 : isArticle ? 15 : 0,
    },
  })

  const getDateFormat = () => {
    return cheddar || isStoryList ? 'MMMM DD, YYYY' : 'MMMM DD, YYYY h:mm A'
  }

  return (
    <View style={styles.dateContainer}>
      <Text style={styles.publicAt}>
        {isMoreStories
          ? timeAgo(publicAt)
          : moment(publicAt).format(getDateFormat())}
      </Text>
      {!dontShowIcon && renderPlayIcon({ isArticle, isMoreStories, cheddar, duration })}
    </View>
  )
}

export const DateContainerPropTypes = {
  publicAt: PropTypes.string,
  isArticle: PropTypes.bool,
  isStoryList: PropTypes.bool,
  isMoreStories: PropTypes.bool,
  dontShowIcon: PropTypes.bool,
  cheddar: PropTypes.bool,
  duration: PropTypes.number,
  media: PropTypes.bool,
}
DateContainer.propTypes = DateContainerPropTypes

export default DateContainer
