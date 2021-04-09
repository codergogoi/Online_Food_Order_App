import axios from 'axios'
import { Address } from 'expo-location'
import { Dispatch } from 'react'
import { BASE_URL } from '../../utils'
import { FoodAvailability, FoodModel } from '../models'


//availability Action

export interface AvailabilityAction{
    readonly type: 'ON_AVAILABILITY',
    payload: FoodAvailability
}


export interface FoodSearchAction{
    readonly type: 'ON_FOODS_SEARCH',
    payload: [FoodModel]
}


export interface ShoppingErrorAction{
    readonly type: 'ON_SHOPPING_ERROR',
    payload: any
}



export type ShoppingAction = AvailabilityAction | ShoppingErrorAction | FoodSearchAction 


//Trigger actions from components
export const onAvailability = (postCode: string) => {


 
    return async ( dispatch: Dispatch<ShoppingAction>) => {

        try {

            const response = await axios.get<FoodAvailability>(`${BASE_URL}food/availability/${postCode}`)

 
            if(!response){
                dispatch({
                    type: 'ON_SHOPPING_ERROR',
                    payload: 'Availability error'
                })
            }else{
                // save our location in local storage
                dispatch({
                    type: 'ON_AVAILABILITY',
                    payload: response.data
                })
            }


        } catch (error) {
            dispatch({
                type: 'ON_SHOPPING_ERROR',
                payload: error
            })
        }

    }

}



//Trigger actions from components
export const onSearchFoods = (postCode: string) => {


    return async ( dispatch: Dispatch<ShoppingAction>) => {

        try {

            const response = await axios.get<[FoodModel]>(`${BASE_URL}food/search/${postCode}`)

            console.log(response)

            if(!response){
                dispatch({
                    type: 'ON_SHOPPING_ERROR',
                    payload: 'Availability error'
                })
            }else{
                // save our location in local storage
                dispatch({
                    type: 'ON_FOODS_SEARCH',
                    payload: response.data
                })
            }


        } catch (error) {
            dispatch({
                type: 'ON_SHOPPING_ERROR',
                payload: error
            })
        }

    }

}


