import * as ImagePicker from "expo-image-picker";
import * as Permissions from "expo-permissions";

import { ActionSheetIOS, Platform, Pressable, Text, TextInput, View } from "react-native";

import ActionSheet from "react-native-actionsheet";
import { Camera } from "expo-camera";
import CameraComp from "_components/Camera";
import { Colors } from "_styles";
import Constants from "expo-constants";
import InputField from "./InputField";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import RedBtn from "_components/sharedComp/RedBtn";
import { SafeAreaView } from "react-native-safe-area-context";
import bookContext from "_context/bookContext";
import styles from "./AddBook.component.style";
import { useForm } from "react-hook-form";

//uncomment for redux
// import { addBook } from "_redux/actions/books";
// import { useDispatch } from "react-redux";

const addBookComp = ({ navigation }) => {
  const [image, setImage] = React.useState(null);
  const [showCamera, setShowCamera] = React.useState(false);
  const actionSheet = React.useRef(null);
  const BooksContext = React.useContext(bookContext);
  const { addBook } = BooksContext;
  //uncomment for redux
  // const dispatch = useDispatch();

  const showActionSheet = () => {
    actionSheet.current.show();
  };
  const getImageFromRoll = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.cancelled) {
      setImage(result.uri);
    }
  };
  const handleImgCamera = val => {
    setImage(val);
    setShowCamera(false);
  };
  const showImgCamera = () => {
    setShowCamera(false);
  };
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({ mode: "onBlur" });
  const onSubmit = data => {
    //uncomment for redux
    // dispatch(addBook({ ...data, authors: data?.authors?.split(","), imageLinks: { smallThumbnail: image } }));
    addBook({ ...data, authors: data?.authors?.split(","), imageLinks: { smallThumbnail: image } });
    navigation.navigate("Home");
  };
  return (
    <SafeAreaView style={styles.form}>
      {showCamera && (
        <View style={styles.camera}>
          <CameraComp changeImg={handleImgCamera} hideCam={showImgCamera} />
        </View>
      )}
      <ActionSheet
        ref={actionSheet}
        options={[
          <Text>Pick Image from Gallery</Text>,
          <Text>Take Image from camera</Text>,
          <Text color={Colors.RED}>Cancel</Text>,
        ]}
        cancelButtonIndex={2}
        destructiveButtonIndex={1}
        onPress={index => {
          if (index === 0) {
            (async () => {
              if (Platform.OS !== "web") {
                const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
                if (status === "denied") {
                  alert("Sorry, we need camera roll permissions to make this work change from settings please");
                } else {
                  getImageFromRoll();
                }
              }
            })();
          }

          if (index === 1) {
            (async () => {
              const { status } = await Camera.requestPermissionsAsync();
              if (status === "granted") {
                setShowCamera(true);
              } else {
                alert("Persmission is required to upload images");
              }
            })();
          }
        }}
      />
      <View>
        <InputField
          control={control}
          type="img"
          viewStyle={styles.imgGroup}
          fieldLabel="Book Name"
          inputStyle={styles.image}
          name="imageLinks"
          imgStyle={styles.image}
          image={image}
          headlineBtn={styles.headlineBtn}
          modalAppear={() => {
            if (Platform.OS === "ios") {
              ActionSheetIOS.showActionSheetWithOptions(
                {
                  options: ["Cancel", "Pick Image from Gallery", "Take Image from camera"],
                  cancelButtonIndex: 0,
                  userInterfaceStyle: "dark",
                },
                buttonIndex => {
                  if (buttonIndex === 0) {
                    // cancel action
                  } else if (buttonIndex === 1) {
                    (async () => {
                      if (Platform.OS === "ios") {
                        const { status } = await Permissions.getAsync(Permissions.CAMERA_ROLL);

                        if (status === "denied" || status === "undetermined") {
                          alert("Sorry, we need camera roll permissions to make this work change from settings please");
                        } else {
                          getImageFromRoll();
                        }
                      }
                    })();
                  } else if (buttonIndex === 2) {
                    (async () => {
                      const { status } = await Camera.requestPermissionsAsync();
                      if (status === "granted") {
                        setShowCamera(true);
                      } else {
                        alert("Persmission is required to upload images");
                      }
                    })();
                  }
                }
              );
            } else {
              showActionSheet();
            }
          }}
        />
        {errors.imageLinks && <Text style={styles.error}>This Field is required.</Text>}
        <InputField
          control={control}
          type="input"
          viewStyle={styles.inputGroup}
          fieldLabel="Book Name"
          inputStyle={styles.input}
          rules={{ required: true }}
          name="title"
        />
        {errors.title && <Text style={styles.error}>This Field is required.</Text>}
        <InputField
          control={control}
          type="input"
          viewStyle={styles.inputGroup}
          fieldLabel="Book Description"
          inputStyle={styles.input}
          name="description"
        />
        {errors.description && <Text style={styles.error}>This Field is required.</Text>}
        <InputField
          control={control}
          type="input"
          viewStyle={styles.inputGroup}
          fieldLabel="Book Authors"
          inputStyle={styles.input}
          name="authors"
        />
        {errors.authors ? (
          <Text style={styles.error}>This Field is required.</Text>
        ) : (
          <Text style={styles.disclaimer}>Seperate authors by ,</Text>
        )}
        <InputField
          control={control}
          type="input"
          viewStyle={styles.inputGroup}
          fieldLabel="Book Authors"
          inputStyle={styles.input}
          name="publishedDate"
          date={true}
        />
        {errors.publishedDate && <Text style={styles.error}>This Field is required.</Text>}
        <RedBtn to="AddBook" onPress={handleSubmit(onSubmit)}>
          <Text>Add Book</Text> <Ionicons name="add-sharp" size={16} color={Colors.WHITE} />
        </RedBtn>
      </View>
    </SafeAreaView>
  );
};
export default addBookComp;
