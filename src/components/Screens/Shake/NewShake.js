import * as React from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList, Image, TouchableHighlight } from "react-native";
import { useNavigation } from '@react-navigation/native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';

const NewShake = () => {
  const nav = useNavigation()
  const orders = [
    {
      name: 'Bacon Egg and Cheese',
      variant: ['sandwich'],
      price: 4.99,
      img: require('../../../img/BaconEggCheese.jpg'),
    },
    {
      name: 'Bagel',
      variant: ['sandwich'],
      price: 4.99,
      img: require('../../../img/Bagel.jpg'),
    },
    {
      name: 'Sausage Egg and Cheese',
      variant: ['sandwich'],
      price: 4.99,
      img: require('../../../img/SausageEggCheese.jpg'),
    },
    {
      name: 'Croissant',
      variant: ['sandwich'],
      price: 4.99,
      img: require('../../../img/Croissant.jpg'),
    },
    {
      name: 'English Muffin',
      variant: ['sandwich'],
      price: 4.99,
      img: require('../../../img/BaconEggCheese.jpg'),
    },
  ]

  const renderItem = ({ item }) => {
    return (
      <TouchableHighlight style={s.itemButton} 
        onPress={() => {nav.navigate('Confirm', {item})}}
        underlayColor="#aaa">
        <View style={s.item}>
          <Image style={s.itemImage}
            source={item.img}
          />
          <View style={s.itemTextView}>
            <Text style={s.itemTitle}>{item.name}</Text>
            <Text style={s.itemPrice}>${item.price}</Text>
          </View>
        </View>
      </TouchableHighlight>
    )
  }

  renderItem.propTypes = {
    item: PropTypes.object.isRequired
  }

  return(
    <View style={s.container}>
      <View style={s.header}>
        <Text style={s.headerText}>Order Sandwich</Text>
      </View>
      <View style={s.body}>
        <FlatList
          data={orders}
          renderItem={renderItem}
          keyExtractor={item => item.name}
          ListFooterComponent={<View style={s.footer}/>}
        />
      </View>
      <ActionButton 
        buttonColor='rgba(231,76,60,1)'
        renderIcon={() => <Icon name='chevron-down' style={s.actionButtonIcon}/>}
        onPress={() => nav.goBack()}
      />
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
  },
  actionButtonIcon: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: Dimensions.get("window").width * .065,
  },
  item: {
    flexDirection: 'row',
    padding: 15,
    flex: 1,
  },
  itemImage: {
    width: Dimensions.get("window").width * .35,
    height: Dimensions.get("window").width * .35,
    borderRadius: 15
  },
  itemTextView: {
    flexDirection: 'column',
    padding: 15,
    flex: 1
  },
  itemTitle: {
    fontSize: Dimensions.get("window").width * .09,
    textAlign: 'left'
  },
  itemPrice: {
    textAlign: 'left',
    color: '#555',
    paddingLeft: 4
  },
  footer: {
    height: Dimensions.get("window").width * .2,
  }
})

export default NewShake