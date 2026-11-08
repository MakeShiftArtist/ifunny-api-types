import { RESTAPIPaging, RESTAPISuccessResponse } from "../utils/rest.js";

import { APIContent } from "../payloads/content.js";
import { ValueOf } from "../utils/util.js";

export type RESTAPIExploreSuccess = RESTAPISuccessResponse<RESTAPIExploreData>;

export interface RESTAPIExploreData {
    tabs: RESTAPIExploreTabBase[];
    active_tab: RESTAPIExploreActiveTab;
}

export interface RESTAPIExploreTabBase<
    Name extends APIExploreTabName = APIExploreTabName,
> {
    id: EXPLORE_TAB_IDS;
    name: Name;
}

/**
 * Represents the active tab being displayed
 */
export interface RESTAPIExploreActiveTab extends RESTAPIExploreTabBase {
    compilations_set: APIExploreCompilationSet;
}

/**
 * All known explore tab ids
 */
export enum EXPLORE_TAB_IDS {
    Best = 2,
    Memes = 3,
    Users = 4,
    Chats = 5,
    Channels = 6,
    Tags = 7,
    All = 8,
}

export type APIExploreTabName = keyof typeof EXPLORE_TAB_IDS;

export type APIExploreTabID = ValueOf<typeof EXPLORE_TAB_IDS>;

export interface APIExploreCompilationSet {
    layout: string;
    value: APIExploreCompilation;
}

/**
 * All possible layouts for explore
 */
export enum EXPLORE_LAYOUTS {
    /**
     * Lists content in explore
     */
    CONTENT_LIST = "content_list_6_items",
    /**
     * Lists comments in explore
     */
    COMMENT_LIST = "comment_list",
    /**
     * Lists chats in explore
     */
    CHATS_LIST = "chats_list_horizontal",
    /**
     * Lists users in explore
     */
    USER_LIST = "users_list_vertical",
    /**
     * Lists categories in explore
     */
    CATEGORY_LIST = "category_list",
    /**
     * Lists top values by their calender year or month
     */
    CALENDER_LIST = "calender",
}

export type APIExploreTabLayout = `${EXPLORE_LAYOUTS}`;

export interface APIExploreCompilation {
    id: APIExploreCompilationID;
    context: APIExploreContext;
    type: string;
    title: string;
    share_url: string;
}

export interface APIExploreContext {
    items: APIContent[];
    paging: RESTAPIPaging;
}

// TODO: Document all compilation ids
export enum EXPLORE_COMPILATION_IDS {
    CONTENT_TOP_OVERALL = "content_top_overall",
    CONTENT_TOP_TODAY = "content_top_today",
    CONTENT_TOP_SHARES = "content_top_by_share",
    CONTENT_SHUFFLE = "content_shuffle",
    USERS_TOP_OVERALL = "users_top_overall",
    USER_TOP_FEATURED = "users_top_by_featured",
    USER_TOP_SUBSCRIBERS = "users_top_by_subcribers",
    USER_TOP_VIEWS = "users_top_by_content_views",
    CHATS_POPULAR_LAST_WEEK = "chats_popular_last_week",
    CHATS_NEW = "chats_new_chats",
    CHATS_TOP_MEMBERS = "chats_top_by_members",
    CHANNEL_COMMUNITY_GAMING = "channel-community-gaming",
    CHANNEL_WTF = "channel-wtf",
    CHANNEL_ANIMALS = "channel-animals",
    CHANNEL_GAMES = "channel-games",
    CHANNEL_COMICS = "channel-comics",
    CHANNEL_SPORTS = "channel-sports",
    CHANNEL_VIDEO = "channel-video",
    CHANNEL_ORIGINALS = "channel-ifunny-originals",
    CHANNEL_WHOLESOME = "channel-wholesome-wednesday",
    CALENDER_BY_YEARS = "calender_by_years",
    CALENDER_BY_MONTH = "calender_by_month",
}

export type APIExploreCompilationID = `${EXPLORE_COMPILATION_IDS}`;

export enum EXPLORE_COMPILATION_TYPES {
    CONTENT = "content",
    CALENDER = "calender",
    CHAT = "chat",
    CATEGORY = "category",
    USER = "user",
    COMMENT = "comment",
}

export type APIExploreCompilationType = `${EXPLORE_COMPILATION_TYPES}`;
