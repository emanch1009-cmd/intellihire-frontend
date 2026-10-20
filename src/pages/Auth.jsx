import {useState} from 'react'
import {Link,useNavigate} from 'react-router-dom'
import {Eye,EyeOff} from 'lucide-react'
import {bc,useToast} from '../components/ui'
import {login} from '../data/auth'
export default function Auth({mode}){const up=mode==='signup',nav=useNavigate(),toast=useToast()
const[f,setF]=useState({name:'',email:'',pw:''}),[show,setShow]=useState(false),[err,setErr]=useState({})
const set=k=>e=>setF({...f,[k]:e.target.value})
const submit=e=>{e.preventDefault();const x={};if(up&&f.name.trim().length<2)x.name='Enter your full name.';if(!/^\S+@\S+\.\S+$/.test(f.email))x.email='Enter a valid email address.';if(f.pw.length<8)x.pw='Password must be at least 8 characters.';setErr(x);if(Object.keys(x).length)return
const name=f.name.trim()||f.email.split('@')[0];login({role:'candidate',name:name[0].toUpperCase()+name.slice(1)});toast('Welcome! Demo mode: no real account was created.');nav('/candidate')}
const inp=k=>`mt-1 w-full rounded-xl border bg-white px-4 py-3 text-sm outline-none focus:ring-2 focus:ring-brand ${err[k]?'border-red-500':'border-line'}`
return <main className="grid min-h-[calc(100vh-64px)] place-items-center px-5 py-10"><div className="w-full max-w-md rounded-2xl border border-line bg-white p-8 shadow-xl shadow-indigo-50">
<h1 className="text-2xl font-extrabold">{up?'Create your free account':'Welcome back'}</h1><p className="mt-1 text-sm text-mute">{up?'Practise interviews and improve your CV. Free for students and job seekers.':'Sign in to your candidate account.'} (Demo: any valid email and 8+ character password works.)</p>
<form onSubmit={submit} noValidate className="mt-6 space-y-4">{up&&<div><label htmlFor="n" className="text-sm font-semibold">Full name</label><input id="n" value={f.name} onChange={set('name')} className={inp('name')}/>{err.name&&<p role="alert" className="mt-1 text-xs text-red-600">{err.name}</p>}</div>}
<div><label htmlFor="e" className="text-sm font-semibold">Email</label><input id="e" type="email" value={f.email} onChange={set('email')} className={inp('email')}/>{err.email&&<p role="alert" className="mt-1 text-xs text-red-600">{err.email}</p>}</div>
<div><label htmlFor="p" className="text-sm font-semibold">Password</label><div className="relative"><input id="p" type={show?'text':'password'} value={f.pw} onChange={set('pw')} className={inp('pw')+' pr-11'}/><button type="button" aria-label={show?'Hide password':'Show password'} onClick={()=>setShow(!show)} className="absolute right-3 top-1/2 -translate-y-1/2 text-mute">{show?<EyeOff size={18}/>:<Eye size={18}/>}</button></div>{err.pw&&<p role="alert" className="mt-1 text-xs text-red-600">{err.pw}</p>}</div>
<button className={bc()+' w-full'}>{up?'Create account':'Sign in'}</button></form>
<p className="mt-5 text-center text-sm text-mute">{up?'Already have an account?':'New to IntelliHire?'} <Link className="font-semibold text-brand" to={up?'/signin':'/signup'}>{up?'Sign in':'Create one'}</Link></p></div></main>}
