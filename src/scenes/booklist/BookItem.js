import { Image, Text, View } from "react-native";

import React from "react";
import styles from "./BookItem.component.style";

export const bookItem = ({ item: { info } }) => {
  return (
    <View style={styles.item}>
      <Text style={styles.title} numberOfLines={1}>
        {info.title}:
      </Text>
      <Image
        style={styles.image}
        source={{
          uri: info.imageLinks?.smallThumbnail
            ? info.imageLinks?.smallThumbnail
            : info.imageLinks?.thumbnail
            ? info.imageLinks?.thumbnail
            : "https://bit.ly/31TiwR4",
        }}
      />
      <Text style={styles.description} numberOfLines={2}>
        {info.description ? `${info.description}` : "Description Not Avaliable"}
      </Text>
      <Text style={styles.description} numberOfLines={2}>
        Published Date:
        <Text style={styles.infoValue}>
          {info.publishedDate ? ` ${info.publishedDate}` : " Published Date Not Avaliable"}
        </Text>
      </Text>
      <Text style={styles.description} numberOfLines={3}>
        Authors:
        <Text style={styles.infoValue}>{info.authors ? ` ${info.authors.join(", ")}` : " Authors Not Avaliable"}</Text>
      </Text>
    </View>
  );
};
