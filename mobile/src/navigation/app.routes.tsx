import { createStackNavigator } from "@react-navigation/stack";
import Home from "../pages/Home/Home";

const Stack = createStackNavigator();

export default function AppRouter() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  );
}
