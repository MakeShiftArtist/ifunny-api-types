import { IFUNNY_ERRORS, RESTAPIError } from "./error_base.js";

/**
 * This is thrown when you need to solve a captcha to complete the request.
 */
export interface RESTAPIErrorCaptchaRequired extends RESTAPIError {
    error: IFUNNY_ERRORS.CAPTCHA_REQUIRED;
    error_description: RESTAPIErrorCaptchaRequiredMessage;
    data: {
        /**
         * Open this url in any browser, solve it, then make the exact same request again.
         */
        captcha_url: string;
        type: RESTAPICaptchaType;
    };
    status: 403;
}

export default RESTAPIErrorCaptchaRequired;

/**
 * Known error descriptions
 */
export enum CAPTCHA_REQUIRED {
    VERIFY_HUMAN = "Human verification is required",
}

export type RESTAPIErrorCaptchaRequiredMessage = `${CAPTCHA_REQUIRED}`;

/**
 * Known captcha types
 */
export enum CAPTCHA_TYPE {
    FUN_CAPTCHA = "fun_captcha",
    RECAPTCHA = "recaptcha",
}

export type RESTAPICaptchaType = `${CAPTCHA_TYPE}`;
