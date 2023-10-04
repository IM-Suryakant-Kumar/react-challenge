import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { login } from "../features/auth/authSlice"
import { useNavigate } from "react-router-dom"

const Login = () => {
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	})
    
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const user = useSelector(state => state.user)


	const inputHandler = (e) => {
		const { name, value } = e.target
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}))
	}

	const submitHandler = (e) => {
		e.preventDefault()
		dispatch(login(formData))
        navigate("/", { replace: true })
	}

	return (
		<div className="flex justify-center items-center flex-col h-screen font-serif">
			<h1 className="text-3xl font-medium text-center mb-8 text-blue-500">Login Form</h1>
			<form
				className="flex flex-col w-1/3 max-w-xs"
				onSubmit={submitHandler}
			>
				<input
					className="border-b-2 outline-none pb-2 mb-10"
					name="email"
					type="email"
					id="email"
					placeholder="Email"
					value={formData.email}
					onChange={inputHandler}
				/>
				<input
					className="border-b-2 outline-none mb-10"
					name="password"
					type="password"
					id="password"
					placeholder="Password"
					value={formData.password}
					onChange={inputHandler}
				/>
				<button
					className="bg-blue-500 py-1 font-medium text-white rounded-sm"
					type="submit"
				>
					Submit
				</button>
			</form>
		</div>
	)
}

export default Login
