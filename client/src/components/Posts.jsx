import Header from './Header';
import { useSelector, useDispatch } from 'react-redux';
import Login from './Auth.jsx';
import { Grid, Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import { useEffect, useState } from 'react';
import {getposts} from '../slices/appSlice.js';
import { Link } from 'react-router-dom';
export default function Posts(){
    const isLoggedIn = useSelector(state => state.app.isLoggedIn);
    const dispatch = useDispatch();
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
          try {
            const response = await dispatch(getposts());
            setPosts(response.payload);
          } catch (error) {
            console.error('Error fetching posts:', error);
          }
        };
    
        fetchData();
      }, []);
      console.log(posts);
    return (
        <>
            
            {isLoggedIn ? 
            <>
                <Header></Header>
                <div className='main-posts'>
                    <Grid justify="space-around" align="flex-start" >
                    {posts.map(post => {
                        return (
                            <>
                            <Grid.Col key={post.id} span={4}>
                                <Card shadow="sm" padding="lg" radius="md" withBorder>
                                    <Card.Section>
                                        <Image
                                        src={post.avatar}
                                        height={160}
                                        alt="Norway"
                                        />
                                    </Card.Section>

                            <Group justify="space-between" mt="md" mb="xs">
                                <Text fw={500}>{post.title}</Text>
                            </Group>

                            <Text size="sm" c="dimmed">
                                {post.content}
                            </Text>
                            <Link to={`/posts/${post.id}`}>
                                <Button color="orange" fullWidth mt="md" radius="md">
                                    {post.goal}
                                </Button>
                            </Link>
                        </Card>
                    </Grid.Col>
                            </>
                        )
                    })}
                    </Grid>
                </div>
            </>
            : <Login></Login>}
            
        </>
    )
}