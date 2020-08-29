import * as React from 'react';
import { View, Text, StyleSheet, Dimensions, FlatList, LogBox, Image } from "react-native";
import { useNavigation, useRoute } from '@react-navigation/native';
import ActionButton from 'react-native-action-button';
import PropTypes from 'prop-types';

LogBox.ignoreLogs(['Warning: componentWillReceiveProps has been renamed'])

const Info = () => {
  const nav = useNavigation()
  const route = useRoute()
  const [data, setData] = React.useState([])

  React.useEffect(() => {
    if(route.params?.item){
      setData([...data, route.params.item])
      // TODO: Send order to api
    }
  }, [route.params?.item])

  const noContent = () => {
    return (
      <View style={s.noContent}>
        <Text style={s.noContentText}>Press the + button to add an order</Text>
      </View>
    )
  }

  const renderItem = ({ item }) => {
    // TODO: Finish order list item UI
    // TODO: Replace UI here with component that manages its own network state
    return(
      <View style={s.item}>
        <Image style={s.itemImage}
          source={item.img}
        />
        <View style={s.itemTextView}>
          <Text style={s.itemTitle}>{item.name}</Text>
          <Text style={s.itemPrice}>${item.price}</Text>
        </View>
      </View>
    )
  }

  renderItem.propTypes = {
    item: PropTypes.object.isRequired
  }

  return(
    <View style={s.container}>
      <View style={s.header}>
        <Text style={s.headerText}>Hawks Nest Pre-orders</Text>
      </View>
      <View style={s.body}>
        <FlatList style={s.list}
          data={data}
          keyExtractor={(item, index) => item.name + index}
          renderItem={renderItem}
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
  noContent: {
    padding: 15,
  },
  noContentText: {
    fontSize: Dimensions.get("window").width * .04,
    color: 'rgba(0,0,0,0.6)',
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

})

export default Info