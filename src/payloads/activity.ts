import { APIComment, APIMentionUser, APIReply } from "./comment.js";

import { APIBanType } from "./ban.js";
import { APIContent } from "./content.js";
import { APIUser } from "./user.js";
import { EpochSec } from "../utils/index.js";

export interface Smiles {
    smiles: string;
}

/**
 * An interface representing a news item from the iFunny API
 */
export interface APINews {
    /** The ID of the ban associated with this news item */
    banId?: string;
    /** The type of ban associated with this news item */
    banType?: APIBanType;
    /** The message associated with the ban type of this news item */
    banTypeMessage?: string;
    /** The comment associated with this news item */
    comment?: APIComment;
    /** The content associated with this news item */
    content?: APIContent;
    /** The number of active strikes */
    countActiveStrike?: number;
    /** The timestamp of when the news item was posted */
    date: EpochSec;
    /** The timestamp of when the news item will expire */
    date_until?: EpochSec;
    /** The timestamp of when the news item expired */
    expiredAt?: EpochSec;
    /** The URL of the image associated with this news item */
    imageUrl?: string;
    /** The content mentioned in this news item */
    mention_content?: APIContent;
    /** The users mentioned in this news item */
    mention_users?: APIMentionUser[];
    /** The type of purchase associated with this news item */
    purchaseType?: string;
    /** The reply associated with this news item */
    reply?: APIReply;
    /** The number of smiles associated with this news item */
    smiles?: number;
    /** The ID of the strike associated with this news item */
    strikeId?: string;
    /** The text associated with this news item */
    text?: string;
    /** The title of this news item */
    title?: string;
    /** The type of this news item */
    type: APINewsType;
    /** The URL associated with this news item */
    url?: string;
    /** The user associated with this news item */
    user?: APINewsUser;
    /** The username associated with this news item */
    username?: string;
}

export interface APINewsReply extends APINewsComment {
    root_comm_id: string;
}

export interface APINewsComment extends Pick<
    APIComment,
    "text" | "id" | "cid" | "is_reply"
> {
    num: Smiles;
}

export type APINewsUser = Pick<
    APIUser,
    | "id"
    | "nick"
    | "is_banned"
    | "is_verified"
    | "is_deleted"
    | "photo"
    | "nick_color"
>;

/**
 * All current new types
 */
export enum NEWS_TYPES {
    BAN = "ban",
    BAN_ACTION = "ban_action",
    COMMENT = "comment",
    COMMENT_FOR_REPUB = "comment_for_repub",
    CONTENT_BOOSTED = "content_boost",
    DELETE = "user_deleted",
    FEATURED = "featured",
    FRIEND_REGISTERED = "friend_registered",
    GEO_FRIEND_ACCEPTED = "geo_friend_accepted",
    GEO_FRIEND_REJECTED = "geo_friend_rejected",
    GEO_FRIEND_REQUEST = "geo_friend_request",
    MENTION_CONTENT = "mention_content",
    MENTION_USER = "mention_user",
    PURCHASE_ONETIME = "purchase_onetime",
    PURCHASE_SUBSCRIPTION = "purchase_subscription",
    /**
     * @deprecated iFunny no longer uses this
     */
    REJECTED_BY_CUSTOMS = "rejected_by_customs",
    REPLY_FOR_COMMENT = "reply_for_comment",
    REPORTED_COMMENT_BANNED = "reported_comment_banned",
    REPORTED_CONTENT_BANNED = "reported_content_banned",
    REPORTED_USER_BANNED = "reported_user_banned",
    REPUB = "repub",
    REPUB_OF_REPUB = "repub_of_repub",
    SMILE = "smile",
    SMILE_FOR_COMMENT = "smile_for_comment",
    SMILE_FOR_REPLY = "smile_for_reply",
    SMILE_FOR_REPUB = "smile_for_repub",
    SMILE_TRACKER = "smile_tracker",
    /**
     * @deprecated iFunny no longer uses this
     */
    SPECIAL = "special",
    STRIKE = "strike_action",
    STRIKE_EXPIRED = "expire_strike",
    SUBSCRIBE = "subscribe",
    UNBAN = "unban",
    UNBAN_ACTION = "unban_action",
    UNDELETE = "user_undeleted",
}

/**
 * All possible activity types
 */
export type APINewsType = `${NEWS_TYPES}`;
