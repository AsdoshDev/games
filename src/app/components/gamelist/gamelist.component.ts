import { StoreService } from "./../../services/store.service";
import { Game } from "./../../models/game";
import { Component, OnInit, Input } from "@angular/core";
import { Observable } from "rxjs";

@Component({
  selector: "gamelist",
  templateUrl: "./gamelist.component.html",
  styleUrls: ["./gamelist.component.css"]
})
export class GamelistComponent implements OnInit {
  games$: Observable<Game[]>;
  @Input() games;

  constructor(private storeService: StoreService) {}

  ngOnInit() {
    this.games$ = this.storeService.games$;
  }
}
