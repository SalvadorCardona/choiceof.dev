import {ApiRessourceItem} from "../api/client";

export interface Vote {
  createAt: Date;
  choice:   string;
}

export type ApiReadVote = ApiRessourceItem & Vote

