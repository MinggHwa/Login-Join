import  { supabase as subbase } from '../utills/supabaseClient';
import React, { useEffect, useState } from 'react';
import ButtonCommon from './ButtonCommon';
import { useNavigate } from 'react-router-dom';
import useStore from '../utills/useStore';

interface LoginProps {
  // value: number | string;
  setUserEmail: React.Dispatch<React.SetStateAction<string>>;
  setUserPw: React.Dispatch<React.SetStateAction<string>>;

}


export default function Login () {
const [formValues, setFormValues] = useState({
  userEmail: '',
  userPw: '',
});
const navigate = useNavigate();
const [session, setSession] = useState<any>(null);
console.log(session);

useEffect(() => {
  const fetchSession = async () => {
    const { data } = await subbase.auth.getSession();
    setSession(data.session);
  };
  
  fetchSession();
}, []);


const Change = (e: React.ChangeEvent<HTMLInputElement>) => {
  let { name, value } =  e.target ;
  
  setFormValues((prev) => ({
    ...prev,
    [name]: value,
  }));
  
}

const handleLogin = async (e:React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log('Email:', formValues.userEmail);
  console.log('Password:', formValues.userPw);

  try {
    const { data, error } = await subbase.auth.signInWithPassword({
      email: formValues.userEmail,
      password: formValues.userPw
  });
    if (error) {
      alert(error);
      return;
    }else {
      useStore.getState().setIsLoggedIn(true);
      setSession(data.session); 
      alert('이동합니다.');
        console.log('Sign In Success:', data.session);
        return navigate('/welcome');
    }
    

  } catch(err) {

    console.error('error message',err);
  }
 


};





return (
  <form action="#" onSubmit={handleLogin}>
  <fieldset>
    <legend>Login</legend>
    <div>
  <label htmlFor='Email'>Email:<input type="email" name="userEmail" value={formValues.userEmail}  id='Email' required placeholder ='이메일' onChange={Change} /></label> 

    
    </div>
    <div>
  <label htmlFor='Password'>Pw:<input type="password" name="userPw" id='Password' value={formValues.userPw} required  placeholder ='패스워드' onChange={Change} /></label>
    
  
    </div>
    <ButtonCommon name='로그인하기' type='submit'></ButtonCommon>
</fieldset>
  </form>

)




}