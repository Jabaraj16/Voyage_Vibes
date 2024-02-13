import React, { useState } from 'react'
import Header from '../Components/Header'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { loginAPI, registerAPI } from '../../Services/allAPI';
import Spinner from 'react-bootstrap/Spinner';
function Auth({ insideRegister }) {
  const [SpinnerStatus,setSpinnerStatus]=useState(false)
  const navigate=useNavigate()
  const [userData,setUserData]=useState({
    username:"",email:"",password:""
  })
  const handleRegister=async(e)=>{
    e.preventDefault()
    const {username,email,password}=userData
    if(!username || !email || !password){
      toast.error("Please fill the form")
    }else{
      try{
        const result=await registerAPI(userData)
        console.log(result);
        if(result.status==200){
          toast.success("User registration Sucessfully")
         
          setTimeout(()=>{
            navigate('/login')
          },3000)
          setUserData({username:"",email:"",password:""})
        }else{
          toast.warning(result.response.data)
        }
      }catch(err){
        console.log(err);
      }
    }
  }
  const handleLogin=async(e)=>{
    e.preventDefault()
    const {email,password}=userData
    if(!email || !password){
      toast.error("Please fill the form")
    }else{
      try{
        const result=await loginAPI({email,password})
        console.log(result);
        if(result.status==200){
          setSpinnerStatus(true)
          sessionStorage.setItem("username",result.data.existingUser.username)
          sessionStorage.setItem("token",result.data.token)
          setTimeout(()=>{
            navigate('/')
          },2000)
        }else{
          toast.error(result.response.data)
        }
      }catch(err){
        console.log(err);
      }
    }
  }

  return (
    <div className='bg-image w-100  d-flex justify-content-center align-items-center ' style={{ height: '100vh' }}>
      {/* <Header/>  */}
      <div className='rounded form_box  border shadow bg-white d-flex justify-content-center ' style={{ width: '500px', height: '500px', opacity: '0.9' }}>
        <Form className='w-75 d-flex flex-column justify-content-center ' >
        {insideRegister ? <span className='fw-bold text-center mb-5 mt-2'>Sign up to your Account</span> : <span className='fw-bold text-center mb-5'>Sign In to your Account</span>}
          <Form.Group className="mb-3" controlId="formBasicName">
            {insideRegister &&
              
                <Form.Control type="text" value={userData.username} placeholder="username" onChange={(e)=>setUserData({...userData,username:e.target.value})} />
              }
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            
              <Form.Control type="email" placeholder="name@example.com" value={userData.email} onChange={(e)=>setUserData({...userData,email:e.target.value})} />
           
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">

              <Form.Control value={userData.password} type="password" placeholder="Password" onChange={(e)=>setUserData({...userData,password:e.target.value})} />
           
          </Form.Group>
          
         
          
         {insideRegister?<Button variant="primary" type="submit" onClick={handleRegister}>
            Register
          </Button>: <Button variant="primary" type="submit" onClick={handleLogin}>
            Login 
          </Button>
          }

          <div className='text-center mt-4'>
          {
            SpinnerStatus &&
            <Spinner animation="border" variant="info" />
          }
          </div>
        
          
        <div className='text-end mt-3'>
            {insideRegister? 
              <div>
               Already registerd? please <Link to={'/login'}><span className=''>Login</span></Link>
            </div>:
            <div>
            <p>New User?Click here to <Link to={'/register'}>Register</Link></p>
          </div>
            }
        </div>
        </Form>

      </div>
      <ToastContainer autoClose={3000} theme='colored' />
    </div>
  )
}

export default Auth