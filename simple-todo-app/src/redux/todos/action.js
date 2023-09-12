import {
  ADDED,
  ALLCOMPLETED,
  CLEARCOMPLETED,
  COLORSELECTED,
  DELETED,
  TOGGLED,
} from "./actionType";

export const added = (todoBody) => {
  return {
    type: ADDED,
    payload: todoBody,
  };
};

export const toggled = (todoId) => {
  return {
    type: TOGGLED,
    payload: todoId,
  };
};

export const colorSelected = (color, todoId) => {
  return {
    type: COLORSELECTED,
    payload: {
      color,
      todoId,
    },
  };
};

export const deleted = (todoId) => {
  return {
    type: DELETED,
    payload: todoId,
  };
};

export const allCompleted = () => {
  return {
    type: ALLCOMPLETED,
  };
};

export const clearCompleted = () => {
  return {
    type: CLEARCOMPLETED,
  };
};
