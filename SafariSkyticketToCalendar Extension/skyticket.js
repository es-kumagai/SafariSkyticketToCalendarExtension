
const airportAddressTable = {

    '新千歳空港' : '〒066-0012 北海道千歳市美々 987-22',
    '丘珠空港' : '〒007-0880 北海道札幌市東区丘珠町',
    '函館空港' : '〒042-0952 北海道函館市高松町 511',
    '利尻空港' : '〒097-0101 北海道利尻郡利尻富士町鴛泊本泊 1143',
    '稚内空港' : '〒098-6642 北海道稚内市声問村声問 6744',
    '根室中標津' : '〒086-1145 北海道標津郡中標津町北中 16-9',
    'オホーツク紋別空港' : '〒099-6132 北海道紋別市小向 19-3',
    '女満別空港' : '〒099-2371 北海道網走郡大空町女満別中央 201-3',
    '旭川空港' : '〒071-1562 北海道上川郡東神楽町東2線16号98番地',
    '釧路空港' : '〒084-0926 北海道釧路市鶴丘 2',
    'とかち帯広空港' : '〒089-1245 北海道帯広市泉町西9線中 8-41',
    '奥尻空港' : '〒043-1524 北海道奥尻郡奥尻町米岡185-2',
    '青森空港' : '〒030-0155 青森県青森市大谷小谷 1-5',
    '三沢空港' : '〒033-0022 青森県三沢市三沢下沢83-198',
    '秋田空港' : '〒010-1211 秋田県秋田市雄和椿川山籠 49',
    'いわて花巻空港' : '〒025-0003 岩手県花巻市東宮野目第2地割53',
    '山形空港' : '〒999-3776 山形県東根市大字羽入字柏原新林 3008',
    '大館能代空港' : '〒018-3454 秋田県北秋田市脇神 21-144',
    '庄内空港' : '〒998-0112 山形県酒田市浜中村東 30-3',
    '仙台空港' : '〒989-2401 宮城県名取市下増田南原',
    '福島空港' : '〒963-6304 福島県石川郡玉川村北須釜 16',
    '羽田空港' : '〒144-0041 東京都大田区羽田空港 3-3-2',
    '成田空港' : '〒282-0004 千葉県成田市古込 1-1',
    '茨城空港' : '〒311-3416 茨城県小美玉市与沢 1601-55',
    '八丈島空港' : '〒100-1401 東京都八丈島八丈町大賀郷 2839-2',
    '富山空港' : '〒939-8252 富山県富山市秋ヶ島 30',
    '能登空港' : '〒929-2372 石川県輪島市 10-11-1',
    '小松空港' : '〒923-0993 石川県小松市浮柳町ヨ 50',
    '新潟空港' : '〒950-0001 新潟県新潟市東区松浜町 3710',
    '信州まつもと空港' : '〒390-1132 長野県松本市空港東 8909',
    '中部空港' : '〒479-0881 愛知県常滑市セントレア 1-1',
    '小牧空港' : '〒480-0202 愛知県西春日井郡豊山町大字豊場',
    '静岡空港' : '〒421-0411 静岡県牧之原市坂口 3336-4',
    '伊丹空港' : '〒560-0036 大阪府豊中市螢池西町３丁目 555',
    '関西空港' : '〒549-0001 大阪府泉佐野市泉州空港北 1',
    '神戸空港' : '〒650-0048 兵庫県神戸市中央区神戸空港 1',
    '南紀白浜空港' : '〒649-2334 和歌山県西牟婁郡白浜町才野 1622-125',
    '但馬空港' : '〒668-0081 兵庫県豊岡市岩井字河谷 1598-34',
    '隠岐空港' : '〒685-0021 島根県隠岐郡隠岐の島町岬町 1889-12',
    '広島空港' : '〒729-0416 広島県三原市本郷町善入寺 64-31',
    '岡山空港' : '〒701-1131 岡山県岡山市北区日応寺 1277',
    '出雲空港' : '〒699-0551 島根県出雲市斐川町沖洲 2633-1',
    '鳥取空港' : '〒680-0947 鳥取県鳥取市湖山町西 4-110-5',
    '米子空港' : '〒684-0055 鳥取県境港市佐斐神町 1634',
    '萩・石見空港' : '〒698-0051 島根県益田市内田町イ 597',
    '山口宇部空港' : '〒755-0001 山口県宇部市沖宇部 625',
    '岩国空港' : '〒740-0024 山口県岩国市旭町 3-15-1',
    '徳島空港' : '〒771-0213 徳島県板野郡松茂町豊久朝日野 16-2',
    '高松空港' : '〒761-1401 香川県高松市香南町岡 1312-7',
    '高知空港' : '〒783-0096 高知県南国市久枝乙 58',
    '松山空港' : '〒791-8042 愛媛県松山市南吉田町 2731',
    '福岡空港' : '〒812-0003 福岡県福岡市博多区下臼井 778-1',
    '佐賀空港' : '〒840-2212 佐賀県佐賀市川副町大字犬井道 9476-187',
    '北九州空港' : '〒800-0306 福岡県北九州市小倉南区空港北町 6',
    '大分空港' : '〒873-0231 大分県国東市安岐町下原 13',
    '長崎空港' : '〒856-0816 長崎県大村市箕島町 593',
    '対馬空港' : '〒817-0322 長崎県対馬市美津島町鷄知乙 283',
    '壱岐空港' : '〒811-5203 長崎県壱岐市石田町筒城東触 1725',
    '五島福江空港' : '〒853-0013 長崎県五島市上大津町 2183',
    '熊本空港' : '〒861-2204 熊本県上益城郡益城町大字小谷 1802-2',
    '天草空港' : '〒863-2114 熊本県天草市五和町城河原１丁目 2080-5',
    '宮崎空港' : '〒880-0912 宮崎県宮崎市赤江',
    '鹿児島空港' : '〒899-6404 鹿児島県霧島市溝辺町麓 822',
    '種子島空港' : '〒891-3603 鹿児島県熊毛郡中種子町増田 2692-64',
    '屋久島空港' : '〒891-4207 鹿児島県熊毛郡屋久島町小瀬田 501',
    '喜界島空港' : '〒891-6203 鹿児島県大島郡喜界町中里字西牧 201-9',
    '奄美大島空港' : '〒894-0503 鹿児島県奄美市笠利町大字和野字長濱金久 374-4',
    '徳之島空港' : '〒891-7605 鹿児島県大島郡天城町浅間 1-1',
    '沖永良部空港' : '〒891-9101 鹿児島県大島郡和泊町国頭',
    '与論空港' : '〒891-9302 鹿児島県大島郡与論町立長',
    '下地島空港' : '〒906-0507 沖縄県宮古島市伊良部佐和田 1727',
    '那覇空港' : '〒901-0142 沖縄県那覇市鏡水 150',
    '宮古空港' : '〒906-0013 沖縄県宮古島市平良下里 1657-128',
    '北大東空港' : '〒901-3901 沖縄県島尻郡北大東村南 19-16',
    '南大東空港' : '〒901-3803 沖縄県島尻郡南大東村旧東 258',
    '久米島空港' : '〒901-3133 沖縄県島尻郡久米島町字北原 566-2',
    '多良間空港' : '〒906-0602 沖縄県宮古郡多良間村仲筋 2351-7',
    '石垣空港' : '〒907-0242 沖縄県石垣市白保 1960-104-1',
    '与那国空港' : '〒907-1801 沖縄県八重山郡与那国町与那国 4350'
};

function getAirportName(portName) {

    const pattern = /^\s*(?:[^)]+\(([^\)]+)\)|([^\(\)]+))\s*$/;
    const matches = portName.match(pattern);

    if (matches) {

        return matches[1] + '空港';
    }
    else {
        
        console.log('WARNING: Unknown Airport was detected: ' + portName);
        return portName;
    }
}

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
    
    getDepartureDateTime() {
        
        return makeDateTimeFromMonthDayTextAndTimeText(this.getDepartureDate(), this.getDepartureTime());
    }
    
    getArrivalDateTime() {
        
        return makeDateTimeFromMonthDayTextAndTimeText(this.getArrivalDate(), this.getArrivalTime());
    }
    
    getDeparturePortLocation() {
        
        const name = getAirportName(this.getDeparturePort());
        const address = airportAddressTable[name].replace(/,/g, '\\,');
        
        if (address) {
            
            return name + '\n' + address;
        }
        else {
            
            return name;
        }
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
