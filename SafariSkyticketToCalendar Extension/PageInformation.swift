//
//  PageInformation.swift
//  SafariSkyticketToCalendar Extension
//
//  Created by Tomohiro Kumagai on 2020/01/04.
//  Copyright © 2020 Tomohiro Kumagai. All rights reserved.
//

import Foundation
import SafariServices

protocol DetailPageInformation {
    
    init?(_ url: URL)
    
    func dispatchMessage(to page: SFSafariPage)
}
