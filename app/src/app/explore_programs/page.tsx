import { requireRole } from "@/Components/GetAuth";

async function ExplorePrograms() {
  await requireRole([]);
  return <div>ExplorePrograms</div>;
}

export default ExplorePrograms;
