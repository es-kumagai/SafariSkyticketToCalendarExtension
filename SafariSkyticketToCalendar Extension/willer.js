
window.addEventListener("load", willerOnLoad);

function willerOnLoad() {
    
    function isDataFound() {
        
        const topTitleNodes = document.getElementsByClassName('toptit-area');
        const topTitleNode = topTitleNodes[0];
        const topTitleText = topTitleNode.innerText.trim();
        
        if (topTitleText === '予約内容詳細') {
            
            console.log('WILLER: Detail page was detected.');
            
            return true;
        }
        else {
            
            return false;
        }
    }
    
    if (isDataFound()) {

        // ここに予約詳細ページであることを検出した時の事前処理を記載します。
    }
}

function makeWillerCalendar() {
    
    let reservationNumber = null;
    
    function parseEventFromRecordNode(recordNode) {
        
        console.log('予約番号 ', reservationNumber);
        
        function getSummary() {
            
            return 'WILLER: ' + recordNode.getElementsByClassName('titcontxt')[0].innerText.trim();
        }
        
        function getDescriptionText() {
            
            return '予約番号: ' + reservationNumber + '\n\n' + recordNode.innerText;
        }
        
        function getCurrentDateTime() {
            
            const currentDateTime = new Date();
            
            return getCalendarDateTimeAsString(currentDateTime);
        }
        
        function getKukanInformation() {
        
            const rosenNode = recordNode.getElementsByClassName('mpcart_rosen_tbl')[0];
            const rosenTextNode = rosenNode.getElementsByTagName('th')[0];
            const rosenText = rosenTextNode.innerText;
            
            const currentDateTime = new Date();
            const currentYear = currentDateTime.getFullYear();
            const currentMonth = currentDateTime.getMonth() + 1;
            
            console.log('Current Year/Month: ' + currentYear + '/' + currentMonth);
            
            function getKukan() {
                
                const kukan = new Object();
                
                const kukanNode = recordNode.getElementsByClassName('kukan')[0];
                const anchorNodes = kukanNode.getElementsByTagName('a');
                
                const patternForLocation = new RegExp('^([^\\(]+)\\(');
                const patternForDeparture = new RegExp('\\((\\d+):(\\d+)発\\)');
                const patternForArrival = new RegExp('\\((|翌)(\\d+):(\\d+)着\\)');
                
                
                let matches = undefined;
                
                if (matches = anchorNodes[0].innerText.match(patternForLocation)) {
                    
                    const location = matches[1];
                    
                    kukan['location'] = location;
                    console.log('Location: ' + location);
                }
                else {
                    
                    console.log('UNEXPECTED: No location found.');
                }
                
                
                for (let i = 0; i != anchorNodes.length; ++i) {
                    
                    const anchorText = anchorNodes[i].innerText;
                    
                    console.log(anchorText);
                    
                    if (matches = anchorText.match(patternForDeparture)) {
                        
                        kukan['departureHour'] = parseInt(matches[1], 10);
                        kukan['departureMinutes'] = parseInt(matches[2], 10);
                    }
                    else if (matches = anchorText.match(patternForArrival)) {
                        
                        kukan['arrivalDayOption'] = matches[1];
                        kukan['arrivalHour'] = parseInt(matches[2], 10);
                        kukan['arrivalMinutes'] = parseInt(matches[3], 10);
                    }
                }
                
                return kukan;
            }
            
            const kukan = getKukan();
            
            const textMonthAndDay = rosenText.substr(0, 5).split('/');
            const targetMonthAndDay = textMonthAndDay.map((value) => { return parseInt(value, 10)});
            const targetMonth = targetMonthAndDay[0];
            const targetDay = targetMonthAndDay[1];
            const targetYear = (currentMonth > targetMonth ? currentYear + 1 : currentYear);

            console.log('Departure Date: ' + targetYear + '/' + targetMonth + '/' + targetDay);

            const departureDateTime = new Date(
                                               targetYear,
                                               targetMonth - 1,
                                               targetDay,
                                               kukan['departureHour'],
                                               kukan['departureMinutes']
                                               );
            const arrivalDateTime = new Date(
                                             targetYear,
                                             targetMonth - 1,
                                             kukan['arrivalDayOption'] === '翌' ? targetDay + 1 : targetDay,
                                             kukan['arrivalHour'],
                                             kukan['arrivalMinutes']
                                             );
            const departureLocation = kukan['location'];
            
            console.log('Departure: ' + departureDateTime);
            console.log('Arrival: ' + arrivalDateTime);

            return {
                'departure': departureDateTime,
                'arrival': arrivalDateTime,
                'location': departureLocation
            };
        }
        
        const kukanInfo = getKukanInformation();
        
        const summary = getSummary();
        const dtStart = getCalendarDateTimeAsString(kukanInfo['departure']);
        const dtEnd = getCalendarDateTimeAsString(kukanInfo['arrival']);
        const dtStamp = getCurrentDateTime();
        const created = getCurrentDateTime();
        const description = convertToContentTextFrom(getDescriptionText());
        const departureLocation = convertToContentTextFrom(kukanInfo['location']);
        const url = location.href;
        
        return [new Event(summary, dtStart, dtEnd, dtStamp, created, description, departureLocation, url)];
    }
    
    function parseRecords() {
        
        function getReservationNumber() {
            
            const baseInfoNode = document.getElementsByClassName('pag-time-titlezone')[0];
            
            if (baseInfoNode) {
                
                const spanNodes = baseInfoNode.getElementsByTagName('span');
                
                for (let i = 0; i != spanNodes.length; ++i) {
                
                    const spanNode = spanNodes[i];
                    
                    if (spanNode.innerText.trim() === '予約番号：') {
                        
                        const reservationNumberNode = spanNodes[i+1];
                        const reservationNumber = reservationNumberNode.innerText.trim();
                        
                        return reservationNumber;
                    }
                }
            }
            
            return null;
        }
        
        reservationNumber = getReservationNumber();
        
        console.log('Reservation Number: ' + reservationNumber);
        const recordNodes = document.getElementsByClassName('mpcartlist');
        const recordNodeCount = recordNodes.length;
        
        if (recordNodeCount > 0) {

            console.log(recordNodeCount + ' records found.');
            
            const events = Array.from(recordNodes).flatMap(parseEventFromRecordNode);

            
            console.log('Creating Calendar Data ...');
            
            const caption = 'WILLER ' + reservationNumber;
            const data = createCalendarDataWithEvents(caption, events);
            const dataURI = createDataURI(data, 'text/calendar');
            
            console.log('Downloading calendar data ...');
            
            openURI(dataURI);

            console.log('Process finished.');
        }
        else {
            
            console.log('No records found.');
        }
    }
    
    parseRecords();
}
