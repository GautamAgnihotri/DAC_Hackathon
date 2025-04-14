import React from 'react'
import './Login'
function Login() {
    return (
        <div className="container">
            <div >
                <div className='heading'>Login</div>
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
                                <td colSpan="2" className='buttons'>
                                    <button className="button">Sign in</button>
                                    <button className="button">Sign up</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default Login
