
import './App.css'
import Login from './components/Login'
import Profile from './components/Profile'
import UserContextProvider from './context/contextprovider'

function App() {
  

  return (
    <UserContextProvider>
      <h1 className='bg-gray-500'>Context API</h1>
     <Login/>
     <Profile/>
    </UserContextProvider>
  )
}

export default App
