document.getElementById('user-info-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get user input
    const email = document.getElementById('email').value;
    const idNumber = document.getElementById('id-number').value;

    // Create an object with the data to send
    const userData = {
        email: email,
        idNumber: idNumber
    };

    // Send the data to the Power Automate flow
    sendDataToPowerAutomate(userData);
});

function sendDataToPowerAutomate(userData) {
    // You can use fetch or XMLHttpRequest to send data to Power Automate
    // Here, I'm using fetch as an example
    fetch('YOUR_FLOW_ENDPOINT_URL', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(response => {
        if (response.ok) {
            alert('Data submitted successfully!');
        } else {
            alert('Error submitting data. Please try again later.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error submitting data. Please try again later.');
    });
}
