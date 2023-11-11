import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Map from '../components/Map'
import tw from 'twrnc';

const MapScreen = () => {
  return (
    <View>
      <View
        style={tw `h-1/2`}
      >
        <Map />
      </View>

      <View style={tw `h-1/2`}>

      </View>
    </View>
  )
}

export default MapScreen

const styles = StyleSheet.create({})