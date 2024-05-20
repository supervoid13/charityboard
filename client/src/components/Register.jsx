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


    return (
      <> 
      <Header></Header>
      <Container size={420} my={40}>
        <Title ta="center" className={classes.title}>
          Register
        </Title>

  
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <TextInput label="Email" placeholder="you@mantine.dev" required />
          <PasswordInput label="Password" placeholder="Your password" required mt="md" />
          <Button fullWidth mt="xl" color='orange'>
            Sign up
          </Button>
        </Paper>
      </Container>
      </>
    );
  }