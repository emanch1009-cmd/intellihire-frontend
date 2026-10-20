import {useSyncExternalStore} from 'react'
let u=null;const subs=new Set()
export const login=x=>{u=x;subs.forEach(f=>f())}
export const logout=()=>login(null)
export const useUser=()=>useSyncExternalStore(f=>{subs.add(f);return()=>subs.delete(f)},()=>u)
