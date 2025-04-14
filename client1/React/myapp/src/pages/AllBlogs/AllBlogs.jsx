import React from 'react'
import './AllBlogs.css'

function AllBlogs() {
    return (
        <div className='container'>
            <div>
                <div className='heading'>All Blogs</div>
                <div className='inner-container'>
                    <div>
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
                                    <td className="menu-option">Find Blog</td>
                                </tr>
                                <tr>
                                    <td className="menu-option">Categories</td>
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
    )
}

export default AllBlogs
