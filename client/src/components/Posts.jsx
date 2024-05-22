import Header from './Header';
import { useSelector } from 'react-redux';
import Login from './Auth.jsx';
import { Grid, Card, Image, Text, Badge, Button, Group } from '@mantine/core';
import Modal from './Modal'
export default function Posts(){
    const isLoggedIn = useSelector(state => state.app.isLoggedIn);
    
    return (
        <>
            
            {isLoggedIn ? 
            <>
                <Header></Header>
                <div className='main-posts'>
                    <Grid justify="space-around" align="flex-start" grow gutter="lg">
                    <Grid.Col span={4}>
                        <Card shadow="sm" padding="lg" radius="md" withBorder>
                            <Card.Section>
                                <Image
                                src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                                height={160}
                                alt="Norway"
                                />
                            </Card.Section>

                            <Group justify="space-between" mt="md" mb="xs">
                                <Text fw={500}>Norway Fjord Adventures</Text>
                                <Badge color="pink">On Sale</Badge>
                            </Group>

                            <Text size="sm" c="dimmed">
                                With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                                activities on and around the fjords of Norway
                            </Text>

                            <Button color="blue" fullWidth mt="md" radius="md">
                                Book classic tour now
                            </Button>
                        </Card>
                    </Grid.Col>
                    <Grid.Col span={4}>
                    <Card shadow="sm" padding="lg" radius="md" withBorder>
                            <Card.Section>
                                <Image
                                src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                                height={160}
                                alt="Norway"
                                />
                            </Card.Section>

                            <Group justify="space-between" mt="md" mb="xs">
                                <Text fw={500}>Norway Fjord Adventures</Text>
                                <Badge color="pink">On Sale</Badge>
                            </Group>

                            <Text size="sm" c="dimmed">
                                With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                                activities on and around the fjords of Norway
                            </Text>

                            <Button color="blue" fullWidth mt="md" radius="md">
                                Book classic tour now
                            </Button>
                        </Card>
                    </Grid.Col>
                    <Grid.Col span={4}>
                    <Card shadow="sm" padding="lg" radius="md" withBorder>
                            <Card.Section>
                                <Image
                                src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                                height={160}
                                alt="Norway"
                                />
                            </Card.Section>

                            <Group justify="space-between" mt="md" mb="xs">
                                <Text fw={500}>Norway Fjord Adventures</Text>
                                <Badge color="pink">On Sale</Badge>
                            </Group>

                            <Text size="sm" c="dimmed">
                                With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                                activities on and around the fjords of Norway
                            </Text>

                            <Button color="blue" fullWidth mt="md" radius="md">
                                Book classic tour now
                            </Button>
                        </Card>
                    </Grid.Col>
                    <Grid.Col span={4}>
                    <Card shadow="sm" padding="lg" radius="md" withBorder>
                            <Card.Section>
                                <Image
                                src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                                height={160}
                                alt="Norway"
                                />
                            </Card.Section>

                            <Group justify="space-between" mt="md" mb="xs">
                                <Text fw={500}>Norway Fjord Adventures</Text>
                                <Badge color="pink">On Sale</Badge>
                            </Group>

                            <Text size="sm" c="dimmed">
                                With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                                activities on and around the fjords of Norway
                            </Text>

                            <Button color="blue" fullWidth mt="md" radius="md">
                                Book classic tour now
                            </Button>
                        </Card>
                    </Grid.Col>
                    <Grid.Col span={4}>
                    <Card shadow="sm" padding="lg" radius="md" withBorder>
                            <Card.Section>
                                <Image
                                src="https://raw.githubusercontent.com/mantinedev/mantine/master/.demo/images/bg-8.png"
                                height={160}
                                alt="Norway"
                                />
                            </Card.Section>

                            <Group justify="space-between" mt="md" mb="xs">
                                <Text fw={500}>Norway Fjord Adventures</Text>
                                <Badge color="pink">On Sale</Badge>
                            </Group>

                            <Text size="sm" c="dimmed">
                                With Fjord Tours you can explore more of the magical fjord landscapes with tours and
                                activities on and around the fjords of Norway
                            </Text>

                            <Button color="blue" fullWidth mt="md" radius="md">
                                Book classic tour now
                            </Button>
                        </Card>
                    </Grid.Col>
                    </Grid>
                </div>
            </>
            : <Login></Login>}
            
        </>
    )
}