import { Link } from '@inertiajs/react'
import React from 'react'

const HeaderComponent = () => {
  return (
    <header className="w-full bg-white shadow-md py-4 px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
        <Link href="/">My Portfolio</Link>
        </div>

        {/* Navigation */}
        <nav className="flex gap-4">
        <Link
            href="/login"
            className="px-4 py-2 text-gray-700 font-medium rounded-lg hover:bg-gray-100 transition"
        >
            Login
        </Link>

        <Link
            href="/register"
            className="px-4 py-2 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition"
        >
            Register
        </Link>
        </nav>
    </header>
  )
}

export default HeaderComponent
