import {create} from 'zustand';

export interface ProfileState {
  name: string;
  email: string;
  // methods
  changeProfile: (name: string, email: string) => void;
}

export const useProfileStore = create<ProfileState>()((set, _get) => ({
  name: 'Jhon Doe',
  email: 'jhondoe@mail.com',

  changeProfile: (name: string, email: string) => {
    set({name, email});
  },
}));
