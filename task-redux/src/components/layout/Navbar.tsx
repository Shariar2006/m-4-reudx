import logo from '@/assets/logo2.png'
import { Link } from 'react-router'
import { ModeToggle } from '../mode-toggle'

export default function Navbar() {
    return (
        <div className='flex items-center justify-between px-5 py-3'>
            <div className='flex items-center gap-2'>
                <img className='w-10 h-10' src={logo} alt="logo" />
                <h5 className='text-xl'><b>Task</b> Manager</h5>
            </div>
            <div className='flex items-center gap-5'>
                <Link to={'/task'} className='text-lg font-semibold hover:underline'>Task</Link>
                <Link to={'/user'} className='text-lg font-semibold hover:underline'>User</Link>
            </div>
            <ModeToggle/>
        </div>
    )
}
