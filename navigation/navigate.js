import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnBoardingScreen from "../screen/onboarding";
import LoginScreen from "../screen/login";
import RegisterScreen from "../screen/register";
import DashboardScreen from "../screen/dashboard";
import QuizScreen from "../screen/quiz";
import SavedScreen from "../screen/saved";
import ProfileScreen from "../screen/profile";
import QuizEasyScreen from "../screen/quiz/quiz.easy"
import QuizMediumScreen from "../screen/quiz/quiz.medium"
import QuizHardScreen from "../screen/quiz/quiz.hard"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

export default function Nav() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="OnBoarding"
          component={OnBoardingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={RegisterScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="QuizEasy"
          component={QuizEasyScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="QuizMedium"
          component={QuizMediumScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="QuizHard"
          component={QuizHardScreen}
          options={{ headerShown: false }}
        />

        {/* Navbottom */}
        <Stack.Screen
          name="Home"
          component={TabB}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Quiz"
          component={TabB}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Saved"
          component={TabB}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={TabB}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export function TabB() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "Home") {
            iconName = focused ? "home-minus" : "home-minus-outline";
          } else if (route.name === "Quiz") {
            iconName = focused ? "chat-question" : "chat-question-outline";
          } else if (route.name === "Saved") {
            iconName = focused ? "bookmark" : "bookmark-outline";
          } else if (route.name === "Profile") {
            iconName = focused ? "account" : "account-outline";
          }

          return <MaterialCommunityIcons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: "#9C66C6",
        tabBarInactiveTintColor: "#D2CFD5",
      })}
    >
      <Tab.Screen
        name="Home"
        component={DashboardScreen}
        options={{ tabBarLabel: () => null, headerShown: false }}
      />
      <Tab.Screen
        name="Quiz"
        component={QuizScreen}
        options={{ tabBarLabel: () => null, headerShown: false }}
      />
      <Tab.Screen
        name="Saved"
        component={SavedScreen}
        options={{ tabBarLabel: () => null, headerShown: false }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{ tabBarLabel: () => null, headerShown: false }}
      />
    </Tab.Navigator>
  );
}
