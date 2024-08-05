import {create} from 'zustand';

interface StoreState {
  isLoggedIn: boolean;
  setIsLoggedIn: (status: boolean) => void;
  
}


const useStore = create<StoreState>((set) => ({
  isLoggedIn: localStorage.getItem('isLoggedIn') === 'true',
  setIsLoggedIn: (loggedIn) => {
    set({ isLoggedIn: loggedIn });
    localStorage.setItem('isLoggedIn',  loggedIn ? 'true' : 'false'); // 상태를 로컬 스토리지에 저장
  },
}));

export default useStore;