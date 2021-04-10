import { Text, TouchableOpacity } from "react-native";

import React from "react";
import styles from "./RedBtn.component.style";

function RedBtn({ children, to, onPress }) {
  return (
    <TouchableOpacity
      style={styles.headlineBtn}
      activeOpacity={0.9}
      onPress={() => {
        onPress();
      }}>
      <Text style={styles.headlineBtnText}>{children}</Text>
    </TouchableOpacity>
  );
}

export default RedBtn;
