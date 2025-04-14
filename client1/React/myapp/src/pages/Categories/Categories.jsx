import React from 'react'
import './Categories.css'

function Categories() {
    return (
        <div className='container'>
            <div>
                <div className='heading'>Categories</div>
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
                        <div>
                            <label htmlFor="">Category: </label>
                            <input type="text" className='input'/>
                            <div className='button'>
                                <button className='add-Category-Button'>Add Category</button>
                            </div>
                        </div>
                        <div>
                            <table border="1" >
                                <thead>
                                    <tr>
                                        <th>Id</th>
                                        <th>Category</th>
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

export default Categories
