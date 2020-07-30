import * as React from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList, } from "react-native";
import { useNavigation } from '@react-navigation/native';
import ActionButton from 'react-native-action-button';
import Icon from 'react-native-vector-icons/Ionicons';

const New = () => {
  const nav = useNavigation()
  const [orders, setOrders] = React.useState([

  ])

  return(
    <View style={s.container}>
      <View style={s.header}>
        <Text style={s.headerText}>New Order</Text>
      </View>
      <View style={s.body}>
        <FlatList style={s.list}
          data={orders}
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
  list: {

  },
  actionButtonIcon: {
    color: 'rgba(255, 255, 255, 1)',
    fontSize: Dimensions.get("window").width * .065,
  }
})

export default New