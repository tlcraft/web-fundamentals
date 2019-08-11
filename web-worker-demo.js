console.log('This comes from the web worker example!');

onmessage = function(e) {
    const message = e.data;
    console.log(message);
    postMessage('Goodbye!');
    self.close();
}