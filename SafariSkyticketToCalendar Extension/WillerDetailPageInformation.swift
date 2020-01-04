//
//  SkyticketDetailPage.swift
//  SafariSkyticketToCalendar Extension
//
//  Created by Tomohiro Kumagai on 2019/05/14.
//  Copyright © 2019 Tomohiro Kumagai. All rights reserved.
//

import Foundation
import SafariServices

class WillerDetailPageInformation : DetailPageInformation {
    
    private(set) var reservationNumber: String?
    
    required init?(_ url: URL) {
        
        guard url.host == "travel.willer.co.jp", url.path.hasPrefix("/dy/3/bus/pc/mypage/yoyakuNaiyoShosai") else {
            
            return nil
        }
        
        for (key, value) in url.queryParameters where key == "ctChumonId" {
            
            reservationNumber = value
        }
    }
    
    func dispatchMessage(to page: SFSafariPage) {
        
        page.dispatchMessageToScript(withName: "ScrapingDetailPageForWILLER", userInfo: [
        "reservationNumber" : reservationNumber ?? ""
        ])
    }
}
