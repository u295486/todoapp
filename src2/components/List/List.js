import React from 'react'
import ListItem from '../ListItem/ListItem'

const List = props => (
  <tbody>
    {props.items.map((item, index) => {
      return (
        <ListItem
          key={index}
          item={item}
          index={index}
          deleteItem={props.deleteItem}
        />
      )
    })}
  </tbody>
)

export default List
