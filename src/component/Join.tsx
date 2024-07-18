import { useState } from 'react';
import ButtonCommon from './ButtonCommon';


interface JoinProps {
  onClick?: ()=> void | undefined


}

export default function Join ({}:JoinProps) {
  const [ getValues, setGetValues ] = useState(
    {
      userId: '',
      userPw: '',
      userPwCheck: '',
    }
  );

  
  
  const change = (e: React.ChangeEvent<HTMLInputElement>) =>{
    let { name , value } = e.target;

    setGetValues((prev) => ({
      ...prev,
      [name]: value,
  }))

  }

  const handleJoin = () => {
  
    console.log('안냐세영');
      
    if(getValues.userPw === getValues.userPwCheck) {
      console.log(getValues);
      console.log('userId:',getValues.userId);
      console.log('userPw:',getValues.userPw);
      console.log('userPw:',getValues.userPwCheck);
      console.log('통과');
    }
      
   
    
  }


  return (
  
    <form action="#">
      <fieldset>
        <legend>Join NOW</legend>
        <div>

          <label htmlFor="Id">
            Id:<input type="text" name="userId" value={getValues.userId} id='Id' required placeholder ='아이디' onChange={change}/>
            
          </label>

        </div>
     

       <div>

          <label htmlFor="Pw">
            Pw:<input type="text" name="userPw" value={getValues.userPw} id='Pw' required placeholder ='비밀번호' onChange={change}/>
           
          </label>

       </div>
       
       <div>

          <label htmlFor="PwCheck">
            Pw:<input type="text" name="userPwCheck" value={getValues.userPwCheck}id='PwCheck' required placeholder ='비밀번호 확인' onChange={change}/>
           
          </label>

       </div>
       <ButtonCommon name='가입하기' type='button' onClick= {handleJoin} ></ButtonCommon>

      </fieldset>
    </form>



  )}