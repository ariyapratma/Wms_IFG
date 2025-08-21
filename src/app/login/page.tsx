import Image from "next/image";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen text-white font-sains bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="w-full max-w-md p-8 bg-gray-800 rounded-lg shadow-xl">
        <Image
          src="https://www.ifg.id/images/ifg/logo-white.png"
          alt="IFG Logo"
          width={200}
          height={50}
          priority
          className="justify-center w-32 h-auto mx-auto"
        />
        <h2 className="flex items-center justify-center mt-4 font-bold text-md sm:text-xl">Role-Based Access Control</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-1 text-sm font-medium">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="w-full px-4 py-2 text-white bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>
          <div>
            <label htmlFor="password" className="block mb-1 text-sm font-medium">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              required
              className="w-full px-4 py-2 text-white bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-500"
            />
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-medium transition bg-gray-400 rounded-lg hover:bg-gray-900"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-gray-400">
          Don't have an account?{" "}
          <Link href="/register" className="text-blue-400 hover:underline">
            Register here
          </Link>
        </p>
      </div>
    </div>
  );
}