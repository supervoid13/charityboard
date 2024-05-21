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
  import React from 'react';
  import { useSelector, useDispatch } from 'react-redux'
  import {login} from '../slices/appSlice.js';
  import { Outlet, Link } from "react-router-dom";
  import Header from './Header';
  import classes from '../AuthenticationTitle.module.css';

  export default function AuthenticationTitle() {
    const dispatch = useDispatch()

    const [fields, setFields] = React.useState({});


    const handleChange = (field, value) => {
        setFields({
          ...fields,
          [field]: value
        })
      }


    return (
      <> 
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
          <Button fullWidth mt="xl" color='orange' onClick={() => dispatch(login({username: fields['username'], password: fields['password']}))}>
            Sign in
          </Button>
        </Paper>
      </Container>
      </>
    );
  }