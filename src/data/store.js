import {useSyncExternalStore} from 'react'
let st={};const subs=new Set()
export const setStatus=(id,s)=>{st={...st,[id]:s};subs.forEach(f=>f())}
export const useStatuses=()=>useSyncExternalStore(f=>{subs.add(f);return()=>subs.delete(f)},()=>st)
