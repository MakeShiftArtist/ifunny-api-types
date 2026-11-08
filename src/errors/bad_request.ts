import { IFUNNY_ERRORS, RESTAPIError } from "./error_base.js";

export interface RESTAPIErrorBadRequest extends RESTAPIError {
    error: IFUNNY_ERRORS.BAD_REQUEST;
    error_description: RESTAPIBadRequestMessage;
    status: 400;
}

export default RESTAPIErrorBadRequest;

export enum BAD_REQUEST {
    INVALID_USER_ID = "Invalid user id",
}

type RESTAPIBadRequestMessage = `${BAD_REQUEST}`;
