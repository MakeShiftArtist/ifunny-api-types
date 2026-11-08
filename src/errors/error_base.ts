/**
 * Thrown when the response is not in the 200 range
 */
export interface RESTAPIError {
    /**
     * The error returned by the API
     */
    error: RESTAPIiFunnyError;
    /**
     * Brief description of the error
     */
    error_description: string;
    /**
     * Status code of the error
     */
    status: 400 | 401 | 403 | 404 | 500;
}

export default RESTAPIError;

/**
 * Possible iFunny Errors
 */
export type RESTAPIiFunnyError = `${IFUNNY_ERRORS}`;

/**
 * All known error types
 */
export enum IFUNNY_ERRORS {
    ALREADY_REPUBLISHED = "already_republished",
    ALREADY_SMILED = "already_smiled",
    ALREADY_UNSMILED = "already_unsmiled",
    BAD_REQUEST = "bad_request",
    CAPTCHA_REQUIRED = "captcha_required",
    CONTENT_WAS_DELETED = "content_was_deleted",
    EMAIL_EXISTS = "email_exists",
    EMAIL_NOT_CONFIRMED = "email_not_confirmed",
    ENTITY_ABUSED = "entity_abused",
    FORBIDDEN_FOR_BANNED = "forbidden_for_banned",
    FORBIDDEN_FOR_DELETED = "forbidden_for_deactivated",
    INVALID_CLIENT = "invalid_client",
    INVALID_EMAIL = "invalid_email",
    INVALID_GRANT = "invalid_grant",
    NOT_FOUND = "not_found",
    NOT_REPUBLISHED = "not_republished",
    NOT_SMILED = "not_smiled",
    NOT_UNSMILED = "not_unsmiled",
    PERMISSION_DENIED = "permission denied",
    PINNED_LIMIT_EXCEEDED = "profile_pins_to_many_pins_error",
    PUBLISHING_TIMEOUT = "publishing_timeout",
    QUERY_TOO_SHORT = "query_too_short",
    ROOT_COMMENT_WAS_DELETED = "root_comment_was_deleted",
    SOURCE_IS_UNAVAILABLE = "source_is_unavailable",
    STOP_WORD = "content_tag_stopword",
    TOO_MANY_UPPERCASE = "too_many_uppercase",
    UNACCEPTABLE_SYMBOLS = "unacceptable_symbols",
    UNAUTHORIZED = "unauthorized",
    UNKNOWN_ERROR = "unknown_error",
    UNKNOWN_SOURCE = "unknown_source",
    VIDEO_IS_INVALID = "video_is_invalid",
    WRONG_PARAMS = "wrong_params",
    YOU_ARE_BLOCKED = "you_are_blocked",
}
