import React from 'react'
import './MyBlogs.css'

function MyBlog() {
  return (
    <div>
            <div className='container'>
                <div>
                    <div className='heading'>My Blogs</div>
                    <div className='body inner-container'>
                        <div >
                            <table>
                                <tbody>
                                    <tr>
                                        <td className="menu-option">Add Blog</td>
                                    </tr>
                                    <tr>
                                        <td>My Blogs</td>
                                    </tr>
                                    <tr>
                                        <td className="menu-option">All Blogs</td>
                                    </tr>
                                    <tr>
                                        <td className="menu-option">Add Category</td>
                                    </tr>
                                    <tr>
                                        <td className="menu-option">Show Categories</td>
                                    </tr>
                                    <tr>
                                        <td className="menu-option">Search Blogs</td>
                                    </tr>
                                    <tr>
                                        <td className="menu-option">Logout</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className='display-blog-content'>
                            <table border="1" >
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Title</th>
                                        <th>Category</th>
                                        <th>Date</th>
                                        <th>Author</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default MyBlog
