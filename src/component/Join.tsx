import { useState } from 'react';
import  { supabase as subbase } from '../utills/supabaseClient';
import ButtonCommon from './ButtonCommon';
import { useForm, SubmitHandler } from 'react-hook-form';


interface JoinProps {
  onClick?: ()=> void | undefined;
  userEmail: string;
  userPw: string;
  userPwCheck:string;
}


export default function Join ({}:JoinProps) {
  const { register, handleSubmit,watch, formState: { errors } } = useForm<JoinProps>( {mode: 'onBlur'});
  const regExpEmail =/^[a-z][a-z0-9]*@[a-z][a-z0-9]*\.[a-z]+$/ ;
  const regExpPw = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@!~#\$%\^&\*\(\)_\+])[A-Za-z0-9@!~#\$%\^&\*\(\)_\+]{9,30}$/;
  const [errorMsg = 'yes', setErrorMsg] = useState<string | null>(null);
  
  const userPw = watch('userPw');
  const userEmail = watch('userEmail');
  const userPwCheck = watch('userPwCheck');
  
console.log(errorMsg);
  
  const onSubmit: SubmitHandler<JoinProps> = async ( data )=> {
    
    try {
      const { userEmail, userPw }  =  data;
      const { data: result, error } = await subbase.auth.signUp({
        email: userEmail,
        password: userPw,
      });
      if(result.user?.identities?.length === 0) {
        setErrorMsg('이미 존재하는 이메일입니다.');
      alert('이미 존재하는 이메일입니다.');
       
      } 
    else if(error) {
      setErrorMsg(error.message);
      alert(error);
     
    }
    } catch (err){
      alert(err);


    }
    
  };



  return (
  
    <form action="#" onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <legend>Join NOW</legend>
        <div>

          <label htmlFor="Email">
            Email:<input type="text" id='Email' required placeholder ='아이디' 
            {
              ...register('userEmail', { required:true, pattern: regExpEmail }) 
            }
            
           />
       
            
          </label>
          {errors.userEmail && (<>
            <div>이메일 형식을 확인해 주세요</div>
          </>
        
      )}

        </div>
     

       <div>

          <label htmlFor="Pw">
            Pw:<input type="text" id='Pw' required placeholder ='비밀번호'
            {
              ...register('userPw', { required: true, pattern:regExpPw})


            }
            
            
            />
           
          </label>
          {errors.userPw && (<>

          <div>
            비밀번호는 숫자, 영문 대문자, 영문 소문자, 특수문자 1개 이상 포함한 9자 이상 30자 이하여야 합니다.
          </div>
          </>)}

       </div>
       
       <div>

          <label htmlFor="PwCheck">
            PwCheck:<input type="text" id='PwCheck' required placeholder ='비밀번호 확인'
               {
                ...register('userPwCheck', { required:true }) 
    
    
               }
            />
        
          </label>
           {errors.userPwCheck && (
            <>
            <div>비밀번호 확인은 필수입니다.</div>
            </>)}
            {userPw && userPwCheck && userPw !== userPwCheck && (
              <div>
                입력하신 비밀번호와 일치하지 않습니다.
              </div>
            )  }
              {/* <input type="text" value='test' /> */}
       </div>
       <ButtonCommon name='가입하기' type='submit' disabled={!userEmail || !userPw || userPw !== userPwCheck}></ButtonCommon>
      

      </fieldset>
    </form>

)}