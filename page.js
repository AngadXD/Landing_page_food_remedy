// You can use JavaScript to dynamically populate the user table based on your data
// For example, fetching data from an API and updating the table.

// Sample code (replace with your logic):
document.addEventListener("DOMContentLoaded", function() {
    // Fetch user data and update the table
    // Sample code using dummy data:
    const userData = [
        { serialNumber: 1, name: "John Doe", status: "Active", email: "john@example.com", apiKeys: 2 },
        { serialNumber: 2, name: "Elliflintoh", status: "Inactive", email: "elli@example.com", apiKeys: 1 },
        { serialNumber: 3, name: "Andrew Jemes", status: "Active", email: "andrew@example.com", apiKeys: 3 },
        { serialNumber: 4, name: "David tye", status: "Ianctive", email: "david@example.com", apiKeys: 2 },
        { serialNumber: 5, name: "Ian Josef", status: "Active", email: "ian@example.com", apiKeys: 3 },
        { serialNumber: 6, name: "Kane Roach", status: "Inactive", email: "Kane@example.com", apiKeys: 2 },
        // Add more user data as needed
    ];

    const tableBody = document.querySelector("table tbody");

    userData.forEach(user => {
        const row = tableBody.insertRow();
        row.insertCell(0).textContent = user.serialNumber;
        row.insertCell(1).textContent = user.name;
        row.insertCell(2).textContent = user.status;
        row.insertCell(3).textContent = user.email;
        row.insertCell(4).textContent = user.apiKeys;
    });
});