//
//  SafariService.swift
//  SafariSkyticketToCalendar Extension
//
//  Created by Tomohiro Kumagai on 2019/05/15.
//  Copyright © 2019 Tomohiro Kumagai. All rights reserved.
//

import SafariServices

extension SFSafariTab {
    
    func getActivePageProperties(_ completionHandler: @escaping (SFSafariPage?, SFSafariPageProperties?) -> Void) {
        
        getActivePage { page in
            
            guard let page = page else {
                
                completionHandler(nil, nil)
                return
            }
            
            page.getPropertiesWithCompletionHandler { properties in
                
                completionHandler(page, properties)
            }
        }
    }
}

extension SFSafariWindow {
    
    func getActivePageProperties(_ completionHandler: @escaping (SFSafariPage?, SFSafariPageProperties?) -> Void) {
        
        getActiveTab { tab in
            
            guard let tab = tab else {
                
                completionHandler(nil, nil)
                return
            }
            
            tab.getActivePageProperties(completionHandler)
        }
    }
}
