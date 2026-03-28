// // Save booking
// function saveBooking(type, name, from, to, date, time, price) {
//     let booking = {
//         id: Date.now(),
//         type: type,
//         name: name,
//         from: from,
//         to: to,
//         date: date,
//         time: time,
//         price: price,
//         status: "Confirmed"
//     };
    
//     let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
//     bookings.push(booking);
//     localStorage.setItem("bookings", JSON.stringify(bookings));
    
//     alert(`✅ Booking Successful!\nTicket ID: ${booking.id}\nTotal: ₹${price}\nOnline ticket will be sent to your email.`);
//     return booking.id;
// }

// // Cancel ticket with 30% deduction, 70% refund
// function cancelTicketById(ticketId) {
//     let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
//     let index = bookings.findIndex(b => b.id == ticketId);
    
//     if (index !== -1) {
//         let booking = bookings[index];
//         let originalPrice = booking.price;
//         let deduction = originalPrice * 0.30;
//         let refund = originalPrice - deduction;
        
//         bookings.splice(index, 1);
//         localStorage.setItem("bookings", JSON.stringify(bookings));
        
//         alert(`❌ Ticket Cancelled\n------------------------\nOriginal Fare: ₹${originalPrice}\nCancellation Charges (30%): ₹${deduction}\nRefund Amount (70%): ₹${refund}\n------------------------\nRefund will be processed within 5-7 days.`);
//         return true;
//     } else {
//         alert("❌ Ticket ID not found.");
//         return false;
//     }
// }

// // Women offer - 10% discount
// function applyWomenOffer(price) {
//     let isWomen = confirm("Are you a woman? You will get 10% discount.");
//     if (isWomen) {
//         let discount = price * 0.10;
//         let newPrice = price - discount;
//         alert(`🎉 10% discount applied!\nOriginal: ₹${price}\nYou pay: ₹${newPrice}`);
//         return newPrice;
//     }
//     return price;
// }

// // View all bookings
// function viewBookings() {
//     let bookings = JSON.parse(localStorage.getItem("bookings")) || [];
//     if (bookings.length === 0) {
//         alert("No bookings found.");
//         return;
//     }
    
//     let msg = "📋 YOUR BOOKINGS:\n\n";
//     bookings.forEach(b => {
//         msg += `ID: ${b.id} | ${b.type.toUpperCase()} | ${b.from} → ${b.to} | ${b.date} | ₹${b.price}\n`;
//     });
//     alert(msg);

// }