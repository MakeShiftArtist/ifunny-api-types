import { IFUNNY_ERRORS, RESTAPIError } from "./error_base.js";

export interface RESTAPIErrorNotFound extends RESTAPIError {
    error: IFUNNY_ERRORS.NOT_FOUND;
    error_description:
        | `User with nick ${string} not found`
        | `Unable to find user with id: ${string}`
        | `Wrong feed type: ${string}`;
    status: 404;
}

export default RESTAPIErrorNotFound;
