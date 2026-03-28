import { create } from 'zustand'

const useStore = create((set) => ({
    count: 0,
    status:'',
    setStatus:(value)=>set({status:value}),

    increment:() => set((state) => ({ count: state.count + 1 })),
    dincrement:() => set((state) => ({ count: state.count - 1 })),
    reset: () => set({ count: 0 }),

}))

export default useStore;