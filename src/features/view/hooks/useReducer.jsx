import React, { useReducer, useRef } from "react";
import { TextField, Button, Stack, List, ListItem, ListItemText } from "@mui/material";

export const UseReducerList = () => {

  const reducer = (state, action) => {
    switch (action.type) {

      case "ADD_TASK":
        return [
          ...state,
          { title: action.title, id: Date.now() }
        ];

      case "REMOVE_TASK":
        return state.filter(task => task.id !== action.id);

      default:
        return state;
    }
  };

  const [tasks, dispatch] = useReducer(reducer, []);
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const value = inputRef.current.value.trim();
    if (!value) return;

    dispatch({ type: "ADD_TASK", title: value });
    inputRef.current.value = "";
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <Stack direction="row" spacing={2} mb={2}>
          <TextField label="Nueva tarea" inputRef={inputRef} fullWidth />
          <Button type="submit" variant="contained">
            Agregar
          </Button>
        </Stack>
      </form>

      <List>
        {tasks.map(task => (
          <ListItem
            key={task.id}
            secondaryAction={
              <Button
                color="error"
                onClick={() =>
                  dispatch({ type: "REMOVE_TASK", id: task.id })
                }
              >
                Eliminar
              </Button>
            }
          >
            <ListItemText primary={task.title} />
          </ListItem>
        ))}
      </List>
    </>
  );
};