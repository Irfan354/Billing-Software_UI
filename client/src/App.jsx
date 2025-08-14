import { Routes, Route } from 'react-router-dom';
import Menubar from './components/Menubar/Menubar';
import Dashboard from './pages/Dashboard/Dashboard';
import Explore from './pages/Explore/Explore';
import ManageCategory from './pages/ManageCategory/ManageCategory';
import ManageItems from './pages/ManageItems/ManageItems';
import ManageUsers from './pages/ManageUsers/ManageUsers';
import {Toaster} from 'react-hot-toast';

const App = () => {
  return (
      <div>
        <Menubar />
        <Toaster/>
        <Routes> {/* Routes component wraps the Route components */}
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/category" element={<ManageCategory />} />
          <Route path="/users" element={<ManageUsers />} />
          <Route path="/items" element={<ManageItems />} />
          <Route path="/explore" element={<Explore />} />
        </Routes>
      </div>
  );
};

export default App;
