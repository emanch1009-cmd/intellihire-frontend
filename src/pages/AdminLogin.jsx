import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import {Lock} from 'lucide-react'
import {bc,Logo} from '../components/ui'
import {login} from '../data/auth'
export default function AdminLogin(){const nav=useNavigate(),[e,setE]=useState(''),[p,setP]=useState(''),[err,setErr]=useState('')
const go=ev=>{ev.preventDefault();if(e==='admin@intellihire.demo'&&p==='Admin@123'){login({role:'admin',name:'Admin'});nav('/admin')}else setErr('Invalid admin credentials.')}
return <main className="grid min-h-screen place-items-center bg-ink px-5"><form onSubmit={go} className="w-full max-w-sm rounded-2xl bg-white p-8"><Logo/><h1 className="mt-6 flex items-center gap-2 text-xl font-extrabold"><Lock size={18}/>Admin sign in</h1><p className="mt-1 text-xs text-mute">Staff only. Demo credentials: admin@intellihire.demo / Admin@123</p>
<label htmlFor="ae" className="mt-5 block text-sm font-semibold">Email</label><input id="ae" value={e} onChange={x=>setE(x.target.value)} className="mt-1 w-full rounded-xl border border-line px-4 py-3 text-sm"/>
<label htmlFor="ap" className="mt-4 block text-sm font-semibold">Password</label><input id="ap" type="password" value={p} onChange={x=>setP(x.target.value)} className="mt-1 w-full rounded-xl border border-line px-4 py-3 text-sm"/>
{err&&<p role="alert" className="mt-3 text-xs text-red-600">{err}</p>}<button className={bc()+' mt-5 w-full'}>Sign in</button></form></main>}
