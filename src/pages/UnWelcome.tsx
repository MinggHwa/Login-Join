import { useState } from 'react';
import ButtonCommon from '../component/ButtonCommon';
import Join from '../component/Join';
import Login from '../component/Login';



export function UnWelcome() {
  const [ showLogin, setShowLogin ] = useState(false);
  const [ showJoin, setShowJoin ] = useState(false);


const handleLoginShow  = ()=> {
  setShowLogin(true);
  setShowJoin(false);


}

const handleJoinShow = () => {
  setShowJoin(true);
  setShowLogin(false);
  


}




  return (
    <>
    {showLogin && <Login />}
    {showJoin && <Join userEmail="" userPw="" userPwCheck="" />}

<ButtonCommon name="로그인" onClick={handleLoginShow}></ButtonCommon>
<ButtonCommon name="회원가입" onClick={handleJoinShow}></ButtonCommon>
    
    </>




  )

}