import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import DraggableFlatList, {
  ScaleDecorator,
} from 'react-native-draggable-flatlist';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {updateAllEmploy} from '../Redux/Slice/employSlice';
const ShowEmploy = ({navigation}) => {
  let datass = useSelector(state => state.employ.employ);
  dispatch = useDispatch();
  const renderItem = ({item, drag, isActive}) => {
    return (
      <ScaleDecorator>
        <TouchableOpacity
          onLongPress={drag}
          disabled={isActive}
          style={{
            backgroundColor: isActive ? 'gray' : 'rgb(0, 152, 247)',
            borderRadius: 10,
            margin: 10,
            alignItems: 'center',
            padding: 4,
          }}>
          <View style={{elevation:20, backgroundColor:'black'}}>

          <Image
            source={{uri: item.image}}
            style={{width: 200, height: 150,
            }}
            />
            </View>
          <Text style={styles.textshow}>
            {`First Name : ${item.firstname}`}
          </Text>
          <Text style={styles.textshow}>{`Last Name : ${item.lastName}`}</Text>
          <Text style={styles.textshow}>{`Email : ${item.email}`}</Text>
          <Text style={styles.textshow}>
            {`Phone Number : ${item.phonenumber}`}
          </Text>
          <Text style={styles.textshow}>{`Employe Type : ${item.employ}`}</Text>
          <Text style={styles.textshow}>
            {`Department Type : ${item.department_select}`}
          </Text>
        </TouchableOpacity>
      </ScaleDecorator>
    );
  };
 
  const onDragEnd = ({data: newData, from, to}) => {
    const newArray = [...datass]; // create a copy of the array
    const temp = newArray[from];
    newArray[from] = newArray[to];
    newArray[to] = temp;
    dispatch(updateAllEmploy(newArray));
  };

  return (
    <View>
      <TouchableOpacity
        onPress={() => navigation.navigate('AddEmploy')}
        style={{
          backgroundColor: 'gray',
          padding: 10,
          alignItems: 'center',
          margin: 20,
          borderRadius: 12,
        }}>
        <Text style={{color: '#fff'}}>Add Employ</Text>
      </TouchableOpacity>
      {datass?.length === 0 || !datass?.every(item => item.id) ? (
        <Text
          style={{
            color: '#000',
            textAlign: 'center',
            textAlignVertical: 'center',
            justifyContent: 'center',
            fontSize: 20,
          }}>
          No data available
        </Text>
      ) : (
        <DraggableFlatList
          scrollEnabled
          style={{marginBottom: 150}}
          data={datass}
          onDragEnd={onDragEnd}
          keyExtractor={item => item.id}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

export default ShowEmploy;

const styles = StyleSheet.create({
  textshow: {color: '#fff', padding: 5, fontSize: 20},
});
