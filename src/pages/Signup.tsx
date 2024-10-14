

import { Formik, Form, Field } from 'formik'
import * as Yup from 'yup'
import { Link, useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'


interface SignupValues {
    email: string
    password: string
    confirmPassword: string
}

const SignupSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Required'),
    confirmPassword: Yup.string()
        .oneOf([Yup.ref('password')], 'Passwords must match')
        .required('Required'),
})

export default function SignupPage() {
    const navigate = useNavigate()
    const handleSubmit = (values: SignupValues) => {
        const storedData = JSON.parse(localStorage.getItem("userData") || "{}");
        const data = storedData || {};
        

        if (data[values.email.trim()]) {
            toast.error("User already exists ! Please Login");
        } else {
            data[values.email.trim()] = { password: values.password.trim() };
            localStorage.setItem("userData", JSON.stringify(data));
            toast.success("User Created Successfully ! Please Login");
            navigate("/login")
        }
    }
    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full space-y-8">
                <div>
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">Create your account</h2>
                </div>
                <Formik
                    initialValues={{ email: '', password: '', confirmPassword: '' }}
                    validationSchema={SignupSchema}
                    onSubmit={handleSubmit}
                >
                    {({ errors, touched }) => (
                        <Form className="mt-8 space-y-6">
                            <div className="rounded-md shadow-sm -space-y-px">

                                <div>
                                    {errors.email && touched.email ? (
                                        <div className="text-red-500 text-xs mt-1 float-end p-1">* {errors.email}</div>
                                    ) : null}
                                    <Field
                                        name="email"
                                        type="email"
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Email address"
                                    />

                                </div>
                                <div>
                                    {errors.password && touched.password ? (
                                        <div className="text-red-500 text-xs mt-1 float-end p-1">* {errors.password}</div>
                                    ) : null}
                                    <Field
                                        name="password"
                                        type="password"
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Password"
                                    />

                                </div>
                                <div>
                                    {errors.confirmPassword && touched.confirmPassword ? (
                                        <div className="text-red-500 text-xs mt-1 float-end p-1">* {errors.confirmPassword}</div>
                                    ) : null}
                                    <Field
                                        name="confirmPassword"
                                        type="password"
                                        className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                                        placeholder="Confirm Password"
                                    />

                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    Sign up
                                </button>
                            </div>
                        </Form>
                    )}
                </Formik>
                <div className="text-center">
                    <Link to="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                        Already have an account? Sign in
                    </Link>
                </div>
            </div>
        </div>
    )
}