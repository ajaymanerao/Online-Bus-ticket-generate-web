document.getElementById("searchForm").addEventListener("submit", function(event) {
    event.preventDefault();
    displayBusResults();
});

function displayBusResults() {
    const busList = document.getElementById("busList");
    busList.innerHTML = `
        <div class="bus-card">
            <p><strong>Bus Number:</strong> Bus 1</p>
            <p><strong>Time:</strong> 10:00 AM</p>
            <p><strong>Price:</strong> 15 rs</p>
            <button onclick="selectBus('Bus 1', '10:00 AM', 15)">Select Bus 1</button>
        </div>
        <div class="bus-card">
            <p><strong>Bus Number:</strong> Bus 2</p>
            <p><strong>Time:</strong> 12:00 PM</p>
            <p><strong>Price:</strong> 15 rs</p>
            <button onclick="selectBus('Bus 2', '12:00 PM', 18)">Select Bus 2</button>
        </div>
        <div class="bus-card">
            <p><strong>Bus Number:</strong> Bus 3</p>
            <p><strong>Time:</strong> 2:00 PM</p>
            <p><strong>Price:</strong> 15 rs</p>
            <button onclick="selectBus('Bus 3', '2:00 PM', 20)">Select Bus 3</button>
        </div>
         <div class="bus-card">
            <p><strong>Bus Number:</strong> Bus 4</p>
            <p><strong>Time:</strong> 3:00 PM</p>
            <p><strong>Price:</strong> 15 rs</p>
            <button onclick="selectBus('Bus 4', '3:00 PM', 22)">Select Bus 4</button>
        </div>
    `;
    document.getElementById("busResults").style.display = "block";
}

function selectBus(busNumber, time, price) {
    alert(`Bus ${busNumber} selected for ${time} at price $${price}`);
    document.getElementById("busResults").style.display = "none";
    document.getElementById("paymentSection").style.display = "block";
    document.getElementById("payButton").setAttribute("data-bus", busNumber);
    document.getElementById("payButton").setAttribute("data-time", time);
    document.getElementById("payButton").setAttribute("data-price", price);
}

document.getElementById("payButton").addEventListener("click", function() {
    document.getElementById("paymentSection").style.display = "none";
    document.getElementById("paymentInterface").style.display = "block";
});

document.getElementById("confirmPayment").addEventListener("click", function() {
    alert("Payment successful!");
    document.getElementById("paymentInterface").style.display = "none";
    const busNumber = document.getElementById("payButton").getAttribute("data-bus");
    const time = document.getElementById("payButton").getAttribute("data-time");
    const location = "Departure City - Destination City"; // Static for now
    displayTicket(busNumber, time, location);
});

function displayTicket(busNumber, time, location) {
    document.getElementById("ticketSection").style.display = "block";
    document.getElementById("busNumber").textContent = busNumber;
    document.getElementById("busTime").textContent = time;
    document.getElementById("busLocation").textContent = location;
    generateQRCode(busNumber, time, location);
}

function generateQRCode(busNumber, time, location) {
    const qrContent = `Bus: ${busNumber}, Time: ${time}, Location: ${location}`;
    const qrCodeUrl = `https://api.qrserver.com/v1/create-qr-code/?data=${encodeURIComponent(qrContent)}&size=150x150`;
    document.getElementById("qrCode").src = qrCodeUrl;
}

document.getElementById("generateTicketButton").addEventListener("click", function() {
    alert("Ticket generated successfully! You can download it.");
});