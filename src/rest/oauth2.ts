import { RESTAPIErrorResponse } from "../errors/error.js";

export type RESTAPIOauth2Login =
    RESTAPIOauth2LoginSuccess | RESTAPIOauth2LoginError;

export interface RESTAPIOauth2LoginSuccess {
    /**
     * Bearer token used for requests
     */
    access_token: string;
    /**
     * The type of token created
     */
    token_type: TOKEN_TYPES.BEARER;
    /**
     * How long until the token expires\
     * Equivilent to `10 years`\
     * ? In seconds
     */
    expires_in: 315360000;
}

export enum TOKEN_TYPES {
    BEARER = "bearer",
    BASIC = "basic",
}

export type APITokenType = `${TOKEN_TYPES}`;

export type RESTAPIOauth2LoginError = RESTAPIErrorResponse;

export interface RESTAPISignUpSuccess {
    /**
     * Data about the account created
     */
    data: {
        /**
         * The user id of the account created
         */
        id: string;
    };
    status: 200;
}
