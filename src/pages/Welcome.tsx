import { useNavigate } from 'react-router-dom';
import ButtonCommon from '../component/ButtonCommon'
import useStore from '../utills/useStore';

export function Welcome() {
  const navigate = useNavigate();
const handleLoggedOut = () => {
  useStore.setState({ isLoggedIn: false });
  alert('로그아웃 되었습니다.');
  navigate('/'); 
};


  return (
    <div>

    <p className=''>어서와 welcome</p>
    <ButtonCommon onClick={handleLoggedOut} type='button' name='로그아웃'>
    
    </ButtonCommon>

    </div>

  )
}