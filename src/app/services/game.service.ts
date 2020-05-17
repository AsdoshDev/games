import { Game } from "./../models/game";
import { Injectable, ɵConsole } from "@angular/core";
import { MainService } from "./main-service.service";
import { API } from "./../util/api";
import { Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class GameService {
  constructor(private mainService: MainService) { }

  getGames(): Observable<Game[]> {
    // console.log("GameService -> constructor -> Game", Game)

    return this.mainService.getResponse(API.GAME_LIST).pipe(
      map(res => res as Game[]),
      shareReplay()
    );
  }
}
