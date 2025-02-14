export function HomeScreen() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Welcome to Home</h2>
      <p>This is the home screen of your dashboard.</p>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <div className="rounded-lg bg-white p-4 shadow">
          <h3 className="text-lg font-semibold">Recent Activity</h3>
          <p>Your recent activities will appear here.</p>
        </div>
        <div className="rounded-lg bg-white p-4 shadow">
          <h3 className="text-lg font-semibold">Quick Stats</h3>
          <p>Key statistics and metrics will be shown here.</p>
        </div>
        <div className="rounded-lg bg-white p-4 shadow">
          <h3 className="text-lg font-semibold">Notifications</h3>
          <p>Your latest notifications will be displayed in this area.</p>
        </div>
      </div>
    </div>
  )
}

