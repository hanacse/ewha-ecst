import { createStore } from "redux";

import {

  CAM_START, CAM_STOP
} from "../TodoRedux/Actions.jsx";


const initialState = {
  cameraStream: null,

};

//Reducer: 데이터(state)를 modify
const Reducer = (state = initialState, action) => {
  switch (action.type) {
    //payload:action에 담겨진 실제 데이터


    //case STUDY_COMPLETED:
    //   return {
    //     ...state,
    //     todoItems: state.todoItems.map(item =>
    //       item.id === action.payload.id ? { ...item, completed: action.payload.completed } : item
    //     )
    //   };
    // //Todo
    // case TODO_TEXT:
    //   return {
    //     ...state,
    //     todoItem: state.todoItem.map((todo) => {
    //       if (todo.id === action.payload.id) {
    //         return { ...todo, text: action.payload.text };
    //       }
    //       return todo;
    //     }),
    //   };
    // case EDIT_TODO:
    //   return {
    //     ...state,
    //     todoItems: state.todoItems.map(item =>
    //       item.id === action.payload.id ? { ...item, text: action.payload.text } : item
    //     )
    //   };
    // //
    // case DELETE_TODO:
    //   return {
    //     ...state,
    //     todoItems: state.todoItems.filter(item => item.id !== action.payload)
    //   };
    // //리셋버튼
    // case RESET_STATE:
    //   return {
    //     ...state,
    //     radioStart: !action.payload.radioStart,
    //   };
    //캠 카메라
    case CAM_START:
      return { ...state, cameraStream: action.payload };
    case CAM_STOP:
      return { ...state, cameraStream: null };
    default:
      return state;
  }
};

//데이터 저장소
const Store = createStore(Reducer);

export default Store;
