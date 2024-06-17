
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/blog/Home'
import Register from './pages/auth/Register'
import Login from './pages/auth/Login'
import AddBlog from './pages/blog/AddBlog'
import EditBlog from './pages/blog/EditBlog'
import { Provider } from 'react-redux'
import store from '../store/store'
import Protected from './Protected'
import { Suspense, lazy ,ErrorBoundary } from 'react'
const SingleBlog = lazy(() => import('./pages/blog/SingleBlog'));

const ErrorFallBack = (error) => {
  return (
    <>
    <h1>Something Went Wrong...</h1>
    <h2>{error.message}</h2>
    </>
  )
}

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
     <ErrorBoundary FallbackComponent={ErrorFallBack} >
     <Suspense fallback={<h1>Loading...</h1>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path = '/blog/add' element={<Protected><AddBlog /></Protected>} />
        <Route path='/blog/edit/:id' element={<Protected><EditBlog /></Protected>} />
        <Route path='/blog/:id' element={<Protected><SingleBlog /></Protected>} />
      </Routes>
      </Suspense>
     </ErrorBoundary>
    </BrowserRouter>
    </Provider>
  )
}

export default App
