import { requireRole } from "@/Components/GetAuth";

async function EventCalendar() {
  await requireRole([]);
  return <div>EventCalendar</div>;
}

export default EventCalendar;
