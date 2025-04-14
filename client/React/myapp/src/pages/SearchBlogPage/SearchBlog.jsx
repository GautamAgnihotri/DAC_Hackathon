import React from 'react'
import './SearchBlog.css'

function SearchBlog() {
  return (
    <div>
      <table className="table" border="1">
            <thead className="heading">
                <tr>
                    <th colSpan="2">All Blogs / My Blogs</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className='menu-option'>My Blogs</td>
                    <td rowSpan="7">
                        <div>
                            <table border="1">
                                <tbody>
                                    <tr>
                                        <td colSpan="4">
                                            <div>
                                            <label htmlFor="title">Keywords: </label>
                                            <input type="text" name id="title" className='input' />
                                            <img src="" alt="" />
                                        </div>
                                    </td>
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
                    <td className='menu-option'>All Blogs</td>
                </tr>
                <tr>
                    <td className='menu-option'>Add Category</td>
                </tr>
                <tr>
                    <td className='menu-option'>Show Categories</td>
                </tr>
                <tr>
                    <td className='menu-option'>Add Blog</td>
                </tr>
                <tr>
                    <td className='menu-option'>Search Blogs</td>
                </tr>
                <tr>
                    <td className='menu-option'>Logout</td>
                </tr>
            </tbody>
        </table>
    </div>
  )
}

export default SearchBlog
