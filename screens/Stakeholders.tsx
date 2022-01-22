import { useState } from "react";
import { ScrollView } from "react-native";
import {
  Image,
  View,
  Picker,
  Colors,
  Text,
  TextArea,
  TextField,
  Typography,
  FloatingButton,
} from "react-native-ui-lib";

const dropdown = require("../assets/icons/chevronDown.png");
const stakeholderCover = require("../assets/images/Stakeholders.png");

const options = [
  { label: "ProjectA", value: "ProjectA" },
  { label: "ProjectB", value: "ProjectB" },
  { label: "ProjectC", value: "ProjectC" },
  { label: "ProjectD", value: "ProjectD", disabled: true },
  { label: "ProjectE", value: "ProjectE" },
];

const INPUT_SPACING = 5;

export default function Stakeholders() {
  const [project, setProject] = useState<string>();

  const addStakeholder = () => {
    alert("Add Stakeholder");
  };

  return (
    <View flex>
      <View
        center
        backgroundColor={"#FFFBEE"}
        height={150}
        style={{ position: "relative" }}
      >
        <Image style={{ width: 200, height: 150 }} source={stakeholderCover} />
      </View>
      <ScrollView
        keyboardShouldPersistTaps="always"
        style={{
          backgroundColor: "white",
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
          marginTop: -40,
        }}
      >
        <View flex padding-20 paddingB-40>
          <Picker
            title="Project Funded"
            titleStyle={{ fontSize: Typography.text70?.fontSize }}
            placeholder="Select a project"
            value={project}
            enableModalBlur={false}
            onChange={(item: string) => setProject(item)}
            topBarProps={{ title: "Projects" }}
            rightIconSource={dropdown}
            style={{ color: Colors.red20 }}
            showSearch
            searchPlaceholder={"Search a project"}
            searchStyle={{
              color: Colors.blue30,
              placeholderTextColor: Colors.grey50,
            }}
          >
            {options.map((option) => (
              <Picker.Item
                key={option.value}
                label={option.label}
                value={option.value}
                disabled={option.disabled}
              />
            ))}
          </Picker>
          <TextField
            text70
            containerStyle={{ marginBottom: INPUT_SPACING }}
            title="Amount"
            titleStyle={{ fontSize: Typography.text70?.fontSize }}
            placeholder="$"
          />
          <TextField
            text70
            containerStyle={{ marginBottom: INPUT_SPACING }}
            title="Fullname"
            titleStyle={{ fontSize: Typography.text70?.fontSize }}
            placeholder="Ex. John Doe"
          />
          <TextField
            text70
            containerStyle={{ marginBottom: INPUT_SPACING }}
            title="Email"
            titleStyle={{ fontSize: Typography.text70?.fontSize }}
            placeholder="Ex. john@gmail.com"
          />
          <TextField
            text70
            containerStyle={{ marginBottom: INPUT_SPACING }}
            title="Website"
            titleStyle={{ fontSize: Typography.text70?.fontSize }}
            placeholder="Ex. www.john.com"
          />
        </View>
      </ScrollView>
      <FloatingButton
        visible={true}
        button={{
          label: "Add",
          style: { width: "80%", marginVertical: 20 },
          onPress: addStakeholder,
        }}
      />
    </View>
  );
}
