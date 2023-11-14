import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Map from '../components/Map'
import tw from 'twrnc';
import MapView from 'react-native-maps';
import NavigateCard from '../components/NavigateCard';
import RideOptionsCard from '../components/RideOptionsCard';
import { createStackNavigator } from '@react-navigation/stack';
import { Icon } from 'react-native-elements';

const MapScreen = () => {
  const Stack = createStackNavigator();


  return (
    <View>

      <TouchableOpacity style={tw `bg-gray-200 absolute top-12 left-4 z-50 p-3 rounded-full shadow-lg`}>
        <Icon name="menu" />
      </TouchableOpacity>
      <View
        style={tw `h-1/2`}
      >
        <Map />
      </View>

      <View style={tw `h-1/2`}>
        <Stack.Navigator>
          <Stack.Screen
            name="NavigateCard"
            component={NavigateCard}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name="RideOptionsCard"
            component={RideOptionsCard}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </View>
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({})