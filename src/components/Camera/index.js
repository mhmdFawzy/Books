import { TouchableOpacity, View } from "react-native";

import { Camera } from "expo-camera";
import { Entypo } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import React from "react";
import styles from "./Camera.component.style";

function CameraComp(props) {
  const [type, setType] = React.useState(Camera.Constants.Type.back);
  const [isCameraReady, setIsCameraReady] = React.useState(false);
  const cameraRef = React.useRef(null);

  React.useEffect(() => {
    setIsCameraReady(true);
  }, []);
  const onCameraReady = () => {
    setIsCameraReady(true);
  };
  const handleCameraType = () => {
    type === Camera.Constants.Type.back ? setType(Camera.Constants.Type.front) : setType(Camera.Constants.Type.back);
  };

  const takePicture = async () => {
    if (cameraRef.current) {
      let photo = await cameraRef.current.takePictureAsync();
      props.changeImg(photo.uri);
    }
  };
  return (
    <View style={styles.flexOne}>
      {isCameraReady ? (
        <Camera style={styles.flexOne} type={type} ref={cameraRef} onCameraReady={onCameraReady}>
          <View style={styles.container}>
            <TouchableOpacity
              style={styles.iconContainer}
              onPress={() => {
                props.hideCam();
              }}>
              <MaterialIcons name="cancel" style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.iconContainer}
              onPress={() => {
                takePicture();
              }}>
              <Entypo name="circle" style={styles.icon} />
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.iconContainer}
              onPress={() => {
                handleCameraType();
              }}>
              <MaterialIcons name="flip-camera-ios" style={styles.icon} />
            </TouchableOpacity>
          </View>
        </Camera>
      ) : (
        <View></View>
      )}
    </View>
  );
}
export default CameraComp;
