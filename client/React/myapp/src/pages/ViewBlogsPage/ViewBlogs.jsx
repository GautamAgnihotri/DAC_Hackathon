import React from 'react'
import './ViewBlogs.css'

function ViewBlogs() {
  return (
    <div>
      <table className="table" border="1">
            <thead className="heading">
                <tr>
                    <th rowSpan="2">All Blogs / My Blogs</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>My Blogs</td>
                    <td rowSpan="7">
                        <div>
                            <table className="table" border="1">
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Title</th>
                                        <th>Category</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td><button>Action</button></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td><button>Action</button></td>
                                    </tr>
                                    <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td><button>Action</button></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </td>
                </tr>
                <tr>
                    <td>All Blogs</td>
                </tr>
                <tr>
                    <td>Add Category</td>
                </tr>
                <tr>
                    <td>Show Categories</td>
                </tr>
                <tr>
                    <td>Add Blog</td>
                </tr>
                <tr>
                    <td>Search Blogs</td>
                </tr>
                <tr>
                    <td>Logout</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default ViewBlogs
