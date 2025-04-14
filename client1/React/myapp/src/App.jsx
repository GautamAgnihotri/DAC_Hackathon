import { useState } from 'react'
import './App.css'
import Login from './pages/LoginPage/Login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from './pages/RegisterPage/Register'
import AllBlogs from './pages/AllBlogs/AllBlogs'
import AddBlog from './pages/AddBlog/AddBlog'
import MyBlogs from './pages/MyBlogs/MyBlogs'
import FindBlog from './pages/FindBlog/FindBlog'
import Categories from './pages/Categories/Categories'
import EditBlog from './pages/EditBlog/EditBlog'


function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} /> 
        <Route path='register' element={<Register />} /> 
        <Route path='add-blog' element={<AddBlog />} /> 
        <Route path='my-blogs' element={<MyBlogs />} /> 
        <Route path='all-blogs' element={<AllBlogs />} /> 
        <Route path='find-blog' element={<FindBlog />} /> 
        <Route path='categories' element={<Categories />} /> 
        <Route path='edit-blog' element={<EditBlog />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App
