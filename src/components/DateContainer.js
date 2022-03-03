import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import moment from 'moment'
import PropTypes from 'prop-types'
import PlayIcon from './PlayIcon'
import theme from '../theme'

const renderPlayIcon = isArticle => {
  const styles = StyleSheet.create({
    icon: {
      marginLeft: 12,
      justifyContent: 'center'
    }
  })

  return !isArticle ? (
    <View style={styles.icon}>
      <PlayIcon standard={true} />
    </View>
  ) : null
}

const DateContainer = ({ publicAt, isArticle, dontShowIcon = false }) => {
  const styles = StyleSheet.create({
    dateContainer: {
      flexDirection: 'row'
    },
    publicAt: {
      fontFamily: 'Graphik-MediumItalic',
      color: isArticle ? theme.colors.lightBlack : theme.colors.news12Grey,
      fontSize: isArticle ? 15 : 12,
      fontWeight: isArticle ? '500' : '400',
      lineHeight: 21,
      fontStyle: isArticle ? 'normal' : 'italic',
      paddingBottom: isArticle ? 15 : 0
    }
  })

  return (
    <View style={styles.dateContainer}>
      <Text style={styles.publicAt}>
        {moment(publicAt).format('MMMM DD, YYYY h:mm A')}
      </Text>
      {!dontShowIcon && renderPlayIcon(isArticle)}
    </View>
  )
}

export const DateContainerPropTypes = {
  publicAt: PropTypes.string,
  isArticle: PropTypes.bool,
  dontShowIcon: PropTypes.bool
}
DateContainer.propTypes = DateContainerPropTypes

export default DateContainer
