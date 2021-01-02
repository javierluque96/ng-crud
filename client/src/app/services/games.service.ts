import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Game } from '../models/Game';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GamesService {
  constructor(private http: HttpClient) {}
  API_URI = 'http://localhost:3000';

  getGames(): Observable<Game> {
    return this.http.get(`${this.API_URI}/api/games/`);
  }

  getGame(id: string): Observable<Game> {
    return this.http.get(`${this.API_URI}/api/games/${id}`);
  }

  saveGame(game: Game): Observable<Game> {
    return this.http.post(`${this.API_URI}/api/games`, game);
  }

  deleteGame(id: string): Observable<Game> {
    return this.http.delete(`${this.API_URI}/api/games/${id}`);
  }

  updateGame(id: string|number, updatedGame: Game): Observable<Game> {
    return this.http.put(`${this.API_URI}/api/games/${id}`, updatedGame);
  }
}
