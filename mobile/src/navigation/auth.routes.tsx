import { createStackNavigator } from "@react-navigation/stack";
import Login from "../pages/Login/Login";

const Stack = createStackNavigator();

export default function AuthRouter() {
  return (
    <Stack.Navigator
      initialRouteName="Login"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
}
