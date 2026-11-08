import { EpochSec } from "../utils/util.js";

/**
 * When the next feature set releases
 */
export interface APINextIssueTime {
    time_left: EpochSec;
    time: EpochSec;
}

/**
 * The API response for `/issues/next_issue_time`
 */
export interface RESTAPINextIssueTime {
    data: APINextIssueTime;
    status: 200;
}
