document.addEventListener("DOMContentLoaded", function(event) {
    safari.extension.dispatchMessage("Hello World!");
});

safari.self.addEventListener("message", messageReceived);

function messageReceived(event) {
    
    switch (event.name) {
            
        case "ScrapingDetailPage":
            scrapingDetailPage();
            break;
            
        default:
            alert('Unknown message found: ' + event.name);
    }
}
