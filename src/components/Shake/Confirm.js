import * as React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, } from "react-native";
import { useRoute } from '@react-navigation/native';


const Confirm  = () => {
  const route = useRoute()
  const item = route.params.item
  return(
    <View style={s.container}>
      <View style={s.header}>
        <Text style={s.headerText}>Confirm Order</Text>
      </View>
      <View style={s.body}>
        <View style={s.item}>
          <Image style={s.itemImg} source={item.img}/>
          <View style={s.itemText}>
            <Text style={s.itemTitle}>{item.name}</Text>
            <Text style={s.itemPrice}>{item.price}</Text>
          </View>
        </View>
        {/*
         1. Add warning text for if the person doesn't pick up the food
         2. Add Cancel and Ok buttons
        */}
      </View>
    </View>
  )
}

const s = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    padding: 15,
    borderBottomColor: 'rgba(231,76,60,1)',
    borderBottomWidth: 4,
  },
  headerText: {
    fontSize: Dimensions.get("window").width * .075,
  },
  body: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.1)',
    alignItems: 'center',
    flexDirection: 'column'
  },
  item: {
    flexDirection: 'row',
    paddingHorizontal: 25,
    paddingVertical: 15,
  },
  itemText: {
    paddingVertical: 15,
    paddingLeft: 10,
    flex: 1
  },
  itemImg: {
    width: Dimensions.get("window").width * .35,
    height: Dimensions.get("window").width * .35,
    borderRadius: 15
  },
  itemTitle: {
    fontSize: Dimensions.get("window").width * .1,
    textAlign: 'right',
  },
  itemPrice: {
    textAlign: 'right',
    color: '#555',
    paddingLeft: 4
  }
})

export default Confirm