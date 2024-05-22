import {
    TextInput,
    PasswordInput,
    Checkbox,
    Anchor,
    Paper,
    Title,
    Text,
    Container,
    Group,
    Button,
  } from '@mantine/core';
  import Modal from './Modal'
  import React from 'react';
  import { useDispatch } from 'react-redux'
  import {login, setUser} from '../slices/appSlice.js';
  import { Link, useNavigate } from "react-router-dom";
  import Header from './Header';
  import classes from '../AuthenticationTitle.module.css';

  export default function AuthenticationTitle() {
    const dispatch = useDispatch()
    const navigate = useNavigate();

    const [fields, setFields] = React.useState({});
    

    const handleChange = (field, value) => {
        setFields({
          ...fields,
          [field]: value
        })
      }
      const handleLogin = async () => {
        const response = await dispatch(login(fields));
        console.log(response);
        if(response.type === 'app/login/fulfilled'){
          navigate("/");
          dispatch(setUser(fields["username"]));
        }
        
      };

    return (
      <> 
      <Modal></Modal>
      <Header></Header>
      <Container size={420} my={40}>
        <Title ta="center" className={classes.title}>
          Welcome back!
        </Title>
        <Text c="dimmed" size="sm" ta="center" mt={5}>
          Do not have an account yet?{' '}
          <Link to={"/signup"}>
          <Anchor size="sm" component="button">
            Create account
          </Anchor>
          </Link>
        </Text>
  
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <TextInput label="Username" placeholder="User123" required onChange={e => handleChange("username", e.target.value)} value={fields['username']}/>
          <PasswordInput label="Password" placeholder="Your password" required mt="md" onChange={e => handleChange("password", e.target.value)} value={fields['password']}/>
          <Group justify="space-between" mt="lg">
            <Checkbox label="Remember me" />
          </Group>
          <Button fullWidth mt="xl" color='orange' onClick={handleLogin}>
            Sign in
          </Button>
        </Paper>
      </Container>
      </>
    );
  }