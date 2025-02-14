export function UsersScreen() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">User Management</h2>
      <p>Manage your users and their permissions here.</p>
      <div className="rounded-lg bg-white p-4 shadow">
        <h3 className="text-lg font-semibold mb-2">User List</h3>
        <ul className="list-disc list-inside">
          <li>John Doe - Admin</li>
          <li>Jane Smith - Editor</li>
          <li>Bob Johnson - Viewer</li>
        </ul>
      </div>
    </div>
  )
}

