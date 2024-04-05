import { useState, useEffect } from "react";
import { Box, Heading, Input, Button, Text, VStack, HStack, IconButton, Spacer, useToast } from "@chakra-ui/react";
import { FaPlus, FaTrash } from "react-icons/fa";

const API_URL = "https://backengine-5thb.fly.dev";

const Index = () => {
  const [todos, setTodos] = useState([]);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const toast = useToast();

  useEffect(() => {
    fetchTodos();
  }, []);

  const fetchTodos = async () => {
    const res = await fetch(`${API_URL}/todos`);
    const data = await res.json();
    setTodos(data);
  };

  const createTodo = async () => {
    const res = await fetch(`${API_URL}/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ title, description }),
    });

    if (res.ok) {
      setTitle("");
      setDescription("");
      fetchTodos();
      toast({
        title: "Todo created.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  const deleteTodo = async (id) => {
    const res = await fetch(`${API_URL}/todos/${id.toString()}`, {
      method: "DELETE",
    });

    if (res.ok) {
      fetchTodos();
      toast({
        title: "Todo deleted.",
        status: "success",
        duration: 3000,
        isClosable: true,
      });
    }
  };

  return (
    <Box maxWidth="500px" mx="auto" mt={8}>
      <Heading mb={8}>Todo App</Heading>
      <Box mb={8}>
        <Input value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Title" mb={2} />
        <Input value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" mb={4} />
        <Button leftIcon={<FaPlus />} onClick={createTodo}>
          Add Todo
        </Button>
      </Box>
      <VStack spacing={4} align="stretch">
        {todos.map((todo) => (
          <HStack key={todo.id} p={4} borderWidth={1} borderRadius="lg">
            <Box>
              <Heading size="md">{todo.title}</Heading>
              <Text>{todo.description}</Text>
            </Box>
            <Spacer />
            <IconButton icon={<FaTrash />} onClick={() => deleteTodo(todo.id)} />
          </HStack>
        ))}
      </VStack>
    </Box>
  );
};

export default Index;
