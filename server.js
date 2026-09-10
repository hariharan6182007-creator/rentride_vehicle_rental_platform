const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

const vehicles = [
  {
    id: 1,
    name: 'Tesla Model 3',
    type: 'Car',
    category: 'Electric',
    pricePerDay: 89,
    seats: 5,
    transmission: 'Automatic',
    rating: 4.9,
    image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 2,
    name: 'BMW X5',
    type: 'SUV',
    category: 'Luxury',
    pricePerDay: 150,
    seats: 7,
    transmission: 'Automatic',
    rating: 4.8,
    image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 3,
    name: 'Harley-Davidson Street',
    type: 'Motorbike',
    category: 'Cruiser',
    pricePerDay: 74,
    seats: 2,
    transmission: 'Manual',
    rating: 4.7,
    image: 'https://images.unsplash.com/photo-1558980664-10e7170b5df9?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 4,
    name: 'Vespa Sprint',
    type: 'Scooter',
    category: 'Urban',
    pricePerDay: 38,
    seats: 2,
    transmission: 'Automatic',
    rating: 4.6,
    image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80'
  }
];

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', service: 'RentRide API' });
});

app.get('/api/vehicles', (req, res) => {
  res.json(vehicles);
});

app.get('/api/vehicles/:id', (req, res) => {
  const vehicle = vehicles.find((item) => item.id === Number(req.params.id));

  if (!vehicle) {
    return res.status(404).json({ error: 'Vehicle not found' });
  }

  return res.json(vehicle);
});

app.post('/api/booking', (req, res) => {
  const { name, vehicleId, pickupDate, returnDate, addOns = [] } = req.body;

  if (!name || !vehicleId || !pickupDate || !returnDate) {
    return res.status(400).json({ error: 'Missing required booking fields' });
  }

  const pickup = new Date(`${pickupDate}T00:00:00Z`);
  const returnDay = new Date(`${returnDate}T00:00:00Z`);
  const rentalDays = Math.ceil((returnDay - pickup) / 86400000);

  if (!Number.isFinite(rentalDays) || rentalDays < 1) {
    return res.status(400).json({ error: 'Return date must be after pickup date' });
  }

  const vehicle = vehicles.find((item) => item.id === Number(vehicleId));

  if (!vehicle) {
    return res.status(404).json({ error: 'Vehicle not found' });
  }

  const addOnPrices = { additionalDriver: 15, zeroDeductible: 18, childSeat: 12 };
  const selectedAddOns = Array.isArray(addOns) ? addOns.filter((item) => addOnPrices[item]) : [];
  const addOnTotal = selectedAddOns.reduce((total, item) => total + addOnPrices[item] * rentalDays, 0);
  const total = vehicle.pricePerDay * rentalDays + addOnTotal + 23.4 - 45;
  const reference = `RR-${Date.now().toString().slice(-6)}`;

  return res.status(201).json({
    message: 'Booking created successfully',
    booking: {
      reference,
      customerName: name,
      vehicleId,
      vehicleName: vehicle.name,
      pickupDate,
      returnDate,
      rentalDays,
      addOns: selectedAddOns,
      total: Number(total.toFixed(2))
    }
  });
});

app.use(express.static(path.join(__dirname, 'rentride_home')));
app.use('/rentride_vehicle_listing', express.static(path.join(__dirname, 'rentride_vehicle_listing')));
app.use('/rentride_vehicle_details', express.static(path.join(__dirname, 'rentride_vehicle_details')));
app.use('/rentride_booking_checkout', express.static(path.join(__dirname, 'rentride_booking_checkout')));
app.use('/rentride_booking_confirmation', express.static(path.join(__dirname, 'rentride_booking_confirmation')));
app.use('/rentride_user_dashboard', express.static(path.join(__dirname, 'rentride_user_dashboard')));
app.use('/rentride_admin_dashboard', express.static(path.join(__dirname, 'rentride_admin_dashboard')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'rentride_home', 'code.html'));
});

app.get('/vehicle-listing', (req, res) => {
  res.sendFile(path.join(__dirname, 'rentride_vehicle_listing', 'code.html'));
});

app.get('/vehicle-details', (req, res) => {
  res.sendFile(path.join(__dirname, 'rentride_vehicle_details', 'code.html'));
});

app.get('/checkout', (req, res) => {
  res.sendFile(path.join(__dirname, 'rentride_booking_checkout', 'code.html'));
});

app.get('/confirmation', (req, res) => {
  res.sendFile(path.join(__dirname, 'rentride_booking_confirmation', 'code.html'));
});

app.get('/dashboard', (req, res) => {
  res.sendFile(path.join(__dirname, 'rentride_user_dashboard', 'code.html'));
});

app.get('/admin', (req, res) => {
  res.sendFile(path.join(__dirname, 'rentride_admin_dashboard', 'code.html'));
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`RentRide server running on http://localhost:${PORT}`);
  });
}

module.exports = { app, vehicles };
