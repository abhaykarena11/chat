import { Link } from 'react-router-dom';
import FormLogin from './FormLogin';

export default function Login() {
  return (
    <div className='min-h-screen gradient-bg flex justify-center items-center p-4'>
      <div className="glass w-full max-w-md p-8 rounded-2xl shadow-glow">
        <div className="text-center mb-8">
          <div className="text-4xl mb-4">💬</div>
          <h2 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Welcome Back
          </h2>
          <p className="text-white/70 mt-2">Sign in to continue chatting</p>
        </div>
        
        <FormLogin />
        
        <div className="text-center mt-6">
          <p className="text-white/70">
            Don't have an account?&nbsp;  
            <Link to="/signup" className='text-purple-300 hover:text-pink-300 smooth-transition font-semibold'>
              Sign up
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}
