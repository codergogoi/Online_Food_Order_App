import React, { useState, useEffect} from 'react'
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Image } from 'react-native'

interface SearchBarProps{
    onEndEditing?: any | undefined;
    didTouch?: any | undefined;
    autoFocus?: boolean | undefined;
    onTextChange: Function;   
}


const SearchBar: React.FC<SearchBarProps> = ({ onEndEditing, didTouch, autoFocus = false, onTextChange }) => {



return (<View style={styles.container}>
            <View style={styles.searchBar}>
                <Image style={{width: 25, height: 25 }} source={require('../images/search.png')}/>
                <TextInput 
                    style={{  marginLeft: 5, flex: 9, display: 'flex', fontSize: 20, height: 42 }}
                    placeholder={"Search Foods"}
                    autoFocus={autoFocus}
                    onTouchStart={didTouch}
                    onChangeText={(text) => onTextChange(text)}
                    onEndEditing={onEndEditing}
                />
 
            </View>

</View>)}


const styles = StyleSheet.create({
container: { 
    flex: 1, 
     height: 60,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignContent: 'center',
    alignItems: 'center',
    paddingLeft: 20,
    paddingRight: 20
},
searchBar: {
    display: 'flex',
    height: 32,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#ededed',
    alignItems: 'center',
    borderRadius: 20,
    paddingLeft: 10,
    paddingRight: 10,
    borderColor: '#E5E5E5',
    borderWidth: 2
}

})

 export { SearchBar }