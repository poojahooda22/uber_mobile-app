import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView, { Marker } from 'react-native-maps';
import tw from 'twrnc';


const Map = () => {
  return (
    <MapView
        style={tw `flex-1`}
        mapType='mutedStandard'
        initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        }}
    >
        {origin?.location && (
            <Marker
                coordinate={
                    {
                        latitude: origin.location.lat,
                        longitude: origin.location.lng,
                    
                    }
                }
            />
        )}
    </MapView>
  )
}

export default Map

const styles = StyleSheet.create({})