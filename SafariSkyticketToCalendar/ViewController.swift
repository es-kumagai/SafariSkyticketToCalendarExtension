//
//  ViewController.swift
//  SafariSkyticketToCalendar
//
//  Created by Tomohiro Kumagai on 2019/05/14.
//  Copyright © 2019 Tomohiro Kumagai. All rights reserved.
//

import Cocoa
import SafariServices.SFSafariApplication

class ViewController: NSViewController {

    @IBOutlet var appNameLabel: NSTextField!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        self.appNameLabel.stringValue = "SafariSkyticketToCalendar";
    }
    
    @IBAction func openSafariExtensionPreferences(_ sender: AnyObject?) {
        
        SFSafariApplication.showPreferencesForExtension(withIdentifier: "\(Bundle.main.bundleIdentifier!)-Extension") { error in
            if let _ = error {
                // Insert code to inform the user that something went wrong.

            }
        }
    }

}
