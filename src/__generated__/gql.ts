/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
type Documents = {
    "\nquery GetActor($id: Int!) {\n  getActor(id: $id){\n    __typename\n    id\n    name\n    popularity\n    profileUrl\n  }\n  getActorCredits(actorId: $id){\n    __typename\n    id\n    name\n    overview\n    popularity\n    character\n    firstAirDate\n    firstCreditAirDate\n    tvShowId\n  }\n}\n": typeof types.GetActorDocument,
    "\nmutation LoginUser($input: LoginUserInput!){\nloginUser(input: $input){\n    accessToken\n}\n}\n": typeof types.LoginUserDocument,
    "\nquery GetFavoriteTvShows($input: FavoriteTvShowsInput!) {\n  favoriteTvShows(input: $input) {\n    __typename\n    total\n    pageable {\n      __typename\n      pageNumber\n      pageSize\n    }\n    content {\n      __typename\n      id\n      favoritedAt\n      tvShow {\n        __typename\n        id\n        name\n        posterUrl\n        voteAverage\n      }\n    }\n  }\n}\n": typeof types.GetFavoriteTvShowsDocument,
    "\nmutation RegisterUser($input: RegisterUserInput!){\n    registerUser(input: $input)\n}\n": typeof types.RegisterUserDocument,
    "\nmutation SaveFavoriteTvShow($id: Int!) {\n    saveFavoriteTvShow(tvShowId: $id)\n}\n": typeof types.SaveFavoriteTvShowDocument,
    "\nmutation UnfavoriteTvShow($id: Int!) {\n    unfavoriteTvShow(tvShowId: $id)\n}\n": typeof types.UnfavoriteTvShowDocument,
    "\nquery GetTvShow($id: Int!) {\n    getTvShow(id: $id){\n        __typename\n        id\n        name\n        overview\n        posterUrl\n        popularity\n        voteAverage\n        numberOfSeasons\n        numberOfEpisodes\n        firstAirDate\n        lastAirDate\n        inProduction\n        favorite\n        seasons {\n            __typename\n            id\n            seasonNumber\n            name\n            episodeCount\n            airDate\n        }\n        genres {\n            __typename\n            id\n            name\n        }\n        actorCredits {\n            __typename\n            id\n            character\n            popularity\n            actor {\n                id\n                name\n                popularity\n                profileUrl\n            }\n        }\n    }\n}\n": typeof types.GetTvShowDocument,
    "\nquery GetTvShowFavoriteInfo($id: Int!) {\n    getTvShow(id: $id){\n        id\n        favorite\n    }\n}\n": typeof types.GetTvShowFavoriteInfoDocument,
    "\nquery GetTvShows($input: AllTvShowsInput) {\n  allTvShows(input: $input) {\n    __typename\n    total\n    pageable {\n      __typename\n      pageNumber\n      pageSize\n    }\n    content {\n      __typename\n      id\n      name\n      posterUrl\n      voteAverage\n    }\n  }\n}\n": typeof types.GetTvShowsDocument,
    "\nmutation RefreshToken {\n    refreshToken {\n        accessToken\n    }\n}\n": typeof types.RefreshTokenDocument,
    "\nquery SessionInfo {\n    sessionInfo {\n        id\n        username\n        avatarUrl\n    }\n}\n": typeof types.SessionInfoDocument,
    "\nquery GetGenres {\n  allGenres {\n    __typename,\n    id,\n    name\n  }\n}\n": typeof types.GetGenresDocument,
    "\nmutation Logout{\n    logout\n}\n": typeof types.LogoutDocument,
};
const documents: Documents = {
    "\nquery GetActor($id: Int!) {\n  getActor(id: $id){\n    __typename\n    id\n    name\n    popularity\n    profileUrl\n  }\n  getActorCredits(actorId: $id){\n    __typename\n    id\n    name\n    overview\n    popularity\n    character\n    firstAirDate\n    firstCreditAirDate\n    tvShowId\n  }\n}\n": types.GetActorDocument,
    "\nmutation LoginUser($input: LoginUserInput!){\nloginUser(input: $input){\n    accessToken\n}\n}\n": types.LoginUserDocument,
    "\nquery GetFavoriteTvShows($input: FavoriteTvShowsInput!) {\n  favoriteTvShows(input: $input) {\n    __typename\n    total\n    pageable {\n      __typename\n      pageNumber\n      pageSize\n    }\n    content {\n      __typename\n      id\n      favoritedAt\n      tvShow {\n        __typename\n        id\n        name\n        posterUrl\n        voteAverage\n      }\n    }\n  }\n}\n": types.GetFavoriteTvShowsDocument,
    "\nmutation RegisterUser($input: RegisterUserInput!){\n    registerUser(input: $input)\n}\n": types.RegisterUserDocument,
    "\nmutation SaveFavoriteTvShow($id: Int!) {\n    saveFavoriteTvShow(tvShowId: $id)\n}\n": types.SaveFavoriteTvShowDocument,
    "\nmutation UnfavoriteTvShow($id: Int!) {\n    unfavoriteTvShow(tvShowId: $id)\n}\n": types.UnfavoriteTvShowDocument,
    "\nquery GetTvShow($id: Int!) {\n    getTvShow(id: $id){\n        __typename\n        id\n        name\n        overview\n        posterUrl\n        popularity\n        voteAverage\n        numberOfSeasons\n        numberOfEpisodes\n        firstAirDate\n        lastAirDate\n        inProduction\n        favorite\n        seasons {\n            __typename\n            id\n            seasonNumber\n            name\n            episodeCount\n            airDate\n        }\n        genres {\n            __typename\n            id\n            name\n        }\n        actorCredits {\n            __typename\n            id\n            character\n            popularity\n            actor {\n                id\n                name\n                popularity\n                profileUrl\n            }\n        }\n    }\n}\n": types.GetTvShowDocument,
    "\nquery GetTvShowFavoriteInfo($id: Int!) {\n    getTvShow(id: $id){\n        id\n        favorite\n    }\n}\n": types.GetTvShowFavoriteInfoDocument,
    "\nquery GetTvShows($input: AllTvShowsInput) {\n  allTvShows(input: $input) {\n    __typename\n    total\n    pageable {\n      __typename\n      pageNumber\n      pageSize\n    }\n    content {\n      __typename\n      id\n      name\n      posterUrl\n      voteAverage\n    }\n  }\n}\n": types.GetTvShowsDocument,
    "\nmutation RefreshToken {\n    refreshToken {\n        accessToken\n    }\n}\n": types.RefreshTokenDocument,
    "\nquery SessionInfo {\n    sessionInfo {\n        id\n        username\n        avatarUrl\n    }\n}\n": types.SessionInfoDocument,
    "\nquery GetGenres {\n  allGenres {\n    __typename,\n    id,\n    name\n  }\n}\n": types.GetGenresDocument,
    "\nmutation Logout{\n    logout\n}\n": types.LogoutDocument,
};

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function gql(source: string): unknown;

/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery GetActor($id: Int!) {\n  getActor(id: $id){\n    __typename\n    id\n    name\n    popularity\n    profileUrl\n  }\n  getActorCredits(actorId: $id){\n    __typename\n    id\n    name\n    overview\n    popularity\n    character\n    firstAirDate\n    firstCreditAirDate\n    tvShowId\n  }\n}\n"): (typeof documents)["\nquery GetActor($id: Int!) {\n  getActor(id: $id){\n    __typename\n    id\n    name\n    popularity\n    profileUrl\n  }\n  getActorCredits(actorId: $id){\n    __typename\n    id\n    name\n    overview\n    popularity\n    character\n    firstAirDate\n    firstCreditAirDate\n    tvShowId\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation LoginUser($input: LoginUserInput!){\nloginUser(input: $input){\n    accessToken\n}\n}\n"): (typeof documents)["\nmutation LoginUser($input: LoginUserInput!){\nloginUser(input: $input){\n    accessToken\n}\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery GetFavoriteTvShows($input: FavoriteTvShowsInput!) {\n  favoriteTvShows(input: $input) {\n    __typename\n    total\n    pageable {\n      __typename\n      pageNumber\n      pageSize\n    }\n    content {\n      __typename\n      id\n      favoritedAt\n      tvShow {\n        __typename\n        id\n        name\n        posterUrl\n        voteAverage\n      }\n    }\n  }\n}\n"): (typeof documents)["\nquery GetFavoriteTvShows($input: FavoriteTvShowsInput!) {\n  favoriteTvShows(input: $input) {\n    __typename\n    total\n    pageable {\n      __typename\n      pageNumber\n      pageSize\n    }\n    content {\n      __typename\n      id\n      favoritedAt\n      tvShow {\n        __typename\n        id\n        name\n        posterUrl\n        voteAverage\n      }\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation RegisterUser($input: RegisterUserInput!){\n    registerUser(input: $input)\n}\n"): (typeof documents)["\nmutation RegisterUser($input: RegisterUserInput!){\n    registerUser(input: $input)\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation SaveFavoriteTvShow($id: Int!) {\n    saveFavoriteTvShow(tvShowId: $id)\n}\n"): (typeof documents)["\nmutation SaveFavoriteTvShow($id: Int!) {\n    saveFavoriteTvShow(tvShowId: $id)\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation UnfavoriteTvShow($id: Int!) {\n    unfavoriteTvShow(tvShowId: $id)\n}\n"): (typeof documents)["\nmutation UnfavoriteTvShow($id: Int!) {\n    unfavoriteTvShow(tvShowId: $id)\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery GetTvShow($id: Int!) {\n    getTvShow(id: $id){\n        __typename\n        id\n        name\n        overview\n        posterUrl\n        popularity\n        voteAverage\n        numberOfSeasons\n        numberOfEpisodes\n        firstAirDate\n        lastAirDate\n        inProduction\n        favorite\n        seasons {\n            __typename\n            id\n            seasonNumber\n            name\n            episodeCount\n            airDate\n        }\n        genres {\n            __typename\n            id\n            name\n        }\n        actorCredits {\n            __typename\n            id\n            character\n            popularity\n            actor {\n                id\n                name\n                popularity\n                profileUrl\n            }\n        }\n    }\n}\n"): (typeof documents)["\nquery GetTvShow($id: Int!) {\n    getTvShow(id: $id){\n        __typename\n        id\n        name\n        overview\n        posterUrl\n        popularity\n        voteAverage\n        numberOfSeasons\n        numberOfEpisodes\n        firstAirDate\n        lastAirDate\n        inProduction\n        favorite\n        seasons {\n            __typename\n            id\n            seasonNumber\n            name\n            episodeCount\n            airDate\n        }\n        genres {\n            __typename\n            id\n            name\n        }\n        actorCredits {\n            __typename\n            id\n            character\n            popularity\n            actor {\n                id\n                name\n                popularity\n                profileUrl\n            }\n        }\n    }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery GetTvShowFavoriteInfo($id: Int!) {\n    getTvShow(id: $id){\n        id\n        favorite\n    }\n}\n"): (typeof documents)["\nquery GetTvShowFavoriteInfo($id: Int!) {\n    getTvShow(id: $id){\n        id\n        favorite\n    }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery GetTvShows($input: AllTvShowsInput) {\n  allTvShows(input: $input) {\n    __typename\n    total\n    pageable {\n      __typename\n      pageNumber\n      pageSize\n    }\n    content {\n      __typename\n      id\n      name\n      posterUrl\n      voteAverage\n    }\n  }\n}\n"): (typeof documents)["\nquery GetTvShows($input: AllTvShowsInput) {\n  allTvShows(input: $input) {\n    __typename\n    total\n    pageable {\n      __typename\n      pageNumber\n      pageSize\n    }\n    content {\n      __typename\n      id\n      name\n      posterUrl\n      voteAverage\n    }\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation RefreshToken {\n    refreshToken {\n        accessToken\n    }\n}\n"): (typeof documents)["\nmutation RefreshToken {\n    refreshToken {\n        accessToken\n    }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery SessionInfo {\n    sessionInfo {\n        id\n        username\n        avatarUrl\n    }\n}\n"): (typeof documents)["\nquery SessionInfo {\n    sessionInfo {\n        id\n        username\n        avatarUrl\n    }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nquery GetGenres {\n  allGenres {\n    __typename,\n    id,\n    name\n  }\n}\n"): (typeof documents)["\nquery GetGenres {\n  allGenres {\n    __typename,\n    id,\n    name\n  }\n}\n"];
/**
 * The gql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function gql(source: "\nmutation Logout{\n    logout\n}\n"): (typeof documents)["\nmutation Logout{\n    logout\n}\n"];

export function gql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;