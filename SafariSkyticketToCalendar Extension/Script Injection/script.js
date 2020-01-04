safari.self.addEventListener("message", messageReceived);

function messageReceived(event) {
    
    switch (event.name) {
            
        case "ScrapingDetailPage":
            scrapingDetailPage();
            break;
            
        case "ScrapingDetailPageForWILLER":
            makeWillerCalendar();
            break;
     
        case "IncompatiblePage":
            alert('This extension can be use only reservation detail page of skyticket.jp.');
            break;
            
        default:
            alert('Unknown message found: ' + event.name);
    }
}
