import React from 'react';
import { useSelector } from 'react-redux';
import Table from 'react-bootstrap/Table';
import '../stylesheets/myProfile.css';

function MyRockets() {
  const rockets = useSelector((state) => state.rocketsReducer);

  return (
    <Table bordered hover size="lg" className="myProfileTable">
      <thead>
        <tr>
          <th>My Rockets</th>
        </tr>
      </thead>
      <tbody>
        {rockets
          .filter((y) => y.reserved)
          .map((y) => (
            <tr>
              <td>{y.rocket_name}</td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
}

export default MyRockets;
