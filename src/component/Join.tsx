// import { useState } from 'react';
import ButtonCommon from './ButtonCommon';
import { useForm, SubmitHandler } from 'react-hook-form';


interface JoinProps {
  onClick?: ()=> void | undefined;
  userId: string;
  userPw: string;
  userPwCheck:string;
}


export default function Join ({}:JoinProps) {
  const { register, handleSubmit,watch, formState: { errors } } = useForm<JoinProps>( {mode: 'onBlur'});
  const regExpId = /^(?=.*[a-z])[a-zA-Z0-9_]{5,15}$/ ;
  const regExpPw = /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@!~#\$%\^&\*\(\)_\+])[A-Za-z0-9@!~#\$%\^&\*\(\)_\+]{3,30}$/;

  const userPw = watch('userPw');
  const userId = watch('userId');
  const userPwCheck = watch('userPwCheck');
  
  const onSubmit: SubmitHandler<JoinProps> = data => {
    console.log(data);
  };



  return (
  
    <form action="#" onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <legend>Join NOW</legend>
        <div>

          <label htmlFor="Id">
            Id:<input type="text" id='Id' required placeholder ='아이디' 
            {
              ...register('userId', { required:true, pattern: regExpId }) 
            }
            
           />
       
            
          </label>
          {errors.userId && (<>
            <div>아이디는 5자리 이상 15자리 이상 영문 소문자와 숫자로만 사용가능합니다.</div>
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
            Pw:<input type="text" id='PwCheck' required placeholder ='비밀번호 확인'
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
              
       </div>
       <ButtonCommon name='가입하기' type='submit' disabled={!userId || !userPw || userPw !== userPwCheck}></ButtonCommon>
      

      </fieldset>
    </form>

)}