document.addEventListener("DOMContentLoaded", function(event) {
    safari.extension.dispatchMessage("Hello World!");
});

safari.self.addEventListener("message", messageReceived);

function messageReceived(event) {
    
    alert('handled 3');
    console.log(event.name);
    console.log(event.message);
}
