import { Colors, Mixins } from "_styles";

import { StyleSheet } from "react-native";

const { paddingTop, paddingRight, paddingLeft, paddingBottom } = Mixins.padding(16);

export default StyleSheet.create({
  headlineBtn: {
    height: 35,
    alignContent: "center",
    justifyContent: "center",
    // marginTop,
    // marginBottom,
    // marginRight,
    backgroundColor: Colors.RED,
    // paddingTop,
    paddingRight,
    paddingLeft,
    // paddingBottom: Platform.os === "ios" ? 0 : paddingBottom,
    includeFontPadding: false,
    textAlignVertical: "center",
    borderRadius: 16,
  },
  headlineBtnText: {
    color: Colors.WHITE,
    textAlign: "center",
    includeFontPadding: false,
    textAlignVertical: "center",
  },
});
