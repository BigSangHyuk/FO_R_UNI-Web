import React from 'react';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icons from 'react-native-vector-icons/MaterialIcons';
import CalendarComponent from '../pages/calendar';
import Mypage from '../pages/mypage';
import Setting from '../pages/setting';

const Tab = createBottomTabNavigator();

function Navigation() {
    return (
        <NavigationContainer
            theme={{
                ...DefaultTheme,
                colors: {
                    ...DefaultTheme.colors,
                    background: 'white',
                },
            }}
        >
            <Tab.Navigator initialRouteName="Setting">
                <Tab.Screen
                    name="Mypage"
                    component={Mypage}
                    options={{
                        title: '내 정보',
                        headerShown: false,
                        tabBarIcon: ({ color, size }) => <Icons name="account-circle" color={color} size={size} />,
                    }}
                />
                <Tab.Screen
                    name="Calendar"
                    component={CalendarComponent}
                    options={{
                        title: '달력',
                        headerShown: false,
                        tabBarIcon: ({ color, size }) => <Icons name="calendar-month" color={color} size={size} />,
                    }}
                />
                <Tab.Screen
                    name="Setting"
                    component={Setting}
                    options={{
                        title: '설정',
                        headerShown: false,
                        tabBarIcon: ({ color, size }) => <Icons name="settings" color={color} size={size} />,
                    }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}

export default Navigation;
