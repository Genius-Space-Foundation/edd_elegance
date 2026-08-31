"use client";

import { useState } from "react";
import { SectionHeader, Button } from "@/components/ui";
import { BookingCalendar } from "@/components/BookingCalendar";

export default function BookingPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    service: "",
    notes: ""
  });
  
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState("");
  const [formErrors, setFormErrors] = useState({});

  const services = [
    "Everyday Makeup",
    "Bridal Makeup",
    "Acrylic Nails",
    "Stick-On Nails",
    "Builder Gel Nails",
    "Polygel Nails",
    "Hair Installation",
    "Professional Pedicure"
  ];
  
  const timeSlots = [
    "09:00 AM", "10:00 AM", "11:00 AM", 
    "12:30 PM", "02:00 PM", "03:30 PM", "05:00 PM"
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error for this field
    if (formErrors[name]) {
      setFormErrors(prev => ({ ...prev, [name]: null }));
    }
  };

  const handleBooking = (e) => {
    e.preventDefault();
    
    // Strict Validation
    const errors = {};
    if (!formData.fullName) errors.fullName = "Name is required.";
    if (!formData.phone) errors.phone = "Phone number is required.";
    if (!formData.service) errors.service = "Please select a service.";
    if (!selectedDate) errors.date = "Please select a date.";
    if (!selectedTime) errors.time = "Please select a time slot.";
    
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    
    const formattedDate = selectedDate.toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });

    const message = `Hello Edd's Elegance, I would like to book an appointment.
    
Service: ${formData.service}
Preferred Date: ${formattedDate}
Preferred Time: ${selectedTime}

Name: ${formData.fullName}
Phone: ${formData.phone}
Notes: ${formData.notes || "None"}

Please confirm if this slot is available. Thank you!`;

    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/233202306311?text=${encodedMessage}`, "_blank");
  };

  return (
    <main className="flex min-h-screen flex-col bg-brand-black w-full pt-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12">
        <SectionHeader 
          title="Book Your Appointment" 
          subtitle="Schedule your beauty session with Edd's Elegance. Select your preferred slot below and we will confirm via WhatsApp."
        />

        <div className="mt-12 glass-panel-gold rounded-[2.5rem] p-8 md:p-14 shadow-2xl animate-fade-in-up">
          <form onSubmit={handleBooking} className="space-y-16">
            
            {/* Step 1: Select Service */}
            <div>
              <h3 className="text-white font-serif text-2xl mb-8 flex items-center">
                <span className="w-10 h-10 rounded-full bg-brand-gold text-black flex items-center justify-center text-lg font-bold mr-4 shadow-gold-glow">1</span>
                Select Service
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {services.map(s => (
                  <button
                    key={s}
                    type="button"
                    onClick={() => {
                      setFormData(prev => ({ ...prev, service: s }));
                      setFormErrors(prev => ({ ...prev, service: null }));
                    }}
                    className={`p-5 rounded-2xl border text-left transition-premium ${
                      formData.service === s 
                        ? "border-brand-gold bg-brand-gold/10 text-brand-gold shadow-gold-glow scale-[1.02]" 
                        : "border-white/10 bg-white/5 text-gray-400 hover:border-white/30 hover:text-white"
                    }`}
                  >
                    <span className="font-medium tracking-wide">{s}</span>
                  </button>
                ))}
              </div>
              {formErrors.service && <p className="text-red-400 text-sm mt-3">{formErrors.service}</p>}
            </div>

            {/* Step 2: Date & Time */}
            <div>
              <h3 className="text-white font-serif text-2xl mb-8 flex items-center">
                <span className="w-10 h-10 rounded-full bg-brand-gold text-black flex items-center justify-center text-lg font-bold mr-4 shadow-gold-glow">2</span>
                Choose Date & Time
              </h3>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
                <div>
                  <BookingCalendar 
                    selectedDate={selectedDate} 
                    onSelectDate={(date) => {
                      setSelectedDate(date);
                      setFormErrors(prev => ({ ...prev, date: null }));
                    }} 
                  />
                  {formErrors.date && <p className="text-red-400 text-sm mt-3">{formErrors.date}</p>}
                </div>
                
                <div className="glass-panel border border-white/10 rounded-3xl p-8">
                  <h4 className="text-white font-serif text-xl mb-6 border-b border-white/10 pb-4">Available Slots</h4>
                  {selectedDate ? (
                    <div className="grid grid-cols-2 gap-4">
                      {timeSlots.map(time => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => {
                            setSelectedTime(time);
                            setFormErrors(prev => ({ ...prev, time: null }));
                          }}
                          className={`p-4 rounded-xl border text-center transition-premium tracking-wide ${
                            selectedTime === time
                              ? "border-brand-gold bg-brand-gold text-black font-bold shadow-gold-glow scale-[1.02]"
                              : "border-white/10 bg-black/40 text-gray-300 hover:border-brand-gold/50 hover:bg-brand-gold/5"
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  ) : (
                    <div className="h-full min-h-[200px] flex items-center justify-center text-gray-500 italic text-sm">
                      Please select a date first to view available time slots.
                    </div>
                  )}
                  {formErrors.time && <p className="text-red-400 text-sm mt-3">{formErrors.time}</p>}
                </div>
              </div>
            </div>

            {/* Step 3: Details */}
            <div>
              <h3 className="text-white font-serif text-2xl mb-8 flex items-center">
                <span className="w-10 h-10 rounded-full bg-brand-gold text-black flex items-center justify-center text-lg font-bold mr-4 shadow-gold-glow">3</span>
                Your Details
              </h3>
              <div className="glass-panel border border-white/10 rounded-3xl p-8 lg:p-10 space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <label className="block text-gray-300 text-sm font-medium tracking-wide mb-3">Full Name</label>
                    <input 
                      type="text" 
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className={`w-full bg-black/50 border rounded-xl px-5 py-4 text-white placeholder:text-gray-600 focus:outline-none transition-premium ${formErrors.fullName ? 'border-red-500/50 focus:border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.2)]' : 'border-white/10 focus:border-brand-gold focus:shadow-gold-glow'}`}
                      placeholder="Jane Doe"
                    />
                    {formErrors.fullName && <p className="text-red-400 text-xs mt-2">{formErrors.fullName}</p>}
                  </div>
                  <div>
                    <label className="block text-gray-300 text-sm font-medium tracking-wide mb-3">Phone Number</label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className={`w-full bg-black/50 border rounded-xl px-5 py-4 text-white placeholder:text-gray-600 focus:outline-none transition-premium ${formErrors.phone ? 'border-red-500/50 focus:border-red-500 shadow-[0_0_15px_rgba(239,68,68,0.2)]' : 'border-white/10 focus:border-brand-gold focus:shadow-gold-glow'}`}
                      placeholder="020 230 6311"
                    />
                    {formErrors.phone && <p className="text-red-400 text-xs mt-2">{formErrors.phone}</p>}
                  </div>
                </div>
                
                <div>
                  <label className="block text-gray-300 text-sm font-medium tracking-wide mb-3">Additional Notes (Optional)</label>
                  <textarea 
                    name="notes"
                    value={formData.notes}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-5 py-4 text-white placeholder:text-gray-600 focus:outline-none focus:border-brand-gold focus:shadow-gold-glow transition-premium"
                    placeholder="Any special requests or details we should know about..."
                  />
                </div>
              </div>
            </div>

            <div className="pt-10 border-t border-white/10 flex justify-end">
              <Button type="submit" variant="primary" className="w-full md:w-auto px-12 py-5 text-lg font-bold uppercase tracking-wider">
                Request Appointment via WhatsApp
              </Button>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
