import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { articlePropTypes } from "../../types";
import { getThumbnailFallback } from "../../utils/getThumbnailFallback";
import DateContainer, { renderPlayIcon } from "../DateContainer";
import theme from "../../theme";

const HorizontalTimeAgoCard = ({ article, style, darkMode = false }) => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      paddingTop: 12,
      paddingBottom: 20,
      marginHorizontal: 20,
      borderBottomWidth: 0.25,
      borderStyle: "solid",
      borderBottomColor: theme.colors.silver,
    },
    title: {
      paddingTop: 25,
      paddingLeft: 16,
      flexShrink: 1,
      width: "100%",
    },
    titleText: {
      paddingTop: 6.8,
      fontFamily: "Graphik-Medium",
      alignContent: "center",
      fontWeight: "500",
      fontSize: 16,
      lineHeight: 22,
    },
    darkMode: {
      color: "white",
    },
  });

  return (
    <View style={{...styles.container, ...style}}>
      <View>
        <DateContainer
          isMoreStories
          dontShowIcon
          publicAt={article?.public_at}
          duration={article?.videoFile?.duration}
        />
        <Image
          style={{ height: 90, width: 130 }}
          source={{
            uri: article?.thumbnails?.medium || getThumbnailFallback(false),
          }}
        />
        {renderPlayIcon({ isMoreStories: true, duration: article?.videoFile?.duration })}
      </View>
      <View style={styles.title}>
        <Text style={[styles.titleText, darkMode && styles.darkMode]}>
          {article?.title}
        </Text>
      </View>
    </View>
  );
};

export const HorizontalTimeAgoCardPropTypes = {
  ...articlePropTypes,
};
HorizontalTimeAgoCard.propTypes = HorizontalTimeAgoCardPropTypes;

export default HorizontalTimeAgoCard;
