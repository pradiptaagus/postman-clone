import { Component, OnInit } from '@angular/core';
import { faSearch } from "@fortawesome/free-solid-svg-icons";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {
  faSearch = faSearch;

  isHistoryTabActive: boolean;
  isCollectionTabActive: boolean;

  constructor() { }

  ngOnInit(): void {
    this.isHistoryTabActive = true;
    this.isCollectionTabActive = false;
  }

  setActiveTab(tab: string) {
    if (tab === "history") {
      this.isHistoryTabActive = true;
      this.isCollectionTabActive = false;
    } else if (tab === "collection") {
      this.isHistoryTabActive = false;
      this.isCollectionTabActive = true;
    }
  }
}
