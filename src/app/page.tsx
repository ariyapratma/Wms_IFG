import Image from "next/image";
import Navbar from "./Organism/navbar";

export default function Home() {
  return (
    <div className="min-h-screen font-sans text-white shadow-xl bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <Navbar />
      <main className="max-w-6xl p-8 mx-auto sm:p-12">
        {/* Header */}
        <div className="flex flex-col items-center gap-6 mb-12 text-center sm:items-start sm:text-left">
          <Image
            src="https://www.ifg.id/images/ifg/logo-white.png"
            alt="IFG Logo"
            width={200}
            height={50}
            priority
            className="w-48 h-auto"
          />
          <h1 className="text-3xl font-bold sm:text-5xl">
            Role-Based Access Control
          </h1>
          <p className="max-w-3xl text-lg text-gray-300">
            Manage user roles and permissions securely across Indonesia Financial Group systems.
            Ensure the right access for the right people.
          </p>
        </div>

        {/* RBAC Overview Cards */}
        <div className="grid grid-cols-1 gap-8 mb-16 md:grid-cols-3">
          <div className="p-6 transition bg-gray-800 border border-gray-700 shadow-lg rounded-xl hover:shadow-xl">
            <h2 className="mb-3 text-xl font-semibold text-blue-400">Roles</h2>
            <p className="mb-4 text-gray-300">
              Define roles such as Admin, Auditor, Manager, and Staff with specific responsibilities.
            </p>
            <ul className="space-y-1 text-sm text-gray-400">
              <li>• Admin</li>
              <li>• Financial Officer</li>
              <li>• Compliance Auditor</li>
              <li>• IT Support</li>
            </ul>
          </div>

          <div className="p-6 transition bg-gray-800 border border-gray-700 shadow-lg rounded-xl hover:shadow-xl">
            <h2 className="mb-3 text-xl font-semibold text-green-400">Permissions</h2>
            <p className="mb-4 text-gray-300">
              Assign granular permissions (read, write, delete) to each role for secure access.
            </p>
            <ul className="space-y-1 text-sm text-gray-400">
              <li>• user:read</li>
              <li>• transaction:write</li>
              <li>• report:export</li>
              <li>• settings:admin</li>
            </ul>
          </div>

          <div className="p-6 transition bg-gray-800 border border-gray-700 shadow-lg rounded-xl hover:shadow-xl">
            <h2 className="mb-3 text-xl font-semibold text-purple-400">Access Control</h2>
            <p className="mb-4 text-gray-300">
              Automatically enforce policies. Users only see what they are allowed to.
            </p>
            <ul className="space-y-1 text-sm text-gray-400">
              <li>• UI-level filtering</li>
              <li>• API route protection</li>
              <li>• Audit logs</li>
              <li>• Session control</li>
            </ul>
          </div>
        </div>

        {/* Example Table: Role vs Permissions */}
        <div className="p-6 overflow-hidden bg-gray-800 border border-gray-700 shadow-lg rounded-xl">
          <h2 className="mb-6 text-2xl font-semibold text-center md:text-left">Role Permission Matrix</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-separate border-spacing-y-2">
              <thead>
                <tr className="text-sm tracking-wide text-left text-gray-400 uppercase">
                  <th className="pb-4 pl-0 font-medium">Role</th>
                  <th className="pb-4 font-medium">User Management</th>
                  <th className="pb-4 font-medium">Financial Data</th>
                  <th className="pb-4 font-medium">Audit Logs</th>
                  <th className="pb-4 pr-0 font-medium">Settings</th>
                </tr>
              </thead>
              <tbody className="text-gray-300">
                <tr>
                  <td className="py-3 pl-0 font-medium">Admin</td>
                  <td><span className="text-green-400">Read/Write/Delete</span></td>
                  <td><span className="text-green-400">Full Access</span></td>
                  <td><span className="text-green-400">View</span></td>
                  <td><span className="text-green-400">Yes</span></td>
                </tr>
                <tr>
                  <td className="py-3 pl-0 font-medium">Financial Officer</td>
                  <td><span className="text-gray-500">View Only</span></td>
                  <td><span className="text-green-400">Read/Write</span></td>
                  <td><span className="text-gray-500">—</span></td>
                  <td><span className="text-gray-500">No</span></td>
                </tr>
                <tr>
                  <td className="py-3 pl-0 font-medium">Auditor</td>
                  <td><span className="text-gray-500">—</span></td>
                  <td><span className="text-yellow-400">Read Only</span></td>
                  <td><span className="text-green-400">View</span></td>
                  <td><span className="text-gray-500">No</span></td>
                </tr>
                <tr>
                  <td className="py-3 pl-0 font-medium">Staff</td>
                  <td><span className="text-gray-500">—</span></td>
                  <td><span className="text-gray-500">—</span></td>
                  <td><span className="text-gray-500">—</span></td>
                  <td><span className="text-gray-500">No</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA */}
        {/* <div className="mt-12 text-center">
          <a
            href="/dashboard"
            className="inline-flex items-center gap-2 px-6 py-3 font-medium transition bg-gray-800 rounded-full hover:bg-gray-900"
          >
            Go to RBAC Dashboard
          </a>
        </div> */}
      </main>

      {/* Footer */}
      <footer className="py-6 mt-20 text-sm text-center text-gray-500 border-t border-gray-800">
        <p>© {new Date().getFullYear()} Indonesia Financial Group. All rights reserved.</p>
      </footer>
    </div>
  );
}