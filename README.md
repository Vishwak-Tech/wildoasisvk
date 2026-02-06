# 🏨 Hotel Management Dashboard
A full-featured **Hotel Management System** designed for hotel employees to manage cabins, bookings, guests, payments, and business analytics from a single dashboard.
This application focuses on **internal hotel operations**, not public guest bookings.
---

## 🚀 Project Overview

This app helps hotel staff efficiently handle daily operations such as:

* Managing cabins and bookings
* Checking guests in and out
* Accepting payments
* Tracking sales and occupancy
* Viewing business analytics in a dashboard

Only **authenticated hotel employees** can access and use the system.

---

## 🔐 Authentication & User Management

* Only hotel employees can use the app
* New users can be created **inside the application only**
* Users can:

  * Log in / log out
  * Upload an avatar
  * Update name, password, and profile details

---

## 🏠 Cabins Management

* View all cabins in a table format
* Cabin details include:

  * Cabin photo
  * Name
  * Capacity
  * Price per night
  * Current discount
* Employees can:

  * Create new cabins
  * Edit existing cabins
  * Delete cabins
  * Upload cabin photos

---

## 📅 Bookings Management

* View all bookings in a table
* Booking information includes:

  * Arrival & departure dates
  * Booking status
  * Paid amount
  * Cabin details
  * Guest details
* Booking statuses:

  * **Unconfirmed** (booked but not checked in)
  * **Checked in**
  * **Checked out**

---

## ✅ Check-In / Check-Out Flow

* Guests can be:

  * Checked in
  * Checked out
  * Deleted (if necessary)
* On check-in:

  * Payment can be accepted inside the app
  * Payment confirmation is required
  * Breakfast can be added for the entire stay (if not already booked)

---

## 👤 Guests Management

Guest information includes:

* Full name
* Email address
* National ID
* Nationality
* Country flag (for easy visual identification)

---

## 📊 Dashboard & Analytics

The dashboard is the **default landing screen** and provides insights for the last **7, 30, or 90 days**.

### Dashboard Features

* Guests checking in and out **today**
* Recent bookings overview
* Sales statistics
* Check-ins count
* Occupancy rate
* Daily sales chart:

  * Total sales
  * Extras sales (currently breakfast)
* Stay duration statistics chart

---

## ⚙️ Application Settings

Employees can configure global application settings:

* Breakfast price
* Minimum nights per booking
* Maximum nights per booking
* Other business-wide rules

---

## 🌙 Dark Mode

* Fully supported dark mode for better usability

---

## 🛠️ Tech Stack (Example)

> Adjust based on your actual implementation

* **Frontend:** React, Styled Components
* **State Management:** React Query
* **Backend:** Supabase
* **Authentication:** Supabase Auth
* **Charts:** Recharts
* **Database:** PostgreSQL (via Supabase)

---

## 📦 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/your-username/hotel-management-dashboard.git

# Navigate to project folder
cd hotel-management-dashboard

# Install dependencies
npm install

# Start development server
npm run dev
```

---

## 🔑 Environment Variables

Create a `.env` file and add:

```env
VITE_SUPABASE_URL=your_supabase_url
VITE_SUPABASE_ANON_KEY=your_supabase_anon_key
```

---

## 📌 Future Improvements

* Role-based access control
* Advanced payment integrations
* Room availability calendar
* Multi-hotel support
* Export reports (PDF / CSV)

---

## 👨‍💻 Author

**Vishwak koleti**
Hotel Management Dashboard – Full Stack Project

