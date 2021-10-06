import React from 'react';
import Table from 'react-bootstrap/Table';
import '../stylesheets/myProfile.css';

function MyMissions() {
  return (
    <Table bordered hover size="lg" className="myProfileTable">
      <thead>
        <tr>
          <th>My Missions</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Test</td>
        </tr>
      </tbody>
    </Table>
  );
}

export default MyMissions;
