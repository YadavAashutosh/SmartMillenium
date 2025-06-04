function showHome() {
    document.getElementById('home').style.display = 'block';
    document.getElementById('content').style.display = 'none';
}

function showHome() {
    document.getElementById('home').style.display = 'block';
    document.getElementById('content').style.display = 'none';
}

function showListings() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('content').style.display = 'block';
    document.getElementById('content').innerHTML = `
        <h1>Available Listings 🏘️</h1>
        <div class="listing-container">
            <div class="listing rentable">
                <fieldset>
                    <legend>1 BHK Apartment</legend>
                    <p><strong>Location:</strong> Downtown</p>
                    <p><strong>Rent:</strong> $1200/month</p>
                    <button class="btn" onclick="showDetails('1', 'Downtown', 1200, '1 BHK Apartment')">View Details</button>
                </fieldset>
            </div>
            <div class="listing not-rentable">
                <fieldset>
                    <legend>2 BHK House</legend>
                    <p><strong>Location:</strong> Suburb</p>
                    <p><strong>Rent:</strong> $800/month</p>
                    <button class="btn" onclick="showDetails('2', 'Suburb', 800, '2 BHK House')">View Details</button>
                </fieldset>
            </div>
            <!-- More listings can be added here -->
        </div>
        <a href="#" class="btn btn-back" onclick="showHome()">Back to Home</a>
    `;
}

function showDetails(id, location, rent, type) {
    document.getElementById('home').style.display = 'none';
    document.getElementById('content').style.display = 'block';
    document.getElementById('content').innerHTML = `
        <h1>Listing Details 🏡</h1>
        <div class="table-container">
            <table>
                <thead>
                    <tr>
                        <th>Type</th>
                        <th>Location</th>
                        <th>Rent</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>${type}</td>
                        <td>${location}</td>
                        <td>$${rent}/month</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <button class="btn btn-back" onclick="showListings()">Back to Listings</button>
    `;
}

// Other functions (showReport, showResidentPortal, etc.) remain unchanged.

function showReport() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('content').style.display = 'block';
    document.getElementById('content').innerHTML = `
        <h1>Report an Issue</h1>
        <form id="report-issue-form">
            <label for="plot">Plot No</label>
            <select id="plot" name="plot">
                ${Array.from({ length: 100 }, (_, i) => i + 1).map(num => `
                    <option value="${num}">${num}</option>
                `).join('')}
                ${Array.from({ length: 100 }, (_, i) => i + 1).map(num => `
                    ${Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i)).map(letter => `
                        <option value="${num}${letter}">${num}${letter}</option>
                    `).join('')}
                `).join('')}
            </select>
            <label for="issue">Issue</label>
            <textarea id="issue" name="issue" rows="4" required></textarea>
            <label for="category">Category</label>
            <select id="category" name="category">
                <option value="electricity">Electricity</option>
                <option value="water">Water</option>
                <option value="maintenance">Maintenance</option>
                <option value="cleanliness">Cleanliness</option>
            </select>
            <label for="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" required>
            <button type="submit">Submit</button>
        </form>
        <div id="issue-display"></div>
        <button class="btn btn-back" onclick="showHome()">Back to Home</button>
    `;
    
    document.getElementById('report-issue-form').onsubmit = function (e) {
        e.preventDefault();
        const plot = document.getElementById('plot').value;
        const issue = document.getElementById('issue').value;
        const category = document.getElementById('category').value;
        const phone = document.getElementById('phone').value;

        document.getElementById('issue-display').innerHTML = `
            <h2>Submitted Issue</h2>
            <div class="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>Plot No</th>
                            <th>Issue</th>
                            <th>Category</th>
                            <th>Phone</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>${plot}</td>
                            <td>${issue}</td>
                            <td>${category}</td>
                            <td>${phone}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        `;
        document.getElementById('report-issue-form').reset();
    }
}

function showResidentPortal() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('content').style.display = 'block';
    document.getElementById('content').innerHTML = `
        <h1>Resident Portal</h1>
        <form id="register-form">
            <label for="name">Name</label>
            <input type="text" id="name" name="name" required>
            <label for="phone">Phone Number</label>
            <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" required>
            <label for="email">Email</label>
            <input type="email" id="email" name="email" required>
            <label for="plot">Plot No</label>
            <select id="plot" name="plot" required>
                ${Array.from({ length: 100 }, (_, i) => i + 1).map(num => `
                    <option value="${num}">${num}</option>
                `).join('')}
                ${Array.from({ length: 100 }, (_, i) => i + 1).map(num => `
                    ${Array.from({ length: 26 }, (_, i) => String.fromCharCode(65 + i)).map(letter => `
                        <option value="${num}${letter}">${num}${letter}</option>
                    `).join('')}
                `).join('')}
            </select>
            <button type="submit">Register</button>
        </form>
        <div id="resident-list" style="display: none;">
            <h2>Resident List</h2>
            <div class="table-container">
                <table id="resident-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Phone Number</th>
                            <th>Email</th>
                            <th>Plot No</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody id="resident-table-body">
                        <!-- Rows will be dynamically added here -->
                    </tbody>
                </table>
            </div>
        </div>
        <button class="btn btn-back" onclick="showHome()">Back to Home</button>
    `;

    document.getElementById('register-form').onsubmit = function (e) {
        e.preventDefault();
        const name = document.getElementById('name').value;
        const phone = document.getElementById('phone').value;
        const email = document.getElementById('email').value;
        const plot = document.getElementById('plot').value;

        const newRow = document.createElement('tr');
        newRow.innerHTML = `
            <td>${name}</td>
            <td>${phone}</td>
            <td>${email}</td>
            <td>${plot}</td>
            <td><button onclick="viewProfile('${name}', '${phone}', '${email}', '${plot}')">View Profile</button></td>
        `;

        document.getElementById('resident-table-body').appendChild(newRow);
        document.getElementById('resident-list').style.display = 'block';
        document.getElementById('register-form').reset();
    }
}

function viewProfile(name, phone, email, plot) {
    document.getElementById('home').style.display = 'none';
    document.getElementById('content').style.display = 'block';
    document.getElementById('content').innerHTML = `
        <h1>Resident Profile</h1>
        <div class="table-container">
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Phone Number</th>
                        <th>Email</th>
                        <th>Plot No</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>${name}</td>
                        <td>${phone}</td>
                        <td>${email}</td>
                        <td>${plot}</td>
                    </tr>
                </tbody>
            </table>
        </div>
        <h2>Pending Bills</h2>
        <div class="table-container">
            <table>
                <thead>
                    <tr>
                        <th>Bill Type</th>
                        <th>Amount</th>
                        <th>Status</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>Maintenance</td>
                        <td>$50</td>
                        <td>Pending</td>
                        <td><button onclick="makePayment('Maintenance', 50)">Make Payment</button></td>
                    </tr>
                    <tr>
                        <td>Electricity</td>
                        <td>$75</td>
                        <td>Pending</td>
                        <td><button onclick="makePayment('Electricity', 75)">Make Payment</button></td>
                    </tr>
                    <tr>
                        <td>Gas</td>
                        <td>$40</td>
                        <td>Pending</td>
                        <td><button onclick="makePayment('Gas', 40)">Make Payment</button></td>
                    </tr>
                </tbody>
            </table>
        </div>
        <button class="btn btn-back" onclick="showResidentPortal()">Back to Resident Portal</button>
    `;
}

function makePayment(billType, amount) {
    alert(`Payment of $${amount} for ${billType} is successful.`);
}
function showNoticeBoard() {
    document.getElementById('notice-board').style.display = 'block'; // Show the notice board
    document.getElementById('home').style.display = 'none'; // Hide the home section
    document.getElementById('content').style.display = 'none'; // Hide other content
}

function hideNoticeBoard() {
    document.getElementById('notice-board').style.display = 'none'; // Hide the notice board
    document.getElementById('home').style.display = 'block'; // Show the home section
    document.getElementById('content').style.display = 'none'; // Optionally hide other content
}
