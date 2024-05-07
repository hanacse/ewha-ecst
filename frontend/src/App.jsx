// // import express, { Request, Response } from 'express';
//
// import { useState, useEffect } from 'react';
// import './App.css';
// import Table from './components/Table';
// import TodoForm from './components/TodoForm';
// import axios from 'axios';
// // import express from "express";
//
// // const route = express.Router();
//
// function App() {
//   const [todos, setTodos] = useState('');
//   const [isLoading, setisLoading] = useState(true);
//
//   useEffect(() => {
//     fetchData();
//   }, []);
//
//   // 장고에서 데이터 가져오기
//   const fetchData = async () => {
//     // axios({
//     //   method: 'post',
//     //   url: 'http://127.0.0.1:8000/api/todo',
//     //   headers: {
//     //     'Content-Type': 'application/json',
//     //   },
//     // })
//     //   .then((response) => {
//     //     console.log(`응답: `, response);
//     //     let data = response.data;
//     //     if (response.data) {
//     //       console.log('data', data);
//     //     }
//     //   })
//     //   .catch((error) => {
//     //     console.error('Error during POST request:', error);
//     //   });
//     try {
//       const response = await axios.get(
//         'http://127.0.0.1:8000/api/todo' // 수정된 요청 경로
//       );
//       console.log(response);
//       setTodos(response.data);
//       setisLoading(false);
//     } catch (error) {
//       console.log(error);
//     }
//   };
//
//   return (
//     <div className=" px-8 bg-indigo-100 min-h-screen ">
//       <nav className="pt-8">
//         <h1 className=" text-5xl text-center pb-8">To Do List </h1>
//       </nav>
//       {/* Body */}
//       <TodoForm
//         setTodos={setTodos}
//         fetchData={fetchData}
//       />
//       <Table
//         todos={todos}
//         isLoading={isLoading}
//         setTodos={setTodos}
//       />
//     </div>
//   );
// }
//
// export default App;


import './App.css';
import Login from "./Page/Login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Signup from "./Page/Signup";
import Home from "./Page/Home.jsx"
import FocusAnalysis from "./Page/Home.jsx"; // 추가된 컴포넌트
import MyPage from "./Page/Home.jsx"; // 추가된 컴포넌트
function App() {
    return(
        <Router>
      <Switch>
        <Route path="/login">
          <Login />

        </Route>

        <Route path="/signup">
          <Signup />
        </Route>

          <Route path="/focus-analysis">
          <FocusAnalysis /> // 새로운 경로
        </Route>
        <Route path="/my-page">
          <MyPage /> // 새로운 경로
        </Route>

        <Route path="/" exact>
          <Home />
        </Route>




      </Switch>
    </Router>
    );
}

export default App;