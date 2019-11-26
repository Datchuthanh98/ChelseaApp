//Navigation
import React ,{Component} from 'react';
import { createAppContainer ,createSwitchNavigator} from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

//Componet
import TodoContainer from './containers/TodoContainer';
import  Login from './components/Login';
import  Detail from './components/Detail';
import  Item2 from './components/Item2';
import  Timeline from './components/Timeline';
import  ListWeather from './components/ListWeather';

const TimelineStack = createStackNavigator(
  {
    Feed: {
      screen: Timeline,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: 'Timeline',
          headerLeft: (
            <Icon style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} name="md-menu" size={30} />
          )
        };
      }
    },
    Detail: {
      screen: Detail
    }
  },
  {
    //config
    
  }
);

const TodoStack = createStackNavigator({
  Profile: {
    screen: TodoContainer,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: 'Todo List',
        headerLeft: (
          <Icon style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} name="md-menu" size={30} />
        )
      };
    }
  }
});

const WeatherStack = createStackNavigator({
  Profile: {
    screen: ListWeather,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: 'Weather Page',
        headerLeft: (
          <Icon style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} name="md-menu" size={30} />
        )
      };
    }
  }
});

const Item2Stack = createStackNavigator({
  Profile: {
    screen: Item2,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: 'Item2 Page',
        headerLeft: (
          <Icon style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} name="md-menu" size={30} />
        )
      };
    }
  }
});



const DashboardTabNavigator = createBottomTabNavigator({
  Home: {
    screen: TimelineStack,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-home" color={tintColor} size={24} />
      )
    }
  },
  Todo: {
    screen: TodoStack,
    navigationOptions: {
      tabBarLabel: 'Todo',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-settings" color={tintColor} size={24} />
      )
    }
  },
  Weather: {
    screen: WeatherStack,
    navigationOptions: {
      tabBarLabel: 'Weather',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="ios-partly-sunny" color={tintColor} size={24} />
      )
    }
  },
}, {
    //config
 });


const DashboardStackNavigator = createStackNavigator(
  {
    DashboardTabNavigator: DashboardTabNavigator
  },{
    headerMode:'none'
  }
);

const AppDrawerNavigator = createDrawerNavigator({
  'Home': {
    screen: DashboardStackNavigator
  },
  'Youtube': {
    screen: Item2Stack
  },
});

const AppSwitchNavigator = createSwitchNavigator({
  Login: { screen: Login },
  Dashboard: { screen: AppDrawerNavigator }
});

const Navigation = createAppContainer(AppSwitchNavigator);

export default Navigation;


