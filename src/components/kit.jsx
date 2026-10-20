import {useEffect} from 'react'
import {X} from 'lucide-react'
export const Card=({className='',...p})=><div className={`rounded-2xl border border-line bg-white p-5 ${className}`} {...p}/>
export const Bar=({v,color})=><div className="h-2 overflow-hidden rounded-full bg-lav"><div className={`h-full rounded-full ${color||'bg-gradient-to-r from-brand to-violet2'}`} style={{width:v+'%'}}/></div>
export const Stat=({l,v,sub})=><Card><p className="text-sm text-mute">{l}</p><p className="mt-1 text-3xl font-extrabold">{v}</p>{sub&&<p className="text-xs text-mute">{sub}</p>}</Card>
const TONE={Shortlisted:'bg-emerald-50 text-emerald-700','In review':'bg-lav text-brand',New:'bg-slate-100 text-slate-600',Rejected:'bg-red-50 text-red-700'}
export const Pill=({s})=><span className={`rounded-full px-2.5 py-0.5 text-xs font-semibold ${TONE[s]||TONE.New}`}>{s}</span>
export const Chips=({a})=><div className="flex flex-wrap gap-2">{a.map(s=><span key={s} className="rounded-full bg-lav px-3 py-1 text-xs font-semibold text-brand">{s}</span>)}</div>
export const Demo=({children})=><p className="rounded-xl bg-amber-50 px-4 py-2 text-xs text-amber-800">{children}</p>
export function Modal({open,onClose,title,children}){useEffect(()=>{if(!open)return;const h=e=>e.key==='Escape'&&onClose();addEventListener('keydown',h);return()=>removeEventListener('keydown',h)},[open,onClose]);if(!open)return null
return <div className="fixed inset-0 z-50 grid place-items-center bg-ink/50 p-4" onClick={onClose}><div role="dialog" aria-modal="true" aria-label={title} onClick={e=>e.stopPropagation()} className="w-full max-w-md rounded-2xl bg-white p-6"><div className="mb-4 flex items-center justify-between"><h3 className="font-bold">{title}</h3><button aria-label="Close" onClick={onClose}><X size={18}/></button></div>{children}</div></div>}
