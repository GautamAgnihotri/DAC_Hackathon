import { useState } from 'react'
import './App.css'
import Login from './pages/LoginPage/Login'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Register from './pages/RegisterPage/Register'
import MenuBoard from './pages/MenuBoardPage/MenuBoard'
import BlogDetails from './pages/BlogDetailsPage/BlogDetails'
import CreateEditBlog from './pages/AddBlogPage/AddBlog'
import SearchBlog from './pages/SearchBlogPage/SearchBlog'
import ViewBlogs from './pages/ViewBlogsPage/ViewBlogs'



function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} /> 
        <Route path='register' element={<Register />} /> 
        <Route path='menu-board' element={<MenuBoard />} /> 
        <Route path='blog-details' element={<BlogDetails />} /> 
        <Route path='create-edit-blog' element={<CreateEditBlog />} /> 
        <Route path='search-blog' element={<SearchBlog />} /> 
        <Route path='view-blog' element={<ViewBlogs />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App
