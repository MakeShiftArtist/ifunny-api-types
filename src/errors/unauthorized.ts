import { IFUNNY_ERRORS, RESTAPIError } from "./error_base.js";

export interface RESTAPIErrorUnauthorized extends RESTAPIError {
    error: IFUNNY_ERRORS.UNAUTHORIZED;
    error_description: RESTAPIUnauthorizedMessage;
    status: 400;
}

export default RESTAPIErrorUnauthorized;

export enum UNAUTHORIZED {
    GUESTS = "Requested operation is unavailable for guests",
}

type RESTAPIUnauthorizedMessage = `${UNAUTHORIZED}`;
