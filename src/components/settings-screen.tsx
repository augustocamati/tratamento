export function SettingsScreen() {
  return (
    <div className="space-y-4">
      <h2 className="text-2xl font-bold">Settings</h2>
      <p>Adjust your dashboard settings here.</p>
      <div className="rounded-lg bg-white p-4 shadow">
        <h3 className="text-lg font-semibold mb-2">General Settings</h3>
        <ul className="list-disc list-inside">
          <li>Profile Information</li>
          <li>Notification Preferences</li>
          <li>Privacy Settings</li>
          <li>Account Security</li>
        </ul>
      </div>
    </div>
  )
}

