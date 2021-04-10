import { StyleSheet } from "react-native";

export default StyleSheet.create({
  flexOne: { flex: 1 },
  container: { flex: 1, flexDirection: "row", justifyContent: "space-between", margin: 20 },
  iconContainer: {
    alignSelf: "flex-end",
    alignItems: "center",
    backgroundColor: "transparent",
  },
  icon: { color: "#fff", fontSize: 40 },
});
