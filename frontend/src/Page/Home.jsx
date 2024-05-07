import React, { useState, useEffect } from "react";
import { CgProfile } from "react-icons/cg";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Provider } from "react-redux";
import Table from "../components/Table.jsx";
import TodoForm from "../components/TodoForm.jsx";
import Store from "../TodoRedux/Store.jsx";

import { useLocation } from "react-router-dom";
import { Link } from 'react-router-dom';


import PracticeCam from "../components/PracticeCam.jsx";
import Todo from "../components/Todo.jsx";

import Video from "../components/Video.jsx";



function Home() {
  const [user, setUser] = useState("로그인 필요");
  const [study, setStudy] = useState([]);
  const [durationTime, setDurationTime] = useState();
  const [isLoading, setisLoading] = useState(true);
  const location = useLocation();

  //로그인 버튼 시, 로그인 페이지로 전환
  const history = useHistory();

  const [stream, setStream] = useState(false);



  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
      let email;
      try {
      if (location.state && location.state.email) {
        // 서버에서 받은 응답 데이터에서 사용자 이메일을 가져옴
         email = location.state.email;
        console.log(email);


        // study_todo 가져오기 위한 axios
        const response = await axios.get("http://127.0.0.1:8000/api/study/", {
          params: {
            email: email,
          },
        });
        setUser(response.data.user);

        console.log(response.data.feeds);
        await setStudy(response.data.feeds);
        setisLoading(false);
      } else {
        // 로그인 필요한 경우
        setUser("로그인 필요");
        //setStudy([]);
        setisLoading(true);
        if (!location.state || !location.state.email) {
          history.push("/login");
        }
      }

      // study_todo 가져오기 위한 axios
      const response = await axios.get("http://127.0.0.1:8000/api/study/", {
        params: {
          email: email,
        },
      });
      setUser(response.data.user);
      setDurationTime(response.data.total_duration_time);
      setStudy(response.data.feeds);
      console.log(response.data.feeds);

      setisLoading(false);

    } catch (error) {
      console.log(error);
    }
  };

  const handletologin = () => {
    history.push("/login");
  };

  const MenuBtn = () => {
    return (
      <nav className="menu" style={{ textAlign: "center" }}>
        <div>
          <Link to="/" className="m-5 outline-none custom-btn btn-1 text-xl">
          홈
        </Link>
          <Link to="/focus-analysis" className="m-5 outline-none custom-btn btn-1 text-xl">
          집중도 분석
        </Link>
        <Link to="/my-page" className="m-5 outline-none custom-btn btn-1 text-xl">
          마이페이지
        </Link>
        </div>
      </nav>
    );
  };

  return (
      <div>
        {/*머리*/}
        <div className="flex justify-between items-center">
        <div className="text-xl font-bold ml-6">
          <h1>Learning Mate</h1>
        </div>
        <div>
          <div className="items-center">
            <CgProfile className="text-3xl text-right" />
          </div>
          <div onClick={handletologin}>{user}</div>
        </div>
      </div>
      <hr />
      {/*메뉴바*/}
      <div className="p-2 bg-sky-300 text-white font-bold">
        <MenuBtn />
        {/*{user}*/}
      </div>
      <hr />

      {/*박스들*/}
      <div className="flex">
        <div className="bg-white min-h-screen p-2 rounded-lg mt-4 w-1/2">


            <div className="ml-2 mt-5 mb-5 font-bold text-4xl">
              총 누적 공부시간 :{durationTime}
            </div>

          <nav className="pt-8">
            <h1 className="font-bold text-5xl text-left pb-8 ml-4">To Do List </h1>
          </nav>
          {/* Body */}
          <TodoForm user={user} setStudy={setStudy} fetchData={fetchData}/>

          <Todo study={study} isLoading={isLoading} setStudy={setStudy}/>
        </div>
        <div>
          <div>
            <PracticeCam/>
          </div>
          <div>Graph</div>
        </div>
      </div>
      </div>
  );
}

export default Home;
