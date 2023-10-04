import {
	RouterProvider,
	createBrowserRouter,
	createRoutesFromElements,
	Route,
} from "react-router-dom"
import Layout from "./components/Layout"
import Login from "./pages/Login"
import Home from "./pages/Home"

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path="/"
			element={<Layout />}
		>
			<Route
				index
				element={<Home />}
			/>
			<Route
				path="login"
				element={<Login />}
			/>
		</Route>,
	),
)

export default function App() {
	return <RouterProvider router={router} />
}
