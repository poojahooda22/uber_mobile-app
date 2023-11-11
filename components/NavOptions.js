import { FlatList, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import tw from 'twrnc'
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

const data = [
    { 
        id: "123",
        title: "Get a ride",
        image: "https://links.papareact.com/3pn",
        screen: "MapScreen",
    },
    { 
        id: "456",
        title: "Order food",
        image: "https://links.papareact.com/28w",
        screen: "EatsScreen",
    },
];


const NavOptions = () => {
    const navigation = useNavigation();
  return (
    <FlatList
        data={data}
        horizontal
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
            <TouchableOpacity 
                onPress={() => navigation.navigate(item.screen)}
                style={tw `p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-40 rounded-4`}>    
               <View>
                    <Image
                        source={{ uri: item.image }}
                        style={{ width: 120, height: 120, resizeMode: 'contain'}}
                    />
                    <Text style={tw `font-semibold mt-2 text-lg`}>{item.title}</Text>
                    <Icon
                        style={tw `p-2 bg-black rounded-full w-10 mt-4`}
                        name="arrowright"
                        color="white"
                        type="antdesign"
                    />
               </View>
            </TouchableOpacity>
        )}
    />
  )
}

export default NavOptions

const styles = StyleSheet.create({})