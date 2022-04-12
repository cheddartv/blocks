import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import moment from 'moment'
import PropTypes from 'prop-types'
import PlayIcon from './PlayIcon'
import theme from '../theme'

const renderPlayIcon = (isArticle, cheddar, duration) => {
  const styles = StyleSheet.create({
    icon: {
      marginLeft: 12,
      justifyContent: 'center'
    }
  })

  return !isArticle ? (
    <View style={styles.icon}>
      <PlayIcon standard={true} cheddar={cheddar} duration={duration} />
    </View>
  ) : null
}

const DateContainer = ({ 
  publicAt, 
  isArticle, 
  dontShowIcon = false, 
  cheddar = false,
  duration,
  media,
  darkMode = false
}) => {
  const getFontStyle = () => {
    if (isArticle || cheddar) return 'normal'

    return 'italic'
  }

  const getFontColor = () => {
    if (!isArticle) return theme.colors.news12Grey

    if (darkMode) return 'white'

    return theme.colors.lightBlack
  }

  const styles = StyleSheet.create({
    dateContainer: {
      flexDirection: 'row',
      justifyContent: cheddar ? 'space-between': 'flex-start',
      marginBottom: cheddar && media ? 10 : 0
    },
    publicAt: {
      fontFamily: cheddar ? 'Graphik-Medium' : 'Graphik-MediumItalic',
      color: getFontColor(),
      fontSize: isArticle ? 15 : 12,
      fontWeight: isArticle ? '500' : '400',
      lineHeight: 21,
      fontStyle: getFontStyle(),
      paddingBottom: isArticle ? 15 : 0
    }
  })


  const getDateFormat = () => {
    return cheddar ? 'MMMM DD, YYYY' : 'MMMM DD, YYYY h:mm A'
  }

  return (
    <View style={styles.dateContainer}>
      <Text style={styles.publicAt}>
        {moment(publicAt).format(getDateFormat())}
      </Text>
      {!dontShowIcon && renderPlayIcon(isArticle, cheddar, duration)}
    </View>
  )
}

export const DateContainerPropTypes = {
  publicAt: PropTypes.string,
  isArticle: PropTypes.bool,
  dontShowIcon: PropTypes.bool,
  cheddar: PropTypes.bool,
  duration: PropTypes.number,
  media: PropTypes.bool
}
DateContainer.propTypes = DateContainerPropTypes

export default DateContainer
