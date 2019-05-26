
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
    
    get summary() {
        
        return this._summary;
    }
    
    get dtStart() {
        
        return this._dtstart;
    }
    
    get dtEnd() {
        
        return this._dtend;
    }
    
    get dtStamp() {
        
        return this._dtstamp;
    }
    
    get created() {
        
        return this._created;
    }
    
    get description() {
        
        return this._description;
    }
    
    get location() {
        
        return this._location;
    }
    
    get url() {
        
        return this._url;
    }
    
    get vEventData() {
        
        return [
                      'BEGIN:VEVENT',
                      'SUMMARY:' + this.summary,
                      'DTSTART;TZID=JST;VALUE=DATE-TIME:' + this.dtStart,
                      'DTEND;TZID=JST;VALUE=DATE-TIME:' + this.dtEnd,
                      'DTSTAMP;VALUE=DATE-TIME:' + this.dtStamp,
                      'CREATED;VALUE=DATE-TIME:' + this.created,
                      'DESCRIPTION:' + this.description,
                      'LOCATION:' + this.location,
                      'URL:' + this.url,
                      'END:VEVENT'
                      ];
    }
}
