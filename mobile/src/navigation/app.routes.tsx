import { createStackNavigator } from "@react-navigation/stack";
import { Tabs } from "../pages/Tabs";

const Stack = createStackNavigator();

export default function AppRouter() {
  return (
    <Stack.Navigator
      initialRouteName="Tabs"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Tabs" component={Tabs} />
    </Stack.Navigator>
  );
}
