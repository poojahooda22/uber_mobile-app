import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity} from 'react-native'
import React from 'react';
import { useDispatch } from 'react-redux';
import tw from 'twrnc';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from '@env';
import { setDestination } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';
import NavFavourites from '../components/NavFavourites';
import { Icon } from 'react-native-elements';

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

      <View style={tw `flex-row bg-white justify-evenly py-2 mt-4 border-t border-gray-100 `}>
        <TouchableOpacity 
            onPress={() => navigation.navigate('RideOptionsCard')}
            style={tw `flex flex-row justify-between items-center bg-black w-24 px-4 py-3 rounded-full`}>
            <Icon name="car" type="font-awesome" color="white" size={16} />
            <Text style={tw `text-white text-center`}>Rides</Text>
        </TouchableOpacity>

        <TouchableOpacity style={tw `flex flex-row justify-between items-center w-24 px-4 py-3 rounded-full border border-gray-300`}>
            <Icon name="fast-food-outline" type="ionicon" color="black" size={16} />
            <Text style={tw `text-center`}>Eats</Text>
        </TouchableOpacity>
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