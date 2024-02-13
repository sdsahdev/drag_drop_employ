import { Alert, Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { Dropdown } from 'react-native-element-dropdown'
import { useDispatch, useSelector } from 'react-redux'
import { addEmploy } from '../Redux/Slice/employSlice'
import { nanoid } from '@reduxjs/toolkit'

const AddEmploy = ({navigation}) => {
    const dispatch = useDispatch()
    const datass = useSelector(state => state.employ.employ)
    const [firstname, setfirstname] = useState('')
    const [lastName, setlastname] = useState('')
    const [email, setEmail] = useState('')
    const [employ, setemploy] = useState('')
    const [ phonenumber, setphonenumber] = useState('')
    const [department_select,setdepartment] = useState('')
    const data = [
        { label: 'Seniour', value: 'Seniour' },
        { label: 'Juniour', value: 'Juniour' },
    ];
    const department = [
        { label: 'Web-Developer', value: 'Web-Developer'},
        { label: 'Designer', value: 'Designer' },
        { label: 'Mobile-Developer', value: 'Mobile-Developer' },
    ];

    const handleAdd = () => {
if(firstname  && lastName  && email && phonenumber && employ && department_select){
        const oneEmploy = {
            id:nanoid(),
            firstname: firstname,
            lastName: lastName,
            email: email,
            phonenumber: phonenumber,
            employ: employ,
            department_select: department_select
        }
        console.log(oneEmploy);
        dispatch(addEmploy(oneEmploy))
        setfirstname('')
        setEmail('')
        setlastname('')
        setphonenumber('')
        setemploy('')
        setdepartment('')
        navigation.navigate("ShowEmploy")
    }else{
        Alert.alert("Please enter your all details")
    }
}
    return (
        <ScrollView style={{ flex:1}}>
            <TouchableOpacity onPress={()=> navigation.navigate("ShowEmploy")}>
            <Image source={require('../Image/back.png')} style={{width:30 , height:30, borderRadius:10 ,  alignSelf:'flex-start', margin:30}}/>
            </TouchableOpacity>
            <View style={{alignItems:'center', justifyContent:'center',flex:1}}>

            <Image source={{uri :'https://picsum.photos/200/300'}} style={{width:200 , height:150, borderRadius:10}}/>
            <TextInput
                style={styles.input}
                onChangeText={(text) => setfirstname(text)}
                value={firstname}
                placeholder="First Name"
            />
            <TextInput
                style={styles.input}
                onChangeText={(text) => setlastname(text)}
                value={lastName}
                placeholder="Last Name"
            />
            <TextInput
                style={styles.input}
                onChangeText={(text) => setEmail(text)}
                value={email}
                placeholder="Email"
            />
            <TextInput
                style={styles.input}
                onChangeText={(text) => setphonenumber(text)}
                keyboardType='phone-pad'
                value={phonenumber}
                placeholder="Phonenumber"
            />
            <Dropdown
                style={styles.input}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={data}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="Employ Type"
                searchPlaceholder="Search..."
                value={employ}
                onChange={item => {
                    setemploy(item.value);
                }}
            />
            <Dropdown
                style={styles.input}
                placeholderStyle={styles.placeholderStyle}
                selectedTextStyle={styles.selectedTextStyle}
                inputSearchStyle={styles.inputSearchStyle}
                iconStyle={styles.iconStyle}
                data={department}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="Department Type"
                searchPlaceholder="Search..."
                value={department_select}
                onChange={item => {
                    setdepartment(item.value);
                }}
            />

            <TouchableOpacity onPress={()=> handleAdd()} style={{backgroundColor:'rgb(33, 124, 244)', padding:10, borderRadius:10, margin:10, width:'30%', alignItems:'center'}}>
                <Text style={{color:'#fff'}}>Add Employ</Text>
            </TouchableOpacity>
            </View>

        </ScrollView>
    )
}

export default AddEmploy

const styles = StyleSheet.create({
    input: {
        height: 40,
        width: 200,
        borderColor: 'rgb(39, 152, 212)',
        borderWidth: 2,
        borderRadius: 4,
        padding: 10,
        justifyContent: 'center',
        alignSelf: 'center',
        margin: 10,
    },


    icon: {
        marginRight: 5,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,

    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
})