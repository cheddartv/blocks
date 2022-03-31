import { StyleSheet, Text, View } from "react-native"
import moment from "moment"
import Icon from "./Icon"
import theme from "../theme"

export default ({ duration }) => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      top: 9,
      right: 9,
      width: 54,
      height: 22,
      backgroundColor: theme.colors.citrine,
      borderRadius: 25
    },
    duration: {
      fontSize: 11,
      marginLeft: 2,
      fontWeight: '600'
    }
  })
  return (
    <View style={styles.container}>
      <Icon name="play" size={13}/>
      <Text style={styles.duration}>
        {moment.duration(duration, 'seconds').format()}
      </Text>
    </View>
  )
}