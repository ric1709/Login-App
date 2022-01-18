import React from 'react'
import './LoginForm.css'
import { useState } from 'react'

function LoginForm(props) {
	const [username, setUsername] = useState('')
	const [email, setEmail] = useState('')
	const [password, SetPassword] = useState('')

	const onChangeUsernameHandler = (e) => {
		setUsername(e.target.value)
	}
	const onChangeEmailHandler = (e) => {
		setEmail(e.target.value)
	}
	const onChangePasswordHandler = (e) => {
		SetPassword(e.target.value)
	}
	const onLoginHandler = (e) => {
		e.preventDefault()
        const showData = {
			username:username,
            email:email,
            password:password
		}
        console.log(showData)
	}

	return (
		<form className='Form' onSubmit={onLoginHandler}>
			<h3 className='H3'>Login Here</h3>

			<label className='Label'>Username</label>
			<input
				className='Input'
				type='text'
				placeholder='Username or Nickname'
				id='username'
				value={username}
				onChange={onChangeUsernameHandler}
			/>

			<label className='Label'>User Email</label>
			<input
				className='Input'
				type='text'
				placeholder='Email or Phone'
				id='userEmail'
				value={email}
				onChange={onChangeEmailHandler}
			/>

			<label className='Label'>Password</label>
			<input
				className='Input'
				type='password'
				placeholder='Password'
				id='password'
				value={password}
				onChange={onChangePasswordHandler}
			/>

			<button type='sumbit' className='Login__button'>
				Login
			</button>
		</form>
	)
}

export default LoginForm
