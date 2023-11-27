document.getElementById('credentialId').addEventListener('keydown', function(event) {
    // Check if the pressed key is Enter (key code 13)
    if (event.key === 'Enter') {
        // Trigger the verification process when Enter is pressed
        document.getElementById('submitVerification').click();
    }
});

document.getElementById('submitVerification').addEventListener('click', function() {
    // Get the entered ID
    var credentialId = document.getElementById('credentialId').value;

    // Check if the ID is empty
    if (!credentialId) {
        // Display an error message if the ID is empty
        var resultElement = document.getElementById('verificationResult');
        resultElement.innerHTML = 'Please enter the ID.';
        return;
    }

    // Simulate a verification process with details (replace with your logic)
    var verificationResult = simulateVerification(credentialId);

    // Display the result
    var resultElement = document.getElementById('verificationResult');
    if (verificationResult.valid) {
        resultElement.innerHTML = '<br><h2>Certificate is Valid !</h2> <br>' +
                                  'Student Name: ' + verificationResult.studentName + '<br>' +
                                  'Course: ' + verificationResult.course + '<br>' +
                                  'Date of Certification: ' + verificationResult.certificationDate + '<br>' +
                                  'Mentor Name: ' + verificationResult.mentorName + '<br>' +
                                  'Duration: ' + verificationResult.duration + '<br>';
    } else {
        resultElement.innerHTML = 'Verification failed. Please check the ID and try again.';
    }
});

// Simulate a verification process with details (replace with your logic)
function simulateVerification(credentialId) {
    // Replace this with your actual logic to check the validity of the ID
    // and retrieve details associated with the ID
    var validIds = ['TX4423', '789012', '345678'];
    
    if (validIds.includes(credentialId)) {
        // Simulated details (replace with your actual data retrieval)
        return {
            valid: true,
            studentName: 'Sweta Kumari',
            course: 'Video Editing with Filmora 9',
            certificationDate: '27-11-2023',
            duration: '3 Days',
            mentorName: 'Nitish Singh'
        };
    } else {
        return { valid: false };
    }
}
