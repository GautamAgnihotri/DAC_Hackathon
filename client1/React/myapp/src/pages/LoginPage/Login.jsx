import React from 'react'
import './Login'
function Login() {
    console.log(config.url);
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const navigate = useNavigate();
    const  onLogin = async()=>{
        console.log("Login function called");
        console.log(email , password);
        try{
            const response = await axios.post(config.url+"/user/signin",{
                email:email,
                password:password
            })
            console.log(response);
            if(response.data.status == 'success'){
                toast.success("Signin Successfully");
                navigate('/')
            }else{
                toast.warn("Invalid email or password");
            }
        } catch(e){
            console.log("error occured while login :"+e);
            toast("Something went wrong !!")

        }
       
    }
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
