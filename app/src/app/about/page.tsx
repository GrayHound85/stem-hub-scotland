import { requireRole } from "@/Components/GetAuth";

async function about() {
  await requireRole();
  return <div>about</div>;
}
export default about;
