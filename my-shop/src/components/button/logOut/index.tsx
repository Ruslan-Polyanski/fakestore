import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import { getLogOut } from '../../../features/user/user-slice';
import { AppDispatch } from '../../../store';

const LogOut = () => {
  const dispatch: AppDispatch = useDispatch();

  return (
    <Button variant="contained" onClick={() => dispatch(getLogOut())}>Log Out</Button>
  )
}

export { LogOut }