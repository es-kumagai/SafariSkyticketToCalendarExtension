//
//  SkyticketDetailPage.swift
//  SafariSkyticketToCalendar Extension
//
//  Created by Tomohiro Kumagai on 2019/05/14.
//  Copyright © 2019 Tomohiro Kumagai. All rights reserved.
//

import Foundation

class SkyticketDetailPageInformation {
    
    private(set) var referenceNumber: String?
    
    init?(_ url: URL) {
        
        guard url.host == "skyticket.jp", url.path == "/user/application_detail.php" else {
            
            return nil
        }
        
        for (key, value) in url.queryParameters where key == "cm_application_id" {
            
            referenceNumber = value
        }
    }
}
