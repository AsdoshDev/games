import { GameService } from './game.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Game, sortGameByScoreAscending, sortGameByScoreDescending } from '../models/game';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private subject = new BehaviorSubject<Game[]>([]);
  games$: Observable<Game[]> = this.subject.asObservable();

  constructor(private gameService: GameService) {
    this.loadAllGames();
  }

  private loadAllGames() {
    this.gameService.getGames().pipe(tap(res => this.subject.next(res))).subscribe();
  }





  filterGames(title) {
    if (title) {
      let games = this.subject.getValue();
      let newList = games.filter(game => {
        let gameTitle = game['title'].toString().toLowerCase();
        return gameTitle.includes(title.toLowerCase())
      }
      )
      this.subject.next(newList)
    }
    else {
      this.loadAllGames();
    }
  }


  filterByScore(isAsending) {
    let games = this.subject.getValue();
    if (isAsending) {
      games.sort(sortGameByScoreAscending);
    }
    else {
      games.sort(sortGameByScoreDescending);
    }
    this.subject.next(games)
  }
}
