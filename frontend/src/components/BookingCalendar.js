"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export function BookingCalendar({ selectedDate, onSelectDate }) {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const days = [];
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push(<div key={`empty-${i}`} className="p-2"></div>);
  }

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  for (let day = 1; day <= daysInMonth; day++) {
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
    const isPast = date < today;
    const isSelected = selectedDate && date.toDateString() === selectedDate.toDateString();

    days.push(
      <button
        key={day}
        type="button"
        disabled={isPast}
        onClick={() => onSelectDate(date)}
        className={`p-2 w-10 h-10 flex items-center justify-center rounded-full text-sm transition-colors ${
          isSelected
            ? "bg-brand-gold text-black font-bold shadow-lg shadow-brand-gold/20"
            : isPast
            ? "text-gray-600 cursor-not-allowed opacity-50"
            : "text-white hover:bg-white/10 hover:text-brand-gold"
        }`}
      >
        {day}
      </button>
    );
  }

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

  return (
    <div className="bg-white/5 border border-white/10 rounded-2xl p-6">
      <div className="flex justify-between items-center mb-6">
        <button type="button" onClick={handlePrevMonth} className="p-2 text-gray-400 hover:text-white transition-colors">
          <ChevronLeft size={20} />
        </button>
        <h3 className="text-white font-serif font-bold text-lg">
          {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
        </h3>
        <button type="button" onClick={handleNextMonth} className="p-2 text-gray-400 hover:text-white transition-colors">
          <ChevronRight size={20} />
        </button>
      </div>
      
      <div className="grid grid-cols-7 gap-2 mb-2">
        {['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'].map(day => (
          <div key={day} className="text-center text-xs font-medium text-brand-gold uppercase tracking-wider">
            {day}
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-7 gap-y-2 gap-x-2 justify-items-center">
        {days}
      </div>
    </div>
  );
}
