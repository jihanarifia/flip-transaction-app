import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {COLORS, ROUTE_NAMES} from '../utils';
import TransactionScreen from '../pages/transaction';
import TransactionDetailScreen from '../pages/transaction-detail';

const screenOptions = {
  cardStyle: {
    backgroundColor: COLORS.BACKGROUN_SCREEN,
  },
  headerTintColor: COLORS.ORANGE,
};

const Stack = createStackNavigator();
function MainStack() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={screenOptions}>
        <Stack.Screen
          name={ROUTE_NAMES.TRANSACTION}
          component={TransactionScreen}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name={ROUTE_NAMES.TRANSACTION_DETAIL}
          component={TransactionDetailScreen}
          options={{headerTitle: props => null}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default MainStack;
