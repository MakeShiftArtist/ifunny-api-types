import { RESTAPISuccessResponse } from "../utils/index.js";

export interface APICounters {
    featured: number;
    subscriptions: number;
    collective: number;
    news: number;
    map: number;
}

export type RESTAPICountersResponse = RESTAPISuccessResponse<APICounters>;
