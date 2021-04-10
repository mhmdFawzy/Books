import { Colors, Mixins, Typography } from "_styles";

import { StyleSheet } from "react-native";
const { paddingTop, paddingRight, paddingLeft, paddingBottom } = Mixins.padding(16);
const { marginTop, marginRight, marginLeft, marginBottom } = Mixins.margin(12);
export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-start",
    alignContent: "flex-start",
  },
  homeHeader: {
    flexDirection: "row",
    justifyContent: "flex-end",
    height: 55,
    color: Colors.RED,
    borderBottomColor: Colors.RED,
    borderBottomWidth: 2,
    paddingRight,
    marginTop,
  },
  headline: {
    paddingTop,
    paddingRight,
    paddingLeft,
    height: 45,
    fontSize: Typography.FONT_SIZE_16,
    color: Colors.RED,
  },
  headlineBtn: {
    height: 75,
    alignContent: "center",
    backgroundColor: "transparent",
    marginRight,
    marginTop,
  },
});
