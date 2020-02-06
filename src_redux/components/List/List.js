import React from 'react'
import ListItem from '../ListItem/ListItem'

const List = props => (
  <>
    {props.items.map((item, index) => {
      return (
        <ListItem
          key={index}
          item={item}
          index={index}
          deleteItem={props.onDelete}
        />
      )
    })}
  </>
)

export default List
