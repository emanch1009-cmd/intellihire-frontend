import {Routes,Route,Link,useLocation,Navigate} from 'react-router-dom'
import {useUser} from './data/auth'
import AdminLogin from './pages/AdminLogin'
import {Navbar,Footer,bc} from './components/ui'
import Home from './pages/Home'
import Auth from './pages/Auth'
import CandidateLayout from './layouts/CandidateLayout'
import RecruiterLayout from './layouts/RecruiterLayout'
import CandidateDashboard from './pages/CandidateDashboard'
import CVAnalysis from './pages/CVAnalysis'
import InterviewRoom from './pages/InterviewRoom'
import InterviewFeedback from './pages/InterviewFeedback'
import RecruiterDashboard from './pages/RecruiterDashboard'
import CandidateDetails from './pages/CandidateDetails'
function Soon(){const p=useLocation().pathname;return <main className="mx-auto max-w-xl px-5 py-24 text-center"><p className="text-sm font-semibold text-brand">Not available yet</p><h1 className="mt-2 text-3xl font-extrabold">{p} is planned</h1><p className="mt-3 text-mute">This page (contact, legal) is not part of the current build.</p><Link to="/" className={bc('primary')+' mt-6'}>Back to home</Link></main>}
const G=({role,to,children})=>useUser()?.role===role?children:<Navigate to={to} replace/>
export default function App(){const {pathname}=useLocation();const portal=/^\/(candidate|admin|interview)/.test(pathname),auth=portal||pathname.startsWith('/sign')
return <>{!portal&&<Navbar/>}<Routes><Route path="/" element={<Home/>}/><Route path="/signin" element={<Auth mode="signin"/>}/><Route path="/signup" element={<Auth mode="signup"/>}/><Route path="/admin/login" element={<AdminLogin/>}/><Route path="/candidate" element={<G role="candidate" to="/signin"><CandidateLayout/></G>}><Route index element={<CandidateDashboard/>}/><Route path="cv" element={<CVAnalysis/>}/><Route path="feedback" element={<InterviewFeedback/>}/></Route><Route path="/admin" element={<G role="admin" to="/admin/login"><RecruiterLayout/></G>}><Route index element={<RecruiterDashboard/>}/><Route path="candidates/:id" element={<CandidateDetails/>}/></Route><Route path="/interview" element={<G role="candidate" to="/signin"><InterviewRoom/></G>}/><Route path="*" element={<Soon/>}/></Routes>{!auth&&<Footer/>}</>}
