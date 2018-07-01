import React from 'react'
import PropTypes from 'prop-types'

import './Table.scss'

const Table = () => (
  <div className="container">
    <table className="table table-sm table-hover">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Auditioned By, no mobile</th>
          <th scope="col">Audition Date Submitted, no mobile</th>
          <th scope="col">Manager Approval By, no mobile</th>
          <th scope="col">Manager Date Submitted, no mobile</th>
          <th scope="col">Click to Submit</th>
          <th scope="col">Click to Approve Audition</th>
          <th scope="col">Click Link to Audition Song</th>
          <th scope="col">WIZS ID</th>
          <th scope="col">Category</th>
          <th scope="col">ISRC</th>
          <th scope="col">Record Label</th>
          <th scope="col">Artist</th>
          <th scope="col">Song Title</th>
          <th scope="col">Album</th>
          <th scope="col">File Path</th>
          <th scope="col">Edit & Delete Links</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          {/* <th scope="row">1</th> */}
          <td>autofill</td>
          <td>autofill</td>
          <td>autofill</td>
          <td>autofill</td>
          <td>checkbox</td>
          <td>checkbox</td>
          <td>link</td>
          <td>autofill</td>
          <td>dropdown box</td>
          <td>form box</td>
          <td>form box</td>
          <td>form box</td>
          <td>form box</td>
          <td>form box</td>
          <td>form box</td>
          <td>2 links</td>

        </tr>
        {/* <tr>
          <th scope="row">2</th>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Larry</td>
          <td>the Bird</td>
          <td>@twitter</td>
        </tr> */}
      </tbody>
    </table>
  </div>
)

export default Table