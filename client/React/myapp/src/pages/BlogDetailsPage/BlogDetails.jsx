import React from 'react'
import './BlogDetails.css'

function BlogDetails() {
  return (
    <div>
      <table className="table" border="1">
            <thead className="heading">
                <tr>
                    <th colSpan="2">Blog Details</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="menu-option">My Blogs</td>
                    <td rowSpan="7">
                        <div className="details-part">
                            Blog Title :
                        </div>
                        <div>Contents : </div>
                    </td>
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
                    <td className="menu-option">Add Blog</td>
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
  )
}

export default BlogDetails
