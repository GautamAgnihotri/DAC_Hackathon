import React from 'react'
import './EditBlog.css'

function EditBlog() {
    return (
        <div className='container'>
            <div>
                <div className='heading'>Add Blog</div>
                <div className='body inner-container'>
                    <div>
                        <table>
                            <tbody>
                                <tr>
                                    <td className="menu-option">My Blogs</td>

                                </tr>
                                <tr>
                                    <td className="menu-option">All Blogs</td>
                                </tr>
                                <tr>
                                    <td className="menu-option">Find Blog</td>
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
                                    <td className="menu-option">Logout</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='display-blog-content'>
                        <div>
                            <table>
                                <tbody>
                                    <tr>
                                        <td><label htmlFor="blogid" className='label'>Blog Id: </label></td>
                                        <td><input type="text" className='button input' id='blogid' /></td>
                                    </tr>
                                    <tr>
                                        <td><label htmlFor="title" className='label'>Title: </label></td>
                                        <td><input type="text" className='button input' id='title' /></td>
                                    </tr>
                                    <tr>
                                        <td><label htmlFor="category" className='label'>Category: </label></td>
                                        <td>
                                            <select name="category" id="category" className='button input'>
                                                <option value="1">Nature</option>
                                                <option value="2">Movie</option>
                                                <option value="3">Music</option>
                                                <option value="4">Technology</option>
                                                <option value="5">Java</option>
                                            </select>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className='buttons'>
                            <button className='button'>Add Blog</button>
                            <button className='button'>Cancel</button>
                        </div>
                        <div className='text-area'>
                            <textarea name="" id=""></textarea>
                        </div>
                        <div>
                            <button className='upload-button'>Upload Blog</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default EditBlog
