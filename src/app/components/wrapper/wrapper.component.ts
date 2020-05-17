import { Game } from "./../../models/game";
import { StoreService } from "./../../services/store.service";
import { Component, OnInit, ElementRef, ViewChild } from "@angular/core";
import { Observable, fromEvent, pipe } from "rxjs";
import { debounceTime, map, tap } from "rxjs/operators";
@Component({
  selector: "wrapper",
  templateUrl: "./wrapper.component.html",
  styleUrls: ["./wrapper.component.css"]
})
export class WrapperComponent implements OnInit {
  constructor(private storeService: StoreService) {}
  games$: Observable<Game[]>;
  games;
  public input$: Observable<string>;
  @ViewChild("searchInput", { static: false }) searchInput: ElementRef;
  ngOnInit() {}

  ngAfterViewInit() {
    fromEvent(this.searchInput.nativeElement, "keyup")
      .pipe(
        debounceTime(400),
        map((e: KeyboardEvent) => e.target["value"])
      )
      .subscribe((title: string) => {
        this.storeService.filterGames(title);
      });
  }

  filterByScore(isAscending) {
    this.storeService.filterByScore(isAscending);
  }
}
