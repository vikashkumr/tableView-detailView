import React from 'react';


const UserTable = (props) => {
    return (
    <table className="table">
        <thead>
          <tr style={{cursor:'pointer'}}>
            <th scope="col" onClick={() => props.sortBy('first_name')} >First Name</th>
            <th scope="col" onClick={() => props.sortBy('last_name')} >Last Name</th>
            <th scope="col" onClick={() => props.sortBy('company_name')} >Company Name</th>
            <th scope="col" onClick={() => props.sortBy('city')} >City</th>
            <th scope="col" onClick={() => props.sortBy('state')} >State</th>
            <th scope="col" onClick={() => props.sortBy('zip')} >ZIP</th>
            <th scope="col" onClick={() => props.sortBy('email')} >Email</th>
            <th scope="col" onClick={() => props.sortBy('web')} >Web</th>
            <th scope="col" onClick={() => props.sortBy('age')} >Age</th>
          </tr>
        </thead>
        <tbody>
          {
            props.data.map(row => (
              <tr>
                <td>{row.first_name}</td>
                <td>{row.last_name}</td>
                <td>{row.company_name}</td>
                <td>{row.city}</td>
                <td>{row.state}</td>
                <td>{row.zip}</td>
                <td>{row.email}</td>
                <td>{row.web}</td>
                <td>{row.age}</td>
              </tr>
            ))
          }
        </tbody>
    </table>
    )
}

export default UserTable;