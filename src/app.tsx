import { AttendeeList } from "./components/attendee-list";
import { Header } from "./components/header";
import { Events } from "./components/events";
import { Participant } from "./components/Participants";
import { Route, Routes } from "react-router-dom";

export function App() {
  return (
    <div className="max-w-[1216px] mx-auto py-5 flex flex-col gap-5 fundo_animado">
      <Header />
      <Routes>
        <Route path="/events" element={<Events />} />
        <Route path="/participants" element={<AttendeeList />} />
      </Routes>
    </div>
  )
}

