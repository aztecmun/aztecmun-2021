import React from 'react'

export default function Delegate(props) {
  return (
    <>
      <tr>
        <td hidden>{props.key}</td>
        <td>{props.name}</td>
        <td>{props.committee}</td>
        <td>{props.school}</td>
        <td>{props.grade}</td>
        <td>{props.group}</td>
        <td>{props.phone}</td>
        <td>{props.age}</td>
        <td>{props.email}</td>
      </tr>
    </>
  )
}
