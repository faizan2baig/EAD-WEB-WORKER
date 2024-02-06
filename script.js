document.addEventListener('DOMContentLoaded', () => {
    const dataDisplay = document.getElementById('dataDisplay');
    const worker = new Worker('worker.js');

    worker.addEventListener('message', event => {
        const processedData = event.data;
        dataDisplay.innerHTML = `<p>Processed Data: ${processedData}</p>`;
    });

    // Fetch data from an API in real-time (simulated)
    setInterval(() => {
        const newData = Math.random().toFixed(2); // Simulated data
        console.log('Sending data to Web Worker:', newData);
        worker.postMessage(newData); // Send data to the worker for processing
    }, 3000); // Fetch data every 3 seconds
});
