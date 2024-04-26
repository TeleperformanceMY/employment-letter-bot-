document.getElementById('user-info-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get user input
    const email = document.getElementById('email').value;
    const bmsId = document.getElementById('bms-id').value;

    // Create an object with the data to send
    const userData = {
        email: email,
        bmsId: bmsId
    };

    // Send the data to Power Automate
    sendDataToPowerAutomate(userData);
});

function sendDataToPowerAutomate(userData) {
    // Replace 'YOUR_FLOW_ENDPOINT_URL' with the actual URL of your Power Automate flow
    const flowEndpointUrl = 'https://prod-26.southeastasia.logic.azure.com:443/workflows/18c6124905004d1cac1b994424e605b3/triggers/manual/paths/invoke?api-version=2016-06-01';

    fetch(flowEndpointUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(userData)
    })
    .then(response => {
        if (response.ok) {
            alert('Employment letter generated successfully!');
        } else {
            alert('Error generating employment letter. Please try again later.');
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Error generating employment letter. Please try again later.');
    });
}
