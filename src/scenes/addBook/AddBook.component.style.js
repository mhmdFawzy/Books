import { Colors, Mixins, Typography } from "_styles";
import { Platform, StyleSheet } from "react-native";

const { paddingTop, paddingRight, paddingLeft, paddingBottom } = Mixins.padding(12);
const { marginTop, marginRight, marginLeft, marginBottom } = Mixins.margin(12);
const { shadowColor, shadowOpacity, shadowOffset, shadowRadius, elevation } = Mixins.boxShadow(Colors.GRAY_DARK, 0.25, {
  height: 6,
  width: 6,
});
export default StyleSheet.create({
  form: {
    marginRight,
    marginLeft,
    marginBottom,
    flex: 1,
  },
  imgGroup: { alignItems: "center" },
  image: { width: 100, height: 100, borderRadius: 50, marginBottom },

  inputGroup: { flexDirection: "row", alignItems: "baseline" },
  input: {
    flex: 1,
    marginBottom,
    marginLeft,
    color: Colors.GREY_MEDIUM,
    borderBottomColor: Colors.RED,
    borderBottomWidth: 2,
    marginBottom,
  },
  error: {
    color: Colors.RED,
    alignSelf: "flex-end",
    fontWeight: Typography.FONT_WEIGHT_REGULAR,
    fontSize: Typography.FONT_SIZE_12,
  },
  disclaimer: {
    color: Colors.GREY_MEDIUM,
    alignSelf: "flex-end",
    fontWeight: Typography.FONT_WEIGHT_REGULAR,
    fontSize: Typography.FONT_SIZE_14,
  },
  centeredView: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
    backgroundColor: Colors.RED,
    opacity: 0.9,
    position: "absolute",
    height: "100%",
    width: "100%",
    top: 0,
    left: 0,
  },
  modalViewContainer: {},
  modalView: {
    opacity: 1,
    backgroundColor: "white",
    borderRadius: 20,
    alignSelf: "center",
    alignItems: "center",
    shadowColor,
    shadowOffset,
    shadowOpacity,
    shadowRadius,
    elevation: 5,
    overflow: "hidden",
    paddingBottom,
    paddingRight,
    paddingLeft,
  },
  modalHandler: {
    paddingRight,
    paddingLeft,
    paddingTop,
    marginTop,
    borderBottomColor: Colors.Red,
    borderBottomWidth: 2,
    height: 44,
    justifyContent: "flex-end",
    paddingBottom: Platform.os === "ios" ? 0 : paddingBottom,
    includeFontPadding: false,
    textAlignVertical: "center",
  },
  button: {
    alignSelf: "flex-end",
    borderRadius: 20,
    padding: 10,
  },
  camera: {
    flex: 1,
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: "100%",
    zIndex: 99,
  },
});
