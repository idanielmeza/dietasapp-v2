import {Routes, BrowserRouter, Route} from 'react-router-dom';
import AuthState from './context/auth/authState';

import Login from './components/auth/Login';
// import Signup from './components/auth/Signup';

import Layout from './components/layout/Layout';

import Profile from './components/user/Profile';
import Dieta from './components/dieta/Dieta';
import Home from './components/home/HomePage';

import PrivateRoute from './routes/privateRoute';
import LoginRoute from './routes/loginRoute';


const App = () => {
  return ( 
    <AuthState>
    <BrowserRouter>
      <Routes>

        <Route path="/" element={
          <PrivateRoute>
            <Layout>
              <Home />
            </Layout>
          </PrivateRoute>

        } />

        <Route path="/auth/signin" element={
          <LoginRoute>
            <Login />
          </LoginRoute>
        }/>


        <Route path="/profile" element={
          <PrivateRoute>
          <Layout>
            <Profile/>
          </Layout>
          </PrivateRoute>
        }/>

        <Route path="/dieta" element={
          <PrivateRoute>
          <Layout>
            <Dieta/>
          </Layout>
          </PrivateRoute>
        }/>

        
        
      </Routes>
    </BrowserRouter>
    </AuthState>
        
   );
}
 
export default App;
