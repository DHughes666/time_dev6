import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/login';
import Register from './pages/register';
import Contact from './pages/contact'
import Timetable from './components/viewTimetable';
import ErrorPage from './pages/error';
import EditTimetable from './components/editTimetable';
import Header from './components/header';
import ProtectedRoute from './components/protectedRoute';
import RoleProtectedRoute from './components/roleProtectedRoute';
import ApproveTimetableChanges from './components/approveTimetableChanges';
import ApprovalProtectedRoute from './components/approvalProtectedRoute';
import Footer from './components/footer';


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route basename={process.env.PUBLIC_URL}/>
        <Route exact element={<Header />}>
          <Route path="/time_dev6" element={<Home />} />
          <Route path="" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path='/timetable' element={<Timetable />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route
          path="/editTimetable"
            element={
              <ProtectedRoute>
                <RoleProtectedRoute>
                  <EditTimetable />
                </RoleProtectedRoute>
              </ProtectedRoute>
            }
          />
          <Route path="/approveTimetable"
            element={
              <ProtectedRoute>
                <ApprovalProtectedRoute>
                  <ApproveTimetableChanges />
                </ApprovalProtectedRoute>
              </ProtectedRoute>
            } />
          <Route path="/*" element={<ErrorPage />} />
        </Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
