import { useContext } from 'react'
import { NavigationScreenProp,NavigationRoute, NavigationContext, NavigationParams } from 'react-navigation'


export function useNavigation(){

    return useContext(NavigationContext) as NavigationScreenProp<NavigationRoute, NavigationParams>

}