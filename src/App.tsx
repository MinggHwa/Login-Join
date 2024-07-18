import { useState } from 'react';
import './App.css'
import ButtonCommon from './component/ButtonCommon';
import Login from './component/Login';
import Join from './component/Join';


function App() {
  // showLogin 상태를 정의하고 초기값을 false로 설정 클릭해야만 true가 되면서 로그인 창 등장
    const [ showLogin, setShowLogin ] = useState(false);
    const [ showJoin, setShowJoin ] = useState(false);


  const handleLoginShow  = ()=> {
    setShowLogin(true);
    setShowJoin(false);
 

  }

  const handleJoinShow = () => {
    setShowJoin(true);
    setShowLogin(false);
    console.log('버튼움직임');


  }

  return (
    <div>


{showLogin && <Login />}
{showJoin && <Join />}




<ButtonCommon name="로그인" onClick={handleLoginShow}></ButtonCommon>
<ButtonCommon name="회원가입" onClick={handleJoinShow}></ButtonCommon>

    </div>

  )
}

export default App
