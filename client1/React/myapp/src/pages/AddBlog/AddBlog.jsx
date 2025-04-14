import React,{useState} from 'react'
import './AddBlog.css'
import Categories from '../Categories/Categories'


function AddBlog() {
    const validate = () =>{
        return
    }
    const [into, setInfo]=useState({
        title: '',
        content:'',
        Category: 0
    })
    return (
        <div className='container'>
            <div>
                <div className='heading'>Add Blog</div>
                <div className='body inner-container'>
                    <div>
                        <table>
                            <tbody>
                                <tr>
                                    <td className="menu-option">Add Blog</td>
                                </tr>
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
                                    <td className="menu-option">Categories</td>
                                </tr>
                                <tr>
                                    <td className="menu-option">Logout</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    <div className='display-blog-content'>
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
                                <button onClick={validate} className='button'>Add Blog</button>
                                <button className='button'>Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddBlog
