import { DashboardContent } from "../../components/dashboard/DashboardContent"
import { Sidebar } from "../../components/dashboard/Sidebar"
import "../styles-kc.css"

export default function DashboardPage() {
  return (
    <div className="dashboardLayout">
      <Sidebar />
      <main className="mainContent">
        <DashboardContent />
      </main>
    </div>
  )
}

