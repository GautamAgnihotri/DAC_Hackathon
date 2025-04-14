import React from 'react'
import './AddBlog.css'

function CreateEditBlog() {
    return (
        <div className='container'>
            <div>
                <div className='heading'>Blogging App</div>
                <div className='body'>
                    <table>
                        <tbody>
                            <tr>
                                <td className="menu-option">My Blogs</td>
                                <td rowSpan="7">
                                    <div className="details-part">
                                        <div>
                                            <label htmlFor="title">Title: </label>
                                            <input type="text" name id="title" />
                                        </div>
                                        <div>
                                            <div><label htmlFor>Contents: </label></div>
                                            <textarea name id></textarea>
                                        </div>
                                        <div>
                                            <label htmlFor="category">Category: </label>
                                            <select name="category" id="category">
                                                <option value="1">Nature</option>
                                                <option value="2">Movie</option>
                                                <option value="3">Music</option>
                                                <option value="4">Technology</option>
                                                <option value="5">Java</option>
                                            </select>
                                        </div>
                                        <div>
                                            <button>Add Blog</button>
                                            <button>Cancel</button>
                                        </div>
                                    </div>
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
            </div>
        </div>
    )
}

export default CreateEditBlog
