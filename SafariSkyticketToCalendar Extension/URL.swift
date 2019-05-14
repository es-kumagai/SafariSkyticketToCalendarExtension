//
//  URL.swift
//  SafariSkyticketToCalendar Extension
//
//  Created by Tomohiro Kumagai on 2019/05/14.
//  Copyright © 2019 Tomohiro Kumagai. All rights reserved.
//

import Foundation

extension URL {

    var queryParameters: Dictionary<String, String> {

        guard let query = query else {
            
            return [:]
        }
        
        let keysWithValues = query
            .split(separator: "&")
            .map { $0.split(separator: "=") }
            .map { (String($0[0]), String($0[1])) }
            
        return Dictionary(uniqueKeysWithValues: keysWithValues)
    }
}
