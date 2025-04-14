import React from 'react'
import './Register.css'

function Registration() {
    return (
        <div className='container'>
            <div>
                <div className='heading'>Register</div>
                <div className='body'>
                    <table>
                        <tbody>
                            <tr>
                                <td className="label"><label htmlFor="email">Email</label></td>
                                <td className="input"><input type="email" id="email" /></td>
                            </tr>
                            <tr>
                                <td className="label"><label htmlFor="password">Password</label></td>
                                <td className="input"><input type="password" id="password" /></td>
                            </tr>
                            <tr>
                                <td className="label"><label htmlFor="fullname">Full Name</label></td>
                                <td className="input"><input type="text" id="fullname" /></td>
                            </tr>
                            <tr>
                                <td className="label"><label htmlFor="Phone">Phone No</label></td>
                                <td className="input"><input type="tel" id="phone" /></td>
                            </tr>
                            <tr>
                                <td colSpan="2" className='buttons'>
                                    <button className="button">Sign up</button>
                                    <button className="button">Sign in</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Registration
