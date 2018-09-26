import { Component, OnInit } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
/**
 *  @author - Snehal Dhane
 * Full Layout component
 */
@Component({
  selector: "app-full-layout",
  templateUrl: "./full-layout.component.html",
  styleUrls: ["./full-layout.component.css"]
})
export class FullLayoutComponent implements OnInit {

  // for large icons icon = '"fa fa-dashboard fa-lg fa-fw sidebar-icon'
  public menuItems = [
    {
      displayName: "Dashboard",
      link: "/#",
      submenu: [],
      icon: "fa fa-tachometer"
    },
    {
      displayName: "Buttons",
      link: "/button",
      submenu: [],
      icon: "fa fa-dashboard"
    },
    {
      displayName: "Form",
      link: "/form",
      submenu: [
        {
          displayName: "Reactive",
          link: "/reactive",
          submenu: [],
          icon: "fa fa-dashboard"
        },
        {
          displayName: "Template Driven",
          link: "/templateDriven",
          submenu: [],
          icon: "fa fa-dashboard"
        }
      ],
      icon: "fa fa-dashboard"
    },
    {
      displayName: "Color Picker",
      link: "/colorPicker",
      submenu: [],
      icon: "fa fa-dashboard"
    },
    {
      displayName: "Date Time Picker",
      link: "/dateTime",
      submenu: [],
      icon: "fa fa-calendar"
    },
    {
      displayName: "File Download",
      link: "/fileDownload",
      submenu: [],
      icon: "fa fa-download "
    },
    {
      displayName: "File Upload",
      link: "/fileUpload",
      submenu: [],
      icon: "fa fa fa-upload"
    },
    {
      displayName: "Injectable Service",
      link: "/injectableService",
      submenu: [],
      icon: "fa fa-server"
    },
    {
      displayName: "Modal",
      link: "/modal",
      submenu: [],
      icon: "fa fa-square"
    }, {
      displayName: "Filter Pipe",
      link: "/filterPipe",
      submenu: [],
      icon: "fa fa-filter "
    },
    {
      displayName: "Tables",
      link: "/tables",
      submenu: [],
      icon: "fa fa-table"
    },
    {
      displayName: "Loader",
      link: "/loader",
      submenu: [],
      icon: "fa fa-spinner"
    },
    {
      displayName: "Toaster",
      link: "/toaster",
      submenu: [],
      icon: "fa fa-flag"
    },
    {
      displayName: "Select Search",
      link: "/selectSearch",
      submenu: [],
      icon: "fa fa-search"
    },
    {
      displayName: "Tabs",
      link: "/tabs",
      submenu: [],
      icon: "fa fa-dashboard"
    }

  ];
  constructor(public router: Router) {}

  ngOnInit() {}
}
