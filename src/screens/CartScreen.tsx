import React, { useState, useEffect} from 'react'
import { StyleSheet, View, Text, TouchableOpacity, TextInput, Image } from 'react-native'
import { connect } from 'react-redux'
import { ApplicationState, FoodModel, ShoppingState, onUpdateCart, UserState } from '../redux'

import { ButtonWithIcon, FoodCard, FoodCardInfo, SearchBar } from '../components'
import { FlatList } from 'react-native-gesture-handler'


import { checkExistence, useNavigation } from '../utils'
import { ButtonWithTitle } from '../components/ButtonWithTitle'

interface CartScreenProps{ 
    userReducer: UserState,
    shoppingReducer: ShoppingState,
    onUpdateCart: Function,
 }


const _CartScreen: React.FC<CartScreenProps> = (props) => {

    const { navigate } = useNavigation()
 
    const [totalAmount, setTotalAmount] = useState(0);
 
    const { Cart, user } = props.userReducer;


    useEffect(() => {
        onCalculateAmount()
    },[Cart]);
    

    const onCalculateAmount = () => {

        let total = 0
        if(Array.isArray(Cart)){
            Cart.map(food => {
                total += food.price * food.unit
            })
        }
        
         setTotalAmount(total);
    }

    const onValidateOrder = () => {

        navigate('LoginPage');

    }




    if(Cart.length > 0){

            return (<View style={styles.container}>
                        <View style={styles.navigation}> 
                            <View style={{ display: 'flex', height: 60, justifyContent: 'space-between', flexDirection: 'row', alignItems: 'center', marginLeft: 20, marginRight: 20}}>
                            <Text style={{ fontSize: 30, fontWeight: '500'}}> My Cart</Text>
                            <TouchableOpacity
                            style={{ alignItems: "center" }}
                            onPress={() => {
                                navigate("Order");
                            }}
                            >
                            <Image source={require('../images/orders.png')} style={{  width: 60,
    height: 60,}} />
                            </TouchableOpacity>
                            </View>
                        </View>

                        <View style={styles.body}>

                              <FlatList 
                                showsVerticalScrollIndicator={false}
                                data={Cart}
                                renderItem={({ item}) => <FoodCardInfo item={checkExistence(item, Cart)} onUpdateCart={props.onUpdateCart} /> }
                                keyExtractor={(item) => `${item._id}`}
                            />  
                        
                        </View>
                        <View style={styles.footer}>
                            <View style={styles.amountDetails}>
                                <Text style={{ fontSize: 18 }}> Total</Text>
                                <Text style={{ fontSize: 18, fontWeight: "600" }}>
                                ₹ {totalAmount}
                                </Text>
                            </View>
                            <ButtonWithTitle 
                                height={50}
                                width={320}
                                title="Order Now"
                                onTap={onValidateOrder}
                            />
                        </View>
            </View>)

    }else{

        return <View style={{  flex: 1,display: 'flex', justifyContent: 'center', alignItems: 'center'}}>

                 <Text style={{ fontSize: 30, fontWeight: '700'}}> Your Cart is Empty!!</Text>
            </View>
 
         
    } 
    
 
}


const styles = StyleSheet.create({
container: { flex: 1, backgroundColor: '#F2F2F2'},
navigation: { flex: 1,  marginTop: 43, },
body: { flex: 9, justifyContent: 'center', alignItems: 'center' },
footer: { flex: 2, justifyContent: 'center', paddingLeft: 10, paddingRight: 10 },
amountDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 10,
    margin: 5,
  },
})



const mapStateToProps = (state: ApplicationState) => ({
    shoppingReducer: state.shoppingReducer,
    userReducer: state.userReducer
})


const CartScreen = connect(mapStateToProps, {onUpdateCart})(_CartScreen)

 export { CartScreen }