import { DashboardLayout } from "@/components/dashboard-layout"
import { MenuOne } from "@/components/menu-one"
import { HomeScreen } from "./home-screen"

export default function Home() {
  return (
    <DashboardLayout sidebar={<MenuOne />}>
      <HomeScreen />
    </DashboardLayout>
  )
}

