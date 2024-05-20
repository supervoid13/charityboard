import React from 'react';
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
  import { Outlet, Link } from "react-router-dom";
  import Header from './Header';
  import classes from '../AuthenticationTitle.module.css';

  export default function AuthenticationTitle() {
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
          Register
        </Title>

  
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <TextInput label="Username" placeholder="User123" required  onChange={e => handleChange("username", e.target.value)} value={fields['username']}/>
          <TextInput label="City" placeholder="Moscow" required onChange={e => handleChange("city", e.target.value)} value={fields['city']}/>
          <TextInput label="First name" placeholder="Andrew" required onChange={e => handleChange("fname", e.target.value)} value={fields['fname']}/>
          <TextInput label="Second name" placeholder="Watskov" required onChange={e => handleChange("sname", e.target.value)} value={fields['sname']}/>
          <TextInput label="Email" placeholder="you@mail.ru" required onChange={e => handleChange("email", e.target.value)} value={fields['email']}/>
          <PasswordInput label="Password" placeholder="Your password" required mt="md" onChange={e => handleChange("password", e.target.value)} value={fields['password']}/>
          
          <Button fullWidth mt="xl" color='orange'>
            Sign up
          </Button>
        </Paper>
      </Container>
      </>
    );
  }