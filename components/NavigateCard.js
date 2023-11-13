import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react';
import { useDispatch } from 'react-redux';
import tw from 'twrnc';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { setDestination } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';
import NavFavourites from '../components/NavFavourites';

const NavigateCard = () => {
    const dispatch = useDispatch();
    const navigation = useNavigation();

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw `text-center py-4 text-xl`}>Good Morning, Pooja</Text>
      <View style={tw `border-t border-gray-200 flex-shrink`}>
        <View>
            <GooglePlacesAutocomplete
                placeholder="Where to?"
                styles={toInputBoxStyles}
                fetchDetails={true}
                returnKeyType={"search"}
                minLength={2}
                onPress={(data, details = null) => {
                    dispatch(
                        setDestination({
                            location: details.geometry.location,
                            description: data.description,
                        })
                    );
                    navigation.navigate('RideOptionsCard');
                }}
                query={{
                key: GOOGLE_MAPS_APIKEY,
                language: 'en',
                }}
                nearbyPlacesAPI="GooglePlacesSearch"
                debounce={400}
            />
        </View>
        <NavFavourites />
      </View>

      <View>
        
      </View>
    </SafeAreaView>
  )
}

export default NavigateCard

const toInputBoxStyles = StyleSheet.create({
    container: {
        background: "white",
        paddingTop: 20,
        flex: 0,
    },
    textInput: {
        backgroundColor: "#DDDDDF",
        borderRadius: 8,
        fontSize: 18,
    },
    textInputContainer: {
        paddingHorizontal: 20,
        paddingBottom: 0,
    }
});