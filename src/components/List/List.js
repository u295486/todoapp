import React from 'react'

const List = props => (
  <tbody>
    {props.items.map((item, index) => {
      return (
        <tr key={index} onClick={() => props.deleteItem(index)}>
          <td>{item}</td>
        </tr>
      )
    })}
  </tbody>
)

export default List
