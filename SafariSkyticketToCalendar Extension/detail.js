
function scrapingDetailPage() {

    console.log('Start scraping ...');
    
    const rootNode = document.getElementsByClassName('reserve_detail')[0];
    
    const descriptionTitle = scrapingScheduleDescriptionTitle(rootNode);
    console.log(descriptionTitle);
    
    const scheduleTables = rootNode.getElementsByClassName('rsv_schedule_table');
    const scheduleTableCount = scheduleTables.length;

    console.log(String(scheduleTableCount) + ' schedules found.');
    
    let events = new Array();
    
    for (let index = 0; index != scheduleTableCount; ++index) {
        
        console.log('Scraping ' + String(index + 1) + ' of ' + String(scheduleTableCount) + ' item ...');
        
        const scheduleTable = scheduleTables[index];
        const description = scheduleTable.innerText;
        
        const schedule = scrapingScheduleTable(scheduleTable);
        const event = createEventFromSchedule(schedule, descriptionTitle + '\n\n' + description);
        
        events.push(event);
    }
    
    console.log('Creating Calendar Data ...');
    
    const caption = 'skyticket ' + descriptionTitle;
    const data = createCalendarDataWithEvents(caption, events);
    const dataURI = createDataURI(data, 'text/calendar');
    
    console.log('Downloading calendar data ...');
    
    openURI(dataURI);

    console.log('Process finished.');
}

function scrapingScheduleDescriptionTitle(targetNode) {

    const titleNode = targetNode.getElementsByClassName('mypage_main_title')[0];
    
    return titleNode.innerText.trim();
}

function scrapingScheduleTable(targetNode) {

    const ticketHeader = scrapingScheduleTicketHeader(targetNode);
    const airlineNumber = scrapingScheduleAirlineNumber(targetNode);
    const ticketBody = scrapingScheduleTicketBody(targetNode);
    const passengers = scrapingSchedulePassengers(targetNode);

    return new Schedule(ticketHeader, airlineNumber, ticketBody, passengers);
}

function scrapingScheduleTicketHeader(targetNode) {

    console.log('Scraping the part of ticket header ...');
    
    const rootNode = targetNode.getElementsByClassName('rsv_schedule_body_head')[0];
    const rootInnerNode = rootNode.getElementsByClassName('rsv_schedule_body_root_inner')[0];

    const dataNode = rootInnerNode.getElementsByTagName('p')[0];
    const textNodes = getTextNodesIn(dataNode);
    
    console.log(String(textNodes.length) + ' text data were detected.');
    
    const departure = textNodes[0].wholeText.trim();
    const arrival = textNodes[1].wholeText.trim();
    
    console.log('Departure: ' + departure);
    console.log('Arrival: ' + arrival);
    
    
    const typeListNode = rootNode.getElementsByClassName('type_list')[0];
    const listNodes = typeListNode.getElementsByTagName('li');
    
    function getTextOf(node, label) {
        
        if (node.firstChild.innerText == label) {
            
            return getTextNodesIn(node)[0].wholeText;
        }
        else {
            
            return null;
        }
    }
    
    const fligntNumber = getTextOf(listNodes[0], '便名：').trim();
    const seatClass = getTextOf(listNodes[1], '座席クラス：').trim();
    const ticketType = getTextOf(listNodes[2], '券種：').trim();

    console.log('Flight Number: ' + fligntNumber);
    console.log('Seat Class: ' + seatClass);
    console.log('Ticket Type: ' + ticketType);
    
    
    return new TicketHeader(ticketType, fligntNumber, seatClass, departure, arrival);
}

function scrapingScheduleAirlineNumber(targetNode) {

    console.log('Scraping the part of airline number ...');
    
    const rootNode = targetNode.getElementsByClassName('rsv_schedule_airlineNum')[0];
    const airlineNumberNode = rootNode.getElementsByClassName('airlineNum')[0];
    
    const text = airlineNumberNode.innerText.trim();
    const parts = text.split('：');
    
    if (parts[0] != '予約番号') {
    
        throw Error('Airline Confirmation Number is not found.');
    }
    
    const confirmationNumber = parts[1];
    
    console.log('Confirmation Number: ' + confirmationNumber);

    return new AirlineNumber(confirmationNumber);
}

function scrapingScheduleTicketBody(targetNode) {

    console.log('Scraping the part of ticket body ...');
    
    const rootNode = targetNode.getElementsByClassName('rsv_schedule_body_main')[0];

    function getDateAndTimeAndPort(node) {
        
        const dateNode = node.getElementsByClassName('date')[0];
        const timeAndPortNode = node.getElementsByClassName('time')[0];
        const timeNode = timeAndPortNode.getElementsByClassName('c')[0];
        const portNode = timeAndPortNode.getElementsByClassName('p')[0];
        
        const date = dateNode.innerText.trim();
        const time = timeNode.innerText.trim();
        const port = portNode.innerText.trim();
        
        return [date, time, port];
    }
    
    function dataToString(data, label) {
        
        return label + ': ' + data.join(' ');
    }
    
    const departureNode = rootNode.getElementsByClassName('rsv_schedule_body_departure')[0];
    const arrivalNode = rootNode.getElementsByClassName('rsv_schedule_body_arrival')[0];
    
    const departureData = getDateAndTimeAndPort(departureNode);
    const arrivalData = getDateAndTimeAndPort(arrivalNode);
    
    console.log(dataToString(departureData, 'Department'));
    console.log(dataToString(arrivalData, 'Arrival'));
    
    return new TicketBody(departureData[0], departureData[1], departureData[2], arrivalData[0], arrivalData[1], arrivalData[2]);
}

function scrapingSchedulePassengers(targetNode) {

    console.log('Scraping the part of passengers ...');
    
    const rootNode = targetNode.getElementsByClassName('rsv_schedule_body_passenger')[0];
    const nameNodes = rootNode.getElementsByClassName('name');
    
    let names = new Array();
    
    for (let index = 0; index != nameNodes.length; ++index) {
        
        const nameNode = nameNodes[index];
        const name = getTextNodesIn(nameNode)[0].wholeText.trim();
        
        names.push(name);
    }

    console.log('Passengers: ' + names.join(', '));
    
    return names;
}

function createEventFromSchedule(schedule, descriptionText) {

    console.log('Creating an event ...');
    
    const ticketHeader = schedule.getTicketHeader();
    const airlineNumber = schedule.getAirlineNumber();
    const ticketBody = schedule.getTicketBody();
    const passengers = schedule.getPassengers();
    
    const fligntNumber = ticketHeader.getFlightNumber();
    const departureDateTime = ticketBody.getDepartureDateTime();
    const arrivalDateTime = ticketBody.getArrivalDateTime();
    const departurePortLocation = ticketBody.getDeparturePortLocation();

    console.log('Flight Number: ' + fligntNumber);
    console.log('Departure Date: ' + departureDateTime);
    console.log('Arrival Date: ' + arrivalDateTime);
    console.log('Departure Port: ' + departurePortLocation);
    
    const currentDateTime = new Date();
    
    const summary = convertToContentTextFrom(fligntNumber);
    const dtstart = getCalendarDateTimeAsString(departureDateTime);
    const dtend = getCalendarDateTimeAsString(arrivalDateTime);
    const dtstamp = getCalendarDateTimeAsString(currentDateTime);
    const created = getCalendarDateTimeAsString(currentDateTime);
    const description = convertToContentTextFrom(descriptionText);
    const location = convertToContentTextFrom(departurePortLocation);
    const url = document.location;
    
    return new Event(summary, dtstart, dtend, dtstamp, created, description, location, url);
}

function createCalendarDataWithEvents(caption, events) {
    
    let data = [
                'BEGIN:VCALENDAR',
                'VERSION:2.0',
                'PRODID:-//ez-net.jp//SafariSkyticketToCalendar',
                'CALSCALE:GREGORIAN',
                'METHOD:PUBLISH',
                'X-WR-CALNAME:' + convertToContentTextFrom(caption),
                'X-WR-TIMEZONE:JST'
                ];
    
    for (let index = 0; index != events.length; ++index) {
        
        data = data.concat(events[index].getVEventData());
    }
    
    data = data.concat([
                        'END:VCALENDAR'
                        ]);
    
    return data;
}
