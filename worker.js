self.addEventListener('message', event => {
    const data = event.data;
    console.log('Data received from main thread:', data);
    // Process data (e.g., perform calculations)
    const processedData = processData(data);
    self.postMessage(processedData); // Send processed data back to the main thread
});

function processData(data) {
    // Example: Multiply the data by 10
    return parseFloat(data) * 10;
}
