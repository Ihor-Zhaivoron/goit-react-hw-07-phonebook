import { useDispatch } from 'react-redux';
import { filterSlicer } from 'redux/filterSlicer';

export const Filter = () => {
  const dispatch = useDispatch();

  const handleChange = e => {
    const value = e.target.value;
    dispatch(filterSlicer.actions.changeFilter(value));
  };

  return <input type="text" onChange={e => handleChange(e)} />;
};
