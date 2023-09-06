import React from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import { articlePropTypes } from "../../types";
import { getThumbnailFallback } from "../../utils/getThumbnailFallback";
import DateContainer from "../DateContainer";
import theme from "../../theme";

const HorizontalTimeAgoCard = ({ article, darkMode = false }) => {
  const styles = StyleSheet.create({
    container: {
      flexDirection: "row",
      paddingVertical: 12,
      marginHorizontal: 20,
      borderTopWidth: 0.25,
      borderStyle: "solid",
      borderTopColor: theme.colors[darkMode ? "news12Metallic" : "lightBlack"],
    },
    title: {
      paddingTop: 16,
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
    <View style={styles.container}>
      <View>
        <DateContainer
          isMoreStories
          dontShowIcon={!article?.videoFile}
          publicAt={article?.public_at}
          duration={article?.videoFile?.duration}
        />
        <Image
          style={{ height: 90, width: 130 }}
          source={{
            uri: article?.thumbnails?.medium || getThumbnailFallback(false),
          }}
        />
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
