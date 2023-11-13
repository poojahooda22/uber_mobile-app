import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'

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
        renderItem={({item}) =>(
            <TouchableOpacity>

            </TouchableOpacity>
        )}
    >
      
    </FlatList>
  )
}

export default NavFavourites

const styles = StyleSheet.create({})