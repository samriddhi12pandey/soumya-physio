import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '@/pages/Home'
import BookAppointment from '@/pages/BookAppointment'
import ScheduleAppointment from '@/pages/ScheduleAppointment'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<BookAppointment />} />
        <Route path="/schedule" element={<ScheduleAppointment />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
