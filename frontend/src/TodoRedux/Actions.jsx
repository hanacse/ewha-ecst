//<action으로 정의할 요소들>
// 공부 완료/미완료 상태


//캠 카메라 상태
export const CAM_START = "CAM_START";
export const CAM_STOP = 'STOP_CAMERA';

//<action 정의>
export const studyCompleted = (id, completed) => ({
  type: STUDY_COMPLETED,
  payload: { id, completed }
});

export const editTodo = (id, text) => ({
  type: EDIT_TODO,
  payload: { id, text }
});

export const deleteTodo = (id) => ({
  type: DELETE_TODO,
  payload: id
});

export const studyState = (study) => ({
  type: STUDY_STATE,
  payload: study
});

export const todoText = (id, text) => ({
  type: TODO_TEXT,
  payload: { id, text }
});

export const resetState = (reset) => ({
  type: RESET_STATE,
  payload: reset
});

export const startCamera = (stream) => ({
  type: CAM_START,
  payload: stream
});

export const stopCamera = () => ({
  type: CAM_STOP
});

export const actionCreators = {
  studyCompleted,
};
