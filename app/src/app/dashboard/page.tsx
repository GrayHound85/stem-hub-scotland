import { requireRole } from "@/Components/GetAuth";

async function Dashboard() {
  await requireRole();
  return <div>Dashboard</div>;
}

export default Dashboard;
