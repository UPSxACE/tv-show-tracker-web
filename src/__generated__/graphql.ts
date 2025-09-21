/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = T | null | undefined;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Actor = {
  __typename?: 'Actor';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  popularity: Scalars['Float']['output'];
  profileUrl: Scalars['String']['output'];
};

export type ActorCredit = {
  __typename?: 'ActorCredit';
  actor: Actor;
  actorId: Scalars['Int']['output'];
  character: Scalars['String']['output'];
  firstAirDate?: Maybe<Scalars['String']['output']>;
  firstCreditAirDate?: Maybe<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  overview?: Maybe<Scalars['String']['output']>;
  popularity: Scalars['Float']['output'];
  tvShowId?: Maybe<Scalars['Int']['output']>;
};

export type ActorOrderInput = {
  direction?: InputMaybe<SortDirection>;
  field: ActorSortableField;
};

export enum ActorSortableField {
  Id = 'id',
  Name = 'name',
  Popularity = 'popularity'
}

export type AllActorsInput = {
  order?: InputMaybe<ActorOrderInput>;
  page?: InputMaybe<PageInput>;
};

export type AllActorsPage = {
  __typename?: 'AllActorsPage';
  content: Array<Actor>;
  pageable: Pageable;
  total: Scalars['Int']['output'];
};

export type AllTvShowsFilterInput = {
  genreId?: InputMaybe<Scalars['Int']['input']>;
};

export type AllTvShowsInput = {
  filter?: InputMaybe<AllTvShowsFilterInput>;
  order?: InputMaybe<TvShowOrderInput>;
  page?: InputMaybe<PageInput>;
};

export type AllTvShowsPage = {
  __typename?: 'AllTvShowsPage';
  content: Array<TvShow>;
  pageable: Pageable;
  total: Scalars['Int']['output'];
};

export type Genre = {
  __typename?: 'Genre';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
};

export type PageInput = {
  page?: InputMaybe<Scalars['Int']['input']>;
  size?: InputMaybe<Scalars['Int']['input']>;
};

export type Pageable = {
  __typename?: 'Pageable';
  pageNumber: Scalars['Int']['output'];
  pageSize: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  allActors: AllActorsPage;
  allGenres: Array<Genre>;
  allTvShows: AllTvShowsPage;
  getActor?: Maybe<Actor>;
  getActorCredits: Array<ActorCredit>;
  getTvShow?: Maybe<TvShow>;
};


export type QueryAllActorsArgs = {
  input?: InputMaybe<AllActorsInput>;
};


export type QueryAllTvShowsArgs = {
  input?: InputMaybe<AllTvShowsInput>;
};


export type QueryGetActorArgs = {
  id: Scalars['Int']['input'];
};


export type QueryGetActorCreditsArgs = {
  actorId: Scalars['Int']['input'];
};


export type QueryGetTvShowArgs = {
  id: Scalars['Int']['input'];
};

export type Season = {
  __typename?: 'Season';
  airDate?: Maybe<Scalars['String']['output']>;
  episodeCount: Scalars['Int']['output'];
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  seasonNumber: Scalars['Int']['output'];
};

export enum SortDirection {
  Asc = 'ASC',
  Desc = 'DESC'
}

export type TvShow = {
  __typename?: 'TvShow';
  actorCredits: Array<ActorCredit>;
  firstAirDate?: Maybe<Scalars['String']['output']>;
  genres: Array<Genre>;
  id: Scalars['ID']['output'];
  inProduction: Scalars['Boolean']['output'];
  lastAirDate?: Maybe<Scalars['String']['output']>;
  name: Scalars['String']['output'];
  numberOfEpisodes: Scalars['Int']['output'];
  numberOfSeasons: Scalars['Int']['output'];
  overview?: Maybe<Scalars['String']['output']>;
  popularity: Scalars['Float']['output'];
  posterUrl: Scalars['String']['output'];
  seasons: Array<Season>;
  voteAverage: Scalars['Float']['output'];
};

export type TvShowOrderInput = {
  direction?: InputMaybe<SortDirection>;
  field: TvShowSortableField;
};

export enum TvShowSortableField {
  FirstAirDate = 'firstAirDate',
  Id = 'id',
  Name = 'name',
  Popularity = 'popularity',
  VoteAverage = 'voteAverage'
}

export type GetActorQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetActorQuery = { __typename?: 'Query', getActor?: { __typename: 'Actor', id: string, name: string, popularity: number, profileUrl: string } | null, getActorCredits: Array<{ __typename: 'ActorCredit', id: string, name: string, overview?: string | null, popularity: number, character: string, firstAirDate?: string | null, firstCreditAirDate?: string | null, tvShowId?: number | null }> };

export type GetTvShowQueryVariables = Exact<{
  id: Scalars['Int']['input'];
}>;


export type GetTvShowQuery = { __typename?: 'Query', getTvShow?: { __typename: 'TvShow', id: string, name: string, overview?: string | null, posterUrl: string, popularity: number, voteAverage: number, numberOfSeasons: number, numberOfEpisodes: number, firstAirDate?: string | null, lastAirDate?: string | null, inProduction: boolean, seasons: Array<{ __typename: 'Season', id: string, seasonNumber: number, name: string, episodeCount: number, airDate?: string | null }>, genres: Array<{ __typename: 'Genre', id: string, name: string }>, actorCredits: Array<{ __typename: 'ActorCredit', id: string, character: string, popularity: number, actor: { __typename?: 'Actor', id: string, name: string, popularity: number, profileUrl: string } }> } | null };

export type GetTvShowsQueryVariables = Exact<{
  input?: InputMaybe<AllTvShowsInput>;
}>;


export type GetTvShowsQuery = { __typename?: 'Query', allTvShows: { __typename: 'AllTvShowsPage', total: number, pageable: { __typename: 'Pageable', pageNumber: number, pageSize: number }, content: Array<{ __typename: 'TvShow', id: string, name: string, posterUrl: string, voteAverage: number }> } };

export type GetGenresQueryVariables = Exact<{ [key: string]: never; }>;


export type GetGenresQuery = { __typename?: 'Query', allGenres: Array<{ __typename: 'Genre', id: string, name: string }> };


export const GetActorDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetActor"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getActor"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"popularity"}},{"kind":"Field","name":{"kind":"Name","value":"profileUrl"}}]}},{"kind":"Field","name":{"kind":"Name","value":"getActorCredits"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"actorId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"overview"}},{"kind":"Field","name":{"kind":"Name","value":"popularity"}},{"kind":"Field","name":{"kind":"Name","value":"character"}},{"kind":"Field","name":{"kind":"Name","value":"firstAirDate"}},{"kind":"Field","name":{"kind":"Name","value":"firstCreditAirDate"}},{"kind":"Field","name":{"kind":"Name","value":"tvShowId"}}]}}]}}]} as unknown as DocumentNode<GetActorQuery, GetActorQueryVariables>;
export const GetTvShowDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTvShow"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getTvShow"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"overview"}},{"kind":"Field","name":{"kind":"Name","value":"posterUrl"}},{"kind":"Field","name":{"kind":"Name","value":"popularity"}},{"kind":"Field","name":{"kind":"Name","value":"voteAverage"}},{"kind":"Field","name":{"kind":"Name","value":"numberOfSeasons"}},{"kind":"Field","name":{"kind":"Name","value":"numberOfEpisodes"}},{"kind":"Field","name":{"kind":"Name","value":"firstAirDate"}},{"kind":"Field","name":{"kind":"Name","value":"lastAirDate"}},{"kind":"Field","name":{"kind":"Name","value":"inProduction"}},{"kind":"Field","name":{"kind":"Name","value":"seasons"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"seasonNumber"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"episodeCount"}},{"kind":"Field","name":{"kind":"Name","value":"airDate"}}]}},{"kind":"Field","name":{"kind":"Name","value":"genres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}},{"kind":"Field","name":{"kind":"Name","value":"actorCredits"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"character"}},{"kind":"Field","name":{"kind":"Name","value":"popularity"}},{"kind":"Field","name":{"kind":"Name","value":"actor"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"popularity"}},{"kind":"Field","name":{"kind":"Name","value":"profileUrl"}}]}}]}}]}}]}}]} as unknown as DocumentNode<GetTvShowQuery, GetTvShowQueryVariables>;
export const GetTvShowsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetTvShows"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"input"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"AllTvShowsInput"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allTvShows"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"input"},"value":{"kind":"Variable","name":{"kind":"Name","value":"input"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"total"}},{"kind":"Field","name":{"kind":"Name","value":"pageable"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"pageNumber"}},{"kind":"Field","name":{"kind":"Name","value":"pageSize"}}]}},{"kind":"Field","name":{"kind":"Name","value":"content"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}},{"kind":"Field","name":{"kind":"Name","value":"posterUrl"}},{"kind":"Field","name":{"kind":"Name","value":"voteAverage"}}]}}]}}]}}]} as unknown as DocumentNode<GetTvShowsQuery, GetTvShowsQueryVariables>;
export const GetGenresDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetGenres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"allGenres"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"__typename"}},{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"name"}}]}}]}}]} as unknown as DocumentNode<GetGenresQuery, GetGenresQueryVariables>;