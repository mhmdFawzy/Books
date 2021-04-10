import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

import { Controller } from "react-hook-form";
import React from "react";

const InputField = ({
  control,
  type,
  viewStyle,
  fieldLabel,
  inputStyle,
  rules = {},
  name,
  imgStyle,
  image,
  date,
  headlineBtn,
  modalAppear,
}) => {
  return (
    <View style={viewStyle}>
      <Text>{type !== "img" && `${fieldLabel}:`}</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) =>
          type === "img" ? (
            <TouchableOpacity style={headlineBtn} activeOpacity={0.9} onPress={modalAppear}>
              <Image style={imgStyle} source={{ uri: image ? image : "https://bit.ly/3rYTPxl" }} />
            </TouchableOpacity>
          ) : (
            <TextInput
              style={inputStyle}
              onBlur={onBlur}
              onChangeText={value => {
                if (date) {
                  if (value.length === 4 || value.length === 7) {
                    value = `${value}/`;
                  } else if (value.length === 11) {
                    return;
                  }
                  onChange(value);
                } else {
                  onChange(value);
                }
              }}
              keyboardType={date ? "numeric" : "default"}
              value={value}
            />
          )
        }
        name={name}
        id={name}
        rules={rules}
      />
    </View>
  );
};

export default InputField;
