import React from 'react'
import './MenuBoard.css'

function MenuBoard() {
    return (
        <div>
            <div className='container'>
                <div>
                    <div className='heading'>Blogging App</div>
                    <div className='body'>
                        <table>
                            <tbody>
                                <tr>
                                    <td>My Blogs</td>
                                    <td rowSpan="7" className="details-part"></td>
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
        </div>
    )
}

export default MenuBoard
