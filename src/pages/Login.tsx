
import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'


interface LoginValues {
    email: string
    password: string
}

const LoginSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().required('Required'),
})

export default function LoginPage() {
    const navigate = useNavigate()
    const handleSubmit = (values: LoginValues) => {

        const data = JSON.parse(localStorage.getItem("userData") || "[]") || {};

        if (data[values.email.trim()]) {
            if (data[values.email].password === values.password.trim()) {
                localStorage.setItem("isAuthenticated", "true")
                navigate("/", { replace: true })
            } else {
                toast.error("Wrong Password")
            }
        } else {
            toast.error("User not found ! Please Signup")
        }
    }

    return (
        <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Sign in to your account</h2>
                </div>
                <Formik
                    initialValues={{ email: '', password: '' }}
                    validationSchema={LoginSchema}
                    onSubmit={handleSubmit}
                >
                    {({ errors, touched }) => (
                        <Form className="mt-8 space-y-6">
                            <div className="rounded-md shadow-sm -space-y-px">
                                <div>
                                    {errors.email && touched.email ? (
                                        <div className="text-red-500 text-xs mt-1 p-1 float-end">* {errors.email}</div>
                                    ) : null}
                                    <Field
                                        name="email"
                                        type="email"
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Email address"
                                    />

                                </div>
                                <div>
                                    {errors.password && touched.password ? (
                                        <div className="text-red-500 text-xs mt-1 p-1 float-end">* {errors.password}</div>
                                    ) : null}
                                    <Field
                                        name="password"
                                        type="password"
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Password"
                                    />

                                </div>
                            </div>

                            <div className="flex items-center justify-between">
                                <div className="text-sm">
                                    <Link to="/forgot-password" className="font-medium text-indigo-600 hover:text-indigo-500">
                                        Forgot your password?
                                    </Link>
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Sign in
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
                <div className="text-center">
                    <Link to="/signup" className="font-medium text-indigo-600 hover:text-indigo-500">
                        Don't have an account? Sign up
                    </Link>
                </div>
            </div>
        </div>
    )
}