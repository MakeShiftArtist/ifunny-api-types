import { IFUNNY_ERRORS, RESTAPIError } from "./error_base.js";

/**
 * Returned when a client is invalid
 */
export interface RESTAPIErrorInvalidClient extends RESTAPIError {
    error: IFUNNY_ERRORS.INVALID_CLIENT;
    error_description: RESTAPIInvalidClientMessage;
    status: 403;
}

export default RESTAPIErrorInvalidClient;

export enum INVALID_CLIENT_MESSAGE {
    MALFORMED_TOKEN = `Malformed token:`,
}

type RESTAPIInvalidClientMessage =
    `${INVALID_CLIENT_MESSAGE.MALFORMED_TOKEN} ${string}`;
