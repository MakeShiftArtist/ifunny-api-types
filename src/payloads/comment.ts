import { EpochMs } from "../utils/index.js";
import {
    APIContent,
    APIContentCreator,
    APIContentGif,
    APIContentThumbnail,
} from "./content.js";
import { APIUser, APIUserRating } from "./user.js";

/**
 * Represents a Comment from iFunny
 */
export interface APICommentBase {
    id: string;
    /**
     * Content ID
     */
    cid: string;
    /**
     * The state of the Comment
     */
    state?: APICommentState;
    /**
     * Unix timestamp of when it was uploaded in MS
     */
    date: EpochMs;
    /**
     * Text of the comment
     * ? Can be empty string
     */
    text: string;
    is_reply: boolean;
    num: APICommentNum;
    is_smiled: boolean;
    is_unsmiled: boolean;
    is_edited: boolean;
    user?: APICommentAuthor;
    deletion_reason?: string;
    /**
     * Only observed when viewing own comments
     */
    content?: APIContent;
    attachments: APICommentAttachments;
    content_thumbs?: APIContentThumbnail;
    /**
     * Most recent reply to the comment
     */
    last_reply?: APIReply;
}

/**
 * Represents a Reply to a Comment from iFunny
 */
export interface APIReply extends APICommentBase {
    root_comm_id: string;
    parent_comm_id: string;
    depth: number;
}

/**
 * Represents a Comment from iFunny
 */
export type APIComment = APICommentBase | APIReply;

export interface APICommentNum {
    smiles: number;
    unsmiles: number;
    replies: number;
}

/**
 * All states of the comment
 */
export enum COMMENT_STATE {
    NORMAL = "normal",
    TOP_COMMENT = "top",
    ABUSED = "abused",
    DELETED = "deleted",
    AUTHOR_DELETED = "deleted_self",
}

/**
 * All possible states of the comment
 */
export type APICommentState = `${COMMENT_STATE}`;

export interface APICommentAuthor extends APIContentCreator {
    rating: APIUserRating;
}

export interface APICommentAttachments {
    content: APIContent[];
    content_from_links: APIContent[];
    mention_user: APIMentionUser[];
    giphy: APIContentGif[];
}

export type APICommentContent = Pick<
    APIContent,
    | "id"
    | "type"
    | "is_abused"
    | "bg_color"
    | "shot_status"
    | "state"
    | "size"
    | "thumb"
    | "source"
    | "creator"
>;

export interface APIMentionUser {
    /**
     * ID of the Mention\
     * ? Increments last digit of the comment id
     */
    id: string;
    creator: APIContentCreator;
    nick: APIUser["nick"];
    start_index: number;
    stop_index: number;
    user_id: APIUser["id"];
    original_nick: APIUser["original_nick"];
}

export enum APICommentDeletedReaons {
    /**
     * Unobserved
     */
    SPAM_FILTER = "del_by_spam_filter",
    /**
     * Post itself was deleted
     */
    CONTENT = "del_content",
    /**
     * Content author deleted the comment
     */
    CREATOR = "del_content_creator",
    /**
     * Removed for slurs usually, state observed to be "deleted" however
     */
    ABUSES = "del_for_abuses",
    /**
     * Comment was a reply and the root comment was removed
     */
    ROOT_COMMENT = "del_root_comment",
    /**
     * Unobserved
     */
    VIA_PORTAL = "del_via_portal",
}
