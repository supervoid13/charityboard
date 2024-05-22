import React from 'react';
import {
  TextInput,
  PasswordInput,
  Paper,
  Title,
  Text,
  Container,
  Button,
} from '@mantine/core';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { register, setUser } from '../slices/appSlice.js';
import Header from './Header';
import classes from '../AuthenticationTitle.module.css';
import Modal from './Modal'
export default function AuthenticationTitle() {
  const [fields, setFields] = React.useState({
    username: '',
    password: '',
    email: '',
    firstName: '',
    secondName: '',
    city: ''
  });
  const navigate = useNavigate();
  
  const dispatch = useDispatch();
  const { status, error } = useSelector(state => state.app);

  const handleChange = (field, value) => {
    setFields({
      ...fields,
      [field]: value
    });
  };

  const handleRegister = async () => {
    const response = await dispatch(register(fields));
    console.log(response);
    if(response.type === 'app/register/fulfilled'){
      navigate("/");
      dispatch(setUser(fields["username"]));
    }
    
  };

  return (
    <>
      <Modal></Modal>
      <Header />
      <Container size={420} my={40}>
        <Title ta="center" className={classes.title}>
          Register
        </Title>

        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <TextInput label="Username" placeholder="User123" required onChange={e => handleChange("username", e.target.value)} value={fields.username} />
          <TextInput label="City" placeholder="Moscow" required onChange={e => handleChange("city", e.target.value)} value={fields.city} />
          <TextInput label="First name" placeholder="Andrew" required onChange={e => handleChange("firstName", e.target.value)} value={fields.firstName} />
          <TextInput label="Second name" placeholder="Watskov" required onChange={e => handleChange("secondName", e.target.value)} value={fields.secondName} />
          <TextInput label="Email" placeholder="you@mail.ru" required onChange={e => handleChange("email", e.target.value)} value={fields.email} />
          <PasswordInput label="Password" placeholder="Your password" required mt="md" onChange={e => handleChange("password", e.target.value)} value={fields.password} />
          
          {status === 'loading' && <Text>Loading...</Text>}
          {status === 'failed' && <Text color="red">{JSON.stringify(error)}</Text>}

          <Button fullWidth mt="xl" color='orange' onClick={handleRegister}>
            Sign up
          </Button>
        </Paper>
      </Container>
    </>
  );
}