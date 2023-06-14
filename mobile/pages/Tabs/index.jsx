import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import CustomTabBar from '../../components/CustomBar'
import Home from '../Home/Home'
import Pomodoro from '../Pomodoro/Pomodoro'
import TodoList from '../TodoList/TodoList'

const Tab = createBottomTabNavigator()

export function Tabs(){
    return(
        <Tab.Navigator
        screenOptions={{
            headerShown: false,
            tabBarHideOnKeyboard: true,
            tabBarShowLabel: false,
            tabBarActiveTintColor: '#121212',
            tabBarStyle:{
                borderTopWidth: 0,
                backgroundColor: '#FFF'
            }
        }}tabBar={(props) =>  <CustomTabBar {...props}/>}
        >
            <Tab.Screen name='TodoList' component={TodoList} options={{
            tabBarIcon:'book-outline'
            }}/>
            <Tab.Screen name='Home' component={Home} options={{
            tabBarIcon:'home'
            }}/>
            <Tab.Screen name='Pomodoro' component={Pomodoro} options={{
            tabBarIcon:'clock-outline'
            }}/>
        
        </Tab.Navigator>
    )
}