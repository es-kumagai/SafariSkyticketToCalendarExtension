
// 改行を含むテキストをカレンダーに埋め込める形にします。
function convertToContentTextFrom(text) {
    
    return text.replace(/\n/g, '\\n');
}

class Event {
    
    constructor(summary, dtstart, dtend, dtstamp, created, description, location, url) {
    
        this._summary = summary;
        this._dtstart = dtstart;
        this._dtend = dtend;
        this._dtstamp = dtstamp;
        this._created = created;
        this._description = description;
        this._location = location;
        this._url = url;
    }
    
    getSummary() {
        
        return this._summary;
    }
    
    getDTStart() {
        
        return this._dtstart;
    }
    
    getDTEnd() {
        
        return this._dtend;
    }
    
    getDTStamp() {
        
        return this._dtstamp;
    }
    
    getCreated() {
        
        return this._created;
    }
    
    getDescription() {
        
        return this._description;
    }
    
    getLocation() {
        
        return this._location;
    }
    
    getUrl() {
        
        return this._url;
    }
    
    getVEventData() {
        
        return [
                      'BEGIN:VEVENT',
                      'SUMMARY:' + this.getSummary(),
                      'DTSTART;TZID=JST;VALUE=DATE-TIME:' + this.getDTStart(),
                      'DTEND;TZID=JST;VALUE=DATE-TIME:' + this.getDTEnd(),
                      'DTSTAMP;VALUE=DATE-TIME:' + this.getDTStamp(),
                      'CREATED;VALUE=DATE-TIME:' + this.getCreated(),
                      'DESCRIPTION:' + this.getDescription(),
                      'LOCATION:' + this.getLocation(),
                      'URL:' + this.getUrl(),
                      'END:VEVENT'
                      ];
    }
}
