import { IFUNNY_ERRORS, RESTAPIError } from "./error_base.js";

export interface RESTAPIErrorPermissionDenied extends RESTAPIError {
    error: IFUNNY_ERRORS.PERMISSION_DENIED;
    error_description: RESTAPIPermissionDeniedMessage;
    status: 403;
}

export default RESTAPIErrorPermissionDenied;

export enum PERMISSION_DENIED {
    DENIED = "Permission denied",
}

type RESTAPIPermissionDeniedMessage = `${PERMISSION_DENIED}`;
