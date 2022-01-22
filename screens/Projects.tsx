import { useState } from "react";
import { ImageBackground, ScrollView } from "react-native";
import {
  Image,
  View,
  Colors,
  Text,
  TextArea,
  TextField,
  Typography,
  FloatingButton,
  DateTimePicker,
  Button,
} from "react-native-ui-lib";
import * as ImagePicker from "expo-image-picker";

const camera = require("../assets/icons/cameraSelected.png");
const stakeholderCover = require("../assets/images/Stakeholders.png");

const options = [
  { label: "JavaScript", value: "js" },
  { label: "Java", value: "java" },
  { label: "Python", value: "python" },
  { label: "C++", value: "c++", disabled: true },
  { label: "Perl", value: "perl" },
];

const INPUT_SPACING = 5;

export default function Projects() {
  const addProject = () => {
    alert("Add Project");
  };

  // The path of the picked image
  const [pickedImagePath, setPickedImagePath] = useState(
    "https://images.pexels.com/photos/6775241/pexels-photo-6775241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  );

  // This function is triggered when the "Select an image" button pressed
  const showImagePicker = async () => {
    // Ask the user for the permission to access the media library
    const permissionResult =
      await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (permissionResult.granted === false) {
      alert("You've refused to allow this appp to access your photos!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync();

    // Explore the result
    console.log(result);

    if (!result.cancelled) {
      setPickedImagePath(result.uri);
      console.log(result.uri);
    }
  };

  return (
    <View flex>
      <ImageBackground
        source={{ uri: pickedImagePath }}
        resizeMode="cover"
        style={{
          height: 150,
          display: "flex",
          flexDirection: "column",
          justifyContent: "flex-end",
        }}
      >
        <Button
          round
          onPress={showImagePicker}
          iconSource={camera}
          iconStyle={{ tintColor: Colors.white }}
          style={{
            width: 40,
            height: 40,
            marginLeft: "auto",
            marginBottom: 50,
            marginRight: 20,
          }}
        />
      </ImageBackground>
      <ScrollView
        keyboardShouldPersistTaps="always"
        style={{
          backgroundColor: "white",
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
          marginTop: -40,
        }}
      >
        <View flex padding-20 paddingB-70>
          <TextField
            text70
            containerStyle={{ marginBottom: INPUT_SPACING }}
            title="Project Name"
            titleStyle={{ fontSize: Typography.text70?.fontSize }}
            placeholder="Ex. ABC Project"
            multiline
            maxLength={150}
            showCharacterCounter
            autoCapitalize="words"
          />
          <TextField
            text70
            containerStyle={{ marginBottom: INPUT_SPACING }}
            title="Budget"
            titleStyle={{ fontSize: Typography.text70?.fontSize }}
            placeholder="$"
          />
          <DateTimePicker
            // @ts-expect-error
            containerStyle={{ marginBottom: INPUT_SPACING }}
            title={"Closing Date"}
            placeholder={"Select a date"}
            // dateFormat={'MMM D, YYYY'}
            // value={new Date('October 13, 2014')}
          />
          <TextField
            text70
            containerStyle={{ marginBottom: INPUT_SPACING }}
            title="Website"
            titleStyle={{ fontSize: Typography.text70?.fontSize }}
            placeholder="Ex. www.john.com"
          />

          <Text grey10 marginB-5>
            Text Area
          </Text>
          <View
            style={{
              height: 150,
              borderWidth: 1,
              marginBottom: 5,
              padding: 10,
              borderColor: Colors.grey60,
            }}
          >
            <TextArea placeholder="Write something.." />
          </View>
        </View>
      </ScrollView>
      <FloatingButton
        visible={true}
        button={{
          label: "Add",
          style: { width: "80%", marginVertical: 20 },
          onPress: addProject,
        }}
      />
    </View>
  );
}
