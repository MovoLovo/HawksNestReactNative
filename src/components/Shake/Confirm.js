import * as React from 'react';
import { View, Text, Image, StyleSheet, Dimensions, } from "react-native";
import { useRoute, useNavigation } from '@react-navigation/native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

const Confirm  = () => {
  const route = useRoute()
  const nav = useNavigation()
  const item = route.params.item

  const onConfirm = () => {
    // TODO: Add api communication code here
    nav.navigate('Info')
  }

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
        <View style={s.info}>
          <Text style={s.infoText}>
            Disclaimer Notice and Additional Information...
          </Text>
        </View>
        <ActionButton 
          buttonColor='rgba(231,76,60,1)'
          renderIcon={() => <Icon name='checkmark-sharp' style={s.confirmButtonIcon}/>}
          onPress={onConfirm}
        />
        <ActionButton 
          buttonColor='rgba(231,76,60,1)'
          position='left'
          renderIcon={() => <Icon name='close' style={s.confirmButtonIcon}/>}
          onPress={() => nav.goBack()}
        />
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
  },
  info: {
    padding: 30,
  },
  infoText: {
    fontSize: Dimensions.get("window").width * .07,
    textAlign: 'center'
  },
  confirmButtonIcon: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: Dimensions.get("window").width * .065, 
  }
})

export default Confirm