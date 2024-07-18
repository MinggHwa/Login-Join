// import { useState } from 'react';
import React, { useState } from 'react';
import ButtonCommon from './ButtonCommon';

interface LoginProps {
  // value: number | string;
  setUserId: React.Dispatch<React.SetStateAction<string>>;
  setUserPw: React.Dispatch<React.SetStateAction<string>>;
  //setState: () => void; 좋지 않은 방법 - 인자 받아오는 state에 어울리지 않음.
}



export default function Login () {
const [formValues, setFormValues] = useState({
  userId: '',
  userPw: '',
});
//에러 - SetStateAction
//type SetStateAction<S> = S | ((prevState: S) => S);
//S 자체가 직접적인 업데이트를 나타내는 값이 될 수 있다.
//setState(value) 처럼 값이 직접 변경되는 경우를 의미한다.

// useState () => {
//   onclick
const Change = (e: React.ChangeEvent<HTMLInputElement>) => {
  let { name, value } =  e.target ;
  
  setFormValues((prev) => ({
    ...prev,
    [name]: value,
  }));
  
}

const handleLogin = () => {
  console.log('User ID:', formValues.userId);
  console.log('User PW:', formValues.userPw);

};



// }

return (
  <form action="#">
  <fieldset>
    <legend>Login</legend>
    <div>
  <label htmlFor='Id'>Id:<input type="text" name="userId" id='Id' required placeholder ='아이디' onChange={Change}/></label> 
  {/* 원래는 input에 value를 넣으면 값넣고 싶을때 기존 value가 지원져야 하는데 react에서는 지워지지 않음 그래서 onChange로 변화를 감지해야함 */}
    
    </div>
    <div>
  <label htmlFor='Password'>Pw:<input type="text" name="userPw" id='Password' required onChange={Change} placeholder ='패스워드' /></label>
    

    </div>
    <ButtonCommon name='로그인하기' type='submit' onClick={handleLogin}></ButtonCommon>
</fieldset>
  </form>

)




}