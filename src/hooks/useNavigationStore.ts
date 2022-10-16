import create from 'zustand';

interface NavigableSection {
  title: string;
  id: string;
}

interface State {
  opened: boolean;
  navigableSections: NavigableSection[];
  setNavigationOpened: (opened: boolean) => void;
  addNavigalbeSection: (section: NavigableSection) => void;
  clearNavigableSections: () => void;
}

const useNavigationStore = create<State>((set) => ({
  opened: false,
  navigableSections: [],
  setNavigationOpened: (opened) => set({ opened }),
  addNavigalbeSection: (section) =>
    set((state) => {
      const alreadyAdded = state.navigableSections.some((item) => item.id === section.id);

      if (alreadyAdded) return state;

      return { navigableSections: [...state.navigableSections, section] };
    }),
  clearNavigableSections: () => set({ navigableSections: [] }),
}));

export default useNavigationStore;
