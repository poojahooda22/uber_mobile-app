import { StyleSheet, View, SafeAreaView, Image } from 'react-native'
import React from 'react';
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';


const HomeScreen = () => {
  return (
    <SafeAreaView style={tw `bg-white h-full`}>
      <View style={tw `p-5`}>
        <Image
          style={{
            width: 100, 
            height: 100,
            resizeMode: 'contain',
          }}
          source={{
            uri: "https://links.papareact.com/gzs"
          }}
        />

        <GooglePlacesAutocomplete
          placeholder="Search for location"
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            }
          }}
          minLength={2}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: 'en',
          }} 
          nearbyPlacesAPI="GooglePlacesSearch"
          debouce={400}
        />
        <NavOptions />
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
    text: {
        color: 'blue',
    }
})