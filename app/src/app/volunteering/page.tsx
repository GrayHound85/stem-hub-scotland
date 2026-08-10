import { requireRole } from "@/Components/GetAuth";

async function volunteering() {
  await requireRole([]);
  return <div>volunteering</div>;
}
export default volunteering;
