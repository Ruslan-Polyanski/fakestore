import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import { getToken } from '../../../api';

export default function ButtonLoginForm() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    getToken(name, pass)
    setName('')
    setPass('')
  };

  const handleChangeName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }

  const handleChangePass = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPass(event.target.value)
  }

  return (
    <div>
      <Button variant="contained" onClick={handleClickOpen}>
        Log in
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <form onSubmit={handleSubmit}> 
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Name"
              type="text"
              fullWidth
              variant="standard"
              value={name}
              onChange={handleChangeName}
            />
            <TextField
              autoFocus
              margin="dense"
              id="password"
              label="Password"
              type="text"
              fullWidth
              variant="standard"
              value={pass}
              onChange={handleChangePass}
            />
            <DialogActions>
              <button>Log in</button>
            </DialogActions>
          </form>
        </DialogContent>
        <Button onClick={handleClose}>Cancel</Button>
      </Dialog>
    </div>
  );
}

export { ButtonLoginForm };
