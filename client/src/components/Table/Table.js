import React from 'react'
// import PropTypes from 'prop-types'

import './Table.scss'
import EditBtn from '../EditBtn/editbtn';

const Table = () => (
  <div className="container">
    <table className="table table-sm table-hover">
      <thead className="thead-dark">
        <tr>
          <th className="responsive-visibility" scope="col">
            Click to Submit
          </th>
          <th className="responsive-invisibility" scope="col">
            Associate That Approved
          </th>
          <th className="responsive-invisibility" scope="col">
            Associate Submission Date
          </th>
          <th className="responsive-invisibility" scope="col">
           Manager That Approved
          </th>
          <th className="responsive-invisibility" scope="col">
            Manager Submission Date
          </th>
          <th className="responsive-visibility" scope="col">
            Audition Approved?
          </th>
          <th className="responsive-visibility" scope="col">
            Audition Link
          </th>
          <th className="responsive-visibility" scope="col">
            ID
          </th>
          <th className="responsive-visibility" scope="col">
            Category
          </th>
          <th className="responsive-visibility" scope="col">
            ISRC
          </th>
          <th className="responsive-visibility" scope="col">
            Record Label
          </th>
          <th className="responsive-visibility" scope="col">
            Artist
          </th>
          <th className="responsive-visibility" scope="col">
            Song Title
          </th>
          <th className="responsive-visibility" scope="col">
            Album
          </th>
          <th className="responsive-visibility" scope="col">
            File Path
          </th>
          <th className="responsive-visibility" scope="col">
            Edit & Delete Links
          </th>
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
          <td><EditBtn /> & Delete Link</td>

        </tr>
      </tbody>
    </table>
  </div>
)

export default Table