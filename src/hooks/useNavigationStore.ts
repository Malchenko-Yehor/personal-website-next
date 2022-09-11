import create from 'zustand';

interface State {
  opened: boolean;
  setNavigationOpened: (opened: boolean) => void;
}

const useNavigationStore = create<State>((set) => ({
  opened: false,
  setNavigationOpened: (opened) => set({ opened }),
}));

export default useNavigationStore;
