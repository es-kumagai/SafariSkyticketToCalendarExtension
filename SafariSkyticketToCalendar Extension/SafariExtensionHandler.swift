//
//  SafariExtensionHandler.swift
//  SafariSkyticketToCalendar Extension
//
//  Created by Tomohiro Kumagai on 2019/05/14.
//  Copyright © 2019 Tomohiro Kumagai. All rights reserved.
//

import SafariServices

class SafariExtensionHandler: SFSafariExtensionHandler {
    
    override func messageReceived(withName messageName: String, from page: SFSafariPage, userInfo: [String : Any]?) {
        // This method will be called when a content script provided by your extension calls safari.extension.dispatchMessage("message").
        page.getPropertiesWithCompletionHandler { properties in
            NSLog("The extension received a message (\(messageName)) from a script injected into (\(String(describing: properties?.url))) with userInfo (\(userInfo ?? [:]))")
        }
    }
    
    override func toolbarItemClicked(in window: SFSafariWindow) {
        
        window.getActivePageProperties { page, properties in
            
            guard let page = page else {
                
                return
            }
            
            guard let url = properties?.url else {
                
                page.dispatchMessageToScript(withName: "IncompatiblePage", userInfo: nil)
                return
            }
            
            SkyticketDetailPageInformation(url)?.dispatchMessage(to: page)
            WillerDetailPageInformation(url)?.dispatchMessage(to: page)
        }
    }
    
    override func validateToolbarItem(in window: SFSafariWindow, validationHandler: @escaping ((Bool, String) -> Void)) {
        // This is called when Safari's state changed in some way that would require the extension's toolbar item to be validated again.
        validationHandler(true, "")
    }
    
    override func popoverViewController() -> SFSafariExtensionViewController {
        return SafariExtensionViewController.shared
    }

}
