import { Routes, Route } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import BlogDetails from "./pages/BlogDetails/BlogDetails/BlogDetails";
import AuthProvider from "./pages/context/AuthProvider/AuthProvider";
import AddBlog from "./pages/Dashboard/AddBlog/AddBlog";
import AddReview from "./pages/Dashboard/AddReview/AddReview";
import AdminAddBlog from "./pages/Dashboard/AdminAddBlog/AdminAddBlog";
import Dashboard from "./pages/Dashboard/Dashboard/Dashboard";
import DashboardDefault from "./pages/Dashboard/DashboardDefault/DashboardDefault";
import MakeAdmin from "./pages/Dashboard/MakeAdmin/MakeAdmin";
import ManageBlogs from "./pages/Dashboard/ManageBlogs/ManageBlogs";
import PendingBlog from "./pages/Dashboard/PendingBlog/PendingBlog";
import Home from "./pages/Home/Home/Home";
import AdminRoute from "./pages/Login/Login/AdminRoute/AdminRoute";
import Login from "./pages/Login/Login/Login";
import PrivateRoute from "./pages/Login/PrivateRoute/PrivateRoute";
import Register from "./pages/Login/Register/Register";
import Footer from "./pages/SharedRoute/Footer/Footer";
import Navigation from "./pages/SharedRoute/Navigation/Navigation";


function App() {

  return (

    <AuthProvider>
      <BrowserRouter>
        <Navigation />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/blog-details/:blogId" element={<PrivateRoute><BlogDetails /></PrivateRoute>} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

          <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} />

          {/* nested route */}

          <Route path="/Dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>}>
            <Route path="/Dashboard" element={<DashboardDefault />}></Route>

            <Route path="ServiceReview" element={<AddReview />}></Route>

            <Route path="AddBlog" element={<AddBlog />}></Route>

            <Route path="pendingPost" element={<AdminRoute><PendingBlog /></AdminRoute>}></Route>
            <Route path="adminAddBlog" element={<AdminRoute><AdminAddBlog /></AdminRoute>}></Route>

            <Route path="MakeAdmin" element={<AdminRoute><MakeAdmin /></AdminRoute>}></Route>

            <Route path="ManageBlogs" element={<AdminRoute><ManageBlogs /></AdminRoute>}></Route>
          </Route>

        </Routes>
        <Footer />
      </BrowserRouter>
    </AuthProvider>


  );
}

export default App;
