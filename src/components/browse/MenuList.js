import React from 'react'
import{View, Text, StyleSheet, Image, ListView} from 'react-native'

export default class MenuList extends React.Component{
    constructor(){
        super()
        const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2})
        this.state = {
            menuDataSource: ds.cloneWithRows(menuItems)
        }
    }
    
}