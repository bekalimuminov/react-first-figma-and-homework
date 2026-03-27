import { create } from 'zustand'

const useStore = create((set) => ({
    status:'',
    setStatus:(value)=>set({status:value}),
}))

export default useStore;