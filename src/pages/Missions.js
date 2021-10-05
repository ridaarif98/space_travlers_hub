import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchData } from '../redux/missions/missions';

const Mission = () => {
  const data = useSelector((state) => state.missionsReducer);
  const dispatch = useDispatch();
  console.log(data);
  // useEffect(() => {
  //   // console.log(data);
  //   // dispatch(fetchData());
  // }, []);

  dispatch(fetchData());
  return (
    <div>
      <h1>Hello, This is Mission page</h1>
      <h2>{data}</h2>
    </div>
  );
};
export default Mission;
