// JavaScript to handle form submission and table updates
document.getElementById('farmForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    const farmName = document.getElementById('farmName').value;
    const cropType = document.getElementById('cropType').value;
    const areaSize = document.getElementById('areaSize').value;

    // Create a new row in the farm table
    const farmTableBody = document.getElementById('farmTableBody');
    const newRow = document.createElement('tr');
    
    newRow.innerHTML = `
        <td>${farmName}</td>
        <td>${cropType}</td>
        <td>${areaSize}</td>
    `;
    
    // Append the new row to the table body
    farmTableBody.appendChild(newRow);

    // Clear form inputs after submission
    document.getElementById('farmForm').reset();
});
