export interface Game {
  title: string;
  platform: string;
  score: number;
  genre: string;
  editors_choice: string;
  release_year: string;
  url: string;
}

export function sortGameByScoreAscending(g1: Game, g2: Game) {
  return g1.platform.toLowerCase() > g2.platform.toLowerCase() ? -1 : 1;
}

export function sortGameByScoreDescending(g1: Game, g2: Game) {
  return g1.platform.toLowerCase() < g2.platform.toLowerCase() ? -1 : 1;
}
