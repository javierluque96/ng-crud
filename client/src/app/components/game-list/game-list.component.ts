import { Component, OnInit } from '@angular/core';
import { GamesService } from '../../services/games.service';

@Component({
  selector: 'app-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.scss'],
})
export class GameListComponent implements OnInit {
  games: any = [];
  constructor(private gamesService: GamesService) {}

  ngOnInit(): void {
    this.getGames();
  }

  deleteGame(id: string) {
    this.gamesService.deleteGame(id).subscribe(
      res => {
        console.log(res);
        this.getGames();
      },
      err => console.error(err)

    );
  }

  getGames(): void {
    this.gamesService.getGames().subscribe(
      (res) => {
        this.games = res;
      },
      (err) => console.error(err)
    );
  }

  editGame(id: string) {
    console.log(id);
  }
}
