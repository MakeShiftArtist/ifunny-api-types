import { RESTAPIItems } from "../utils/rest.js";
import { APIContent } from "../payloads/content.js";

import { RESTAPISuccessResponse } from "../utils/index.js";
import { APICounters } from "./counters.js";

/**
 * The feed returned from the API
 */
export interface APIFeed {
    content: RESTAPIItems<APIContent>;
}

/**
 * Response when fetching feed items
 */
export interface RESTAPIFeedResponse extends RESTAPISuccessResponse<APIFeed> {
    notifications: APICounters;
}
