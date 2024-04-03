import {create} from 'zustand';

export interface CounterState {
  count: number;
  increaseBy: (value: number) => void;
}

export const useCounterStore = create<CounterState>()((_set, _get) => ({
  count: 10,
  increaseBy: (value: number) => _set(state => ({count: state.count + value})),
  // increaseBy: (value: number) => _set(state => ({count: get().count + value})),
}));
