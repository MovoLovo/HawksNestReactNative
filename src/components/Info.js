import * as React from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList, LogBox } from "react-native";
import { useNavigation } from '@react-navigation/native';
import ActionButton from 'react-native-action-button';

LogBox.ignoreLogs(['Warning: componentWillReceiveProps has been renamed'])

const Info = () => {
  const nav = useNavigation()
  const [data, setData] = React.useState([])

  const noContent = () => {
    return (
      <View style={s.noContent}>
        <Text style={s.noContentText}>Press the + button to add an order</Text>
      </View>
    )
  }

  return(
    <View style={s.container}>
      <View style={s.header}>
        <Text style={s.headerText}>Hawks Nest Pre-orders</Text>
      </View>
      <View style={s.body}>
        <FlatList style={s.list}
          data={data}
          ListEmptyComponent={noContent}
        />
      </View>
      <ActionButton
        buttonColor='rgba(231,76,60,1)'
        onPress={() => nav.navigate('ShakeScreen')}
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
    borderBottomWidth: 4
  },
  headerText: {
    fontSize: Dimensions.get("window").width * .075,
  },
  body: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.1)'
  },
  list: {

  },
  noContent: {
    padding: 15,
  },
  noContentText: {
    fontSize: Dimensions.get("window").width * .04,
    color: 'rgba(0,0,0,0.6)',
  }
})

export default Info