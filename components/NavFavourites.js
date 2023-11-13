import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native'
import React from 'react'
import tw from 'twrnc';
import { Icon } from 'react-native-elements';


const data = [
    { 
        id: "123",
        icon: "home",
        location: "home",
        destination: "Code Street, Uttam nagar, India",
    },
    { 
        id: "456",
        icon: "briefcase",
        location: "Work",
        destination: "B-68, Gurgaon, Haryana",
    },
];


const NavFavourites = () => {
  return (
    <FlatList 
        data={data}
        keyExtractor={(item) => item.id}
        renderItem={({item: { location, destination, icon }}) =>(
            <TouchableOpacity>
                <Icon
                    style={tw `mr-4 rounded-full bg-gray-300 p-3`}
                    name={icon}
                    type="ionicon"
                    color="white"
                    size={18}
                />
            </TouchableOpacity>
        )}
    >
      
    </FlatList>
  )
}

export default NavFavourites

const styles = StyleSheet.create({})