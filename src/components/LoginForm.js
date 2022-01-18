import React from 'react'
import './LoginForm.css'
import { useState } from 'react'

function LoginForm(props) {
	const [userInfo, setUserInfo] = useState({
		username: '',
		email: '',
		password: '',
	})

	const onChangeUserInfoHandler = (e) => {
		const currentData = e.target.name
		setUserInfo((prevState) => {
			return {
				...prevState,
				[currentData]: e.target.value,
			}
		})
	}

	const onLoginHandler = (e) => {
		e.preventDefault()
		console.log(userInfo)
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
				name='username'
				value={userInfo.username}
				onChange={onChangeUserInfoHandler}
			/>

			<label className='Label'>User Email</label>
			<input
				className='Input'
				type='text'
				placeholder='Email or Phone'
				id='userEmail'
				value={userInfo.email}
				name='email'
				onChange={onChangeUserInfoHandler}
			/>

			<label className='Label'>Password</label>
			<input
				className='Input'
				type='password'
				placeholder='Password'
				id='password'
				value={userInfo.password}
				name='password'
				onChange={onChangeUserInfoHandler}
			/>

			<button type='sumbit' className='Login__button'>
				Login
			</button>
		</form>
	)
}

export default LoginForm
