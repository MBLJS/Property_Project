import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import AppointmentBookings from './pages/AppointmentBookings';
// import Dashboard from './pages/Dashboard';
import SingleProperty from './pages/SingleProperty';
import AdminCreateProperties from './pages/AdminCreateProperties';
import AdminPropertiesStatus from './pages/AdminPropertiesStatus';
import ApprovePropertyStatus from './pages/ApprovePropertyStatus';
import PropertyPage from './pages/PropertyPage-admin';
import ViewWishlist from './pages/ViewWishlist';
import Admin from './pages/Admin';
import NewUser from './pages/NewUser';
import CreateAgent from './pages/CreateAgent';
import Login from './pages/Login';
import AdminCreatePropertiesIMG from './pages/AdminCreatePropertyIMG';

function App() {

  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />}/>
        <Route path="/dashboard" element={<Admin />}/>

        <Route path="/appointments" element={<AppointmentBookings />}/>
        <Route path="/single-property" element={<SingleProperty />}/>
        <Route path="/create-properties" element={<AdminCreateProperties />}/>

        <Route path="/create-user" element={<NewUser />}/>
        <Route path="/create-agent" element={<CreateAgent />}/>

        <Route path="/view-properties"  element={<PropertyPage />}/>
        <Route path="/pending-approvals" element={<ApprovePropertyStatus />}/>
        <Route path="/property-status" element={<AdminPropertiesStatus />}/>
        <Route path="/wishlist" element={<ViewWishlist />}/>
        <Route path="/admin-add-image" element={<AdminCreatePropertiesIMG />}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App