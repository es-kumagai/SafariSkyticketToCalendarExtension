
function makeDateTimeFromMonthDayTextAndTimeText(monthdayText, timeText) {
    
    const datePart = monthdayText.split('/');
    const timePart = timeText.split(':');
    
    const currentDateTime = new Date();
    
    const year = currentDateTime.getFullYear();
    const monthIndex = datePart[0] - 1;
    const day = datePart[1];
    const hour = timePart[0];
    const minutes = timePart[1];
    
    if (monthIndex < currentDateTime.getMonth()) {
        
        return new Date(year + 1, monthIndex, day, hour, minutes);
    }
    else {
        
        return new Date(year, monthIndex, day, hour, minutes);
    }
}

function getCalendarDateOnlyAsString(date) {
    
    const yearText = String(date.getFullYear());
    const monthText = ('0' + String(date.getMonth() + 1)).slice(-2);
    const dayText = ('0' + String(date.getDate())).slice(-2);
    
    return yearText + monthText + dayText;
}

function getCalendarDateTimeAsString(date) {
    
    const yearText = String(date.getFullYear());
    const monthText = ('0' + String(date.getMonth() + 1)).slice(-2);
    const dayText = ('0' + String(date.getDate())).slice(-2);
    const hoursText = ('0' + String(date.getHours())).slice(-2);
    const minutesText = ('0' + String(date.getMinutes())).slice(-2);
    const secondsText = ('0' + String(date.getSeconds())).slice(-2);
    
    return yearText + monthText + dayText + 'T' + hoursText + minutesText + secondsText;
}
