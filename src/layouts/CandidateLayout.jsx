import {LayoutDashboard,FileSearch,Bot,ClipboardCheck} from 'lucide-react'
import Shell from '../components/DashboardSidebar'
import {useUser} from '../data/auth'
export default()=>{const u=useUser();return <Shell who={u?.name||'Candidate'} items={[['/candidate','Dashboard',LayoutDashboard,true],['/candidate/cv','CV Analysis',FileSearch],['/interview','AI Interview',Bot],['/candidate/feedback','Feedback',ClipboardCheck]]}/>}
