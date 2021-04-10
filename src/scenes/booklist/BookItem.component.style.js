import { Colors, Mixins, Typography } from "_styles";
import { Platform, StyleSheet } from "react-native";

const { paddingTop, paddingRight, paddingLeft, paddingBottom } = Mixins.padding(12);
const { marginTop, marginRight, marginLeft, marginBottom } = Mixins.margin(12);
const { shadowColor, shadowOpacity, shadowOffset, shadowRadius, elevation } = Mixins.boxShadow(Colors.GRAY_DARK, 0.8, {
  height: 6,
  width: 6,
});
export default StyleSheet.create({
  item: {
    paddingTop,
    paddingRight,
    paddingLeft,
    paddingBottom,
    width: "48%",
    marginVertical: 8,
    marginHorizontal: 16,
    shadowColor,
    shadowOffset,
    shadowOpacity,
    shadowRadius,
    elevation,
    borderRadius: 6,
    backgroundColor: Colors.WHITE,
  },
  title: {
    fontSize: Typography.FONT_SIZE_14,
    color: Colors.RED,
    paddingBottom: Platform.os === "ios" ? 0 : paddingBottom,
    includeFontPadding: false,
    textAlignVertical: "center",
  },
  image: { width: "90%", height: 200 },
  description: {
    color: Colors.GRAY_DARK,
    marginBottom,
  },
  infoValue: {
    color: Colors.GRAY_MEDIUM,
  },
});
