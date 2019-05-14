
class TicketHeader {
    
    constructor(ticketType, flightNumber, seatClass, departure, arrival) {
        
        this._ticketType = ticketType;
        this._flightNumber = flightNumber;
        this._seatClass = seatClass;
        this._departure = departure;
        this._arrival = arrival;
    }
    
    // 便名を取得します。
    getFlightNumber() {
        
        return this._flightNumber;
    }
    
    // 座席クラスを取得します。
    getSeatClass() {
        
        return this._seatClass;
    }
    
    // 券種を取得します。
    getTicketType() {
        
        return this._ticketType;
    }
    
    // 出発元を取得します。
    getDeparture() {
        
        return this._departure;
    }
    
    // 到着先を取得します。
    getArrival() {
        
        return this._arrival;
    }
}

class AirlineNumber {
    
    constructor(confirmationNumber) {
        
        this._confirmationNumber = confirmationNumber;
    }
    
    // 予約番号を取得します。
    getConfirmationNumber() {
        
        return this._confirmationNumber;
    }
}

class TicketBody {

    constructor(departureDate, departureTime, departurePort, arrivalDate, arrivalTime, arrivalPort) {
        
        this._departureDate = departureDate;
        this._departureTime = departureTime;
        this._departurePort = departurePort;
        
        this._arrivalDate = arrivalDate;
        this._arrivalTime = arrivalTime;
        this._arrivalPort = arrivalPort;
    }

    getDepartureDate() {
        
        return this._departureDate;
    }
    
    getDepartureTime() {
        
        return this._departureTime;
    }
    
    getDeparturePort() {
        
        return this._departurePort;
    }
    
    getArrivalDate() {
        
        return this._arrivalDate;
    }
    
    getArrivalTime() {
        
        return this._arrivalTime;
    }
    
    getArrivalPort() {
        
        return this._arrivalPort;
    }
}

class Schedule {
    
    constructor(ticketHeader, airlineNumber, ticketBody, passengers) {
        
        this._ticketHeader = ticketHeader;
        this._airlineNumber = airlineNumber;
        this._ticketBody = ticketBody;
        this._passengers = passengers;
    }
    
    getTicketHeader() {
        
        return this._ticketHeader;
    }
    
    getAirlineNumber() {
        
        return this._airlineNumber;
    }
    
    getTicketBody() {
        
        return this._ticketBody;
    }
    
    getPassengers() {
        
        return this._passengers;
    }
}
