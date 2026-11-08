/**
 * Returns when the request was a success
 */
export interface RESTAPISuccessResponse<T> extends RESTAPIStatusCode {
    /**
     * The data returned from the API
     */
    data: T;
}

/**
 * Common data response
 */
export interface RESTAPIItems<Item> {
    /**
     * Array of items returned from the API
     */
    items: Item[];
    /**
     * Pagination data returned from the API
     */
    paging: RESTAPIPaging;
}

export interface RESTAPIPaging {
    cursors: RESTAPICursors;
    /**
     * Is there a prev key in cursors
     */
    hasPrev: boolean;
    /**
     * Is there a next key in cursors
     */
    hasNext: boolean;
}

export interface RESTAPICursors {
    /**
     * The next value for pagination
     */
    next?: string;
    /**
     * The previous value for backwards pagination
     */
    prev?: string;
}

export interface RESTAPIStatusCode {
    /**
     * Typically 200 on success
     */
    status: number;
}
