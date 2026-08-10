import { requireRole } from "@/Components/GetAuth";

async function student_forums() {
  await requireRole([]);
  return <div>student_forums</div>;
}
export default student_forums;
