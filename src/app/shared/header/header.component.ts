import { Component, OnInit } from '@angular/core';
import { 
  faAngleDown,
  faBorderAll,
  faSyncAlt,
  faCog,
  faBell,
  faPlus, 
  faFileUpload
} from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})
export class HeaderComponent implements OnInit {
  faAngleDown = faAngleDown;
  faBorderAll = faBorderAll;
  faSyncAlt = faSyncAlt;
  faCog = faCog;
  faBell = faBell;
  faPlus = faPlus;
  faFileUpload = faFileUpload;

  constructor() { }

  ngOnInit(): void {
  }
}
