import './App.css';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';
import { useState } from 'react';

function App() {

  const [name, setName] = useState("")
  const [mail, setMail] = useState("")
  const [phone, setPhone] = useState("")
  const [password, setPassword] = useState("")

  const [isName, setIsName] = useState(true)
  const [isMail, setIsMail] = useState(true)
  const [isPhone, setIsPhone] = useState(true)
  const [ispswd, setIsPswd] = useState(true)

  const getValidate1 = (e)=>{
        const {value} = e.target
        if(!!value.match(/^[A-Za-z]+$/)){
          setName(value)
          setIsName(true)
        } 
        else{
          setName(value)
          setIsName(false)  
        } 
  }

  const getValidate2 = (e)=>{
    const {name, value} = e.target
    if(value.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/)){
      setMail(value)
      setIsMail(true)
    }
    else{
      setMail(value)
      setIsMail(false)
    }
  } 

  const getValidate3 = (e)=>{
    const {name, value} = e.target
    if(!!value.match(/^[0-9]+$/)){
      if(value.length==10){
        setPhone(value)
        setIsPhone(true)
    }
    else{
      setPhone(value)
      setIsPhone(false)
    }
    }
    else{
      setPhone(value)
      setIsPhone(false)
    }
  }

  const getValidate4 = (e)=>{
    const {value} = e.target
    if(value.match(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/))
    {
      setPassword(value)
      setIsPswd(true)
    }
    else{
      setPassword(value)
      setIsPswd(false)
    }
    
  }

  const handleSubmit = (e)=>{
    e.preventDefault()
    if(!name || !mail || !phone || !password){
      alert('Please fill the form completely')
    }
    else{
      alert(`Hello ${name}, your registration has been successful`)
    }
  }

  const handleClear = (e)=>{
      setName("")
      setPassword("")
      setMail("")
      setPhone("")
      setIsName(true)
      setIsMail(true)
      setIsPswd(true)
      setIsPhone(true)
  }

  return (
    <div style={{height:'100vh'}} className='main d-flex justify-content-center align-items-center flex-column w-100'>
      <div className='submain p-5'>

        <div className='header'>
          <h1 className='text-center'>REGISTRATION FORM</h1>
          <h5 className='text-center mt-3'>Please take a moment to fill out this form !</h5>
        </div>
     

      <form onSubmit={handleSubmit} className='form mt-5'>

      <div className='mb-4'>
      <TextField name='name' value={name} type='text' className='w-100 bg-light rounded' onChange={(e)=>getValidate1(e)} id="outlined-basic" placeholder='Enter your name' variant="outlined" autocomplete />
      </div>
      { !isName &&
        <div>
        <p className='text-danger fw-bolder'>* Invalid input</p>
      </div>
      }

      <div className='mb-4'>
      <TextField name='mail' value={mail} type='text' className='w-100 bg-light rounded' onChange={(e)=>getValidate2(e)} id="outlined-basic" placeholder='Enter e-mail id' variant="outlined" autocomplete/>
      </div>
      { !isMail &&
        <div>
        <p className='text-danger fw-bolder'>* Invalid input</p>
      </div>
      } 

      <div className='mb-4'>
      <TextField name='phone' value={phone} type='text' className='w-100 bg-light rounded' onChange={(e)=>getValidate3(e)} id="outlined-basic" placeholder='Enter phone number' variant="outlined" autocomplete/>
      </div>
      { !isPhone &&
        <div>
          <p className='text-danger fw-bolder'>* Invalid input</p>
        </div>
      }
     
      <div className='mb-4'>
      <TextField value={password} type='password' className='w-100 bg-light rounded' onChange={(e)=>getValidate4(e)} id="outlined-basic" placeholder='Enter password' variant="outlined" autocomplete/>
      </div>
      { !ispswd &&
       <div>
        <p className='text-danger fw-bolder'>* Invalid input</p>
      </div>}

      <div className='d-flex justify-content-evenly'>
      <Button type='submit' disabled={isName && isMail && isPhone && ispswd?false:true} style={{width:'150px'}} className='bg-success' variant="contained">Register</Button>
      <Button onClick={handleClear} style={{width:'150px'}} className='bg-danger' variant="contained">Clear</Button>
      </div>
  
      </form>
      
      </div>
    </div>
  );
}

export default App;
