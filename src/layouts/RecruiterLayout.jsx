import {LayoutDashboard,User} from 'lucide-react'
import Shell from '../components/DashboardSidebar'
export default()=><Shell dark who="Admin" items={[['/admin','Dashboard',LayoutDashboard,true],['/admin/candidates/ayesha-khan','Top candidate',User]]}/>
