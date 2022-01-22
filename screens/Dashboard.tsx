import { RootTabScreenProps } from "../types";
import { Card, View } from "react-native-ui-lib";

const welcomeImage = require("../assets/images/Charity-Dashboard-1.png");
const moneyImage = require("../assets/images/Charity-Dashboard-2.png");

export default function Dashboard({
  navigation,
}: RootTabScreenProps<"Dashboard">) {
  return (
    <View flex bg-white padding-10>
      <Card
        row
        backgroundColor="#FFFBEE"
        width="100%"
        height={155}
        center
        style={{ marginBottom: 20 }}
      >
        <Card.Section
          content={[
            { text: "Hi,", text40: true },
            { text: "Superwoman", text40: true },
          ]}
          style={{ padding: 20 }}
        />
        <Card.Section
          imageSource={welcomeImage}
          imageStyle={{ width: 123, height: "100%" }}
        />
      </Card>
      <Card
        row
        backgroundColor="#A0D6FF"
        width="100%"
        height={105}
        center
        style={{ marginBottom: 20 }}
      >
        <Card.Section
          padding-20
          content={[
            { text: "Total Money Raised", text50: true },
            { text: "$100.000", text30: true },
          ]}
        />
        <Card.Section
          imageSource={moneyImage}
          imageStyle={{ width: 123, height: "100%" }}
        />
      </Card>
      <View row spread>
        <Card backgroundColor="#D9AF00" width="49%" height={180}>
          <Card.Section
            padding-20
            content={[
              { text: "Projects Funded", text60: true },
              { text: "100", text10BO: true },
            ]}
          />
        </Card>
        <Card backgroundColor="#FFAFB1" width="49%" height={180}>
          <Card.Section
            padding-20
            content={[
              { text: "Stakeholders", text60: true },
              { text: "100", text10BO: true },
            ]}
          />
        </Card>
      </View>
    </View>
  );
}
