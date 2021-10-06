import { React, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { loadRockets } from '../redux/rockets/rockets';

const RocketRender = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadRockets());
  }, []);
  return <></>;
};
export default RocketRender;
