import { EpochSec } from "../utils/index.js";
import { APIComment } from "./comment.js";
import { APIContent } from "./content.js";

/**
 * Possible Ban Types
 */
export type APIBanType = `${BAN_TYPES}`;

/**
 * Represents a user's ban from the API
 */
export interface APIBanSmall {
    /**
     * Unique ban Id
     */
    id: string;
    /**
     * Unix EpochSec of when the ban expires\
     * ? IN SECONDS! More better accuracy, convert to milliseconds
     */
    date_until: EpochSec;
    /**
     * The type of ban
     */
    type: APIBanType;
}

export interface APIBan extends APIBanSmall {
    ban_reason: APIBanReason;
    created_at: EpochSec;
    /**
     * ? Only observed to be 1, 3, 17
     */
    pid: number;
    is_appealed: boolean;
    can_be_appealed: boolean;
    was_shown: boolean;
    is_active: boolean;
    is_shortable: boolean;
    related_content?: APIContent;
    related_comment?: APIComment;
    date_until_minimum?: EpochSec; // Not observed
    /**
     * @example
     * "commenting was suspended from Aug 19, 2021 to Aug 26, 2021"
     * "content creation suspended until Sep 15, 2022"
     */
    type_message?: string;
    /**
     * @example
     * "Hate Speech"
     * "Death / gore"
     */
    ban_reason_message?: string;
}

/**
 * All known ban reasons
 */
export enum BAN_REASONS {
    ABUSE = "abuse_harassment",
    CHILD_PORN = "child_pornography",
    HARDCORE = "hardcore",
    HATE_SPEECH = "hate_speech",
    SPAM = "bot_spam",
    THREATS = "threats_of_harm",
    // Not available in mod menu
    DEATH_GORE = "death_gore",
    OTHER = "other",
}

/**
 * All possible ban reasons
 */
export type APIBanReason = `${BAN_REASONS}`;

/**
 * All known ban types
 */
export enum BAN_TYPES {
    // from mobi.ifunny.bans.BanType
    CHAT_ACCESS = "chat_access",
    COMMENT_CREATION = "comment_creation",
    CONTENT_CREATION = "content_creation",
    PROFILE_ACCESS = "profile_access",
    REPUBING = "repubing",
    SMILING = "smiling",
    SUBSCRIBING = "subscribing",
    OTHER = "other",
    // Observed
    COLLECTIVE_SHADOW = "collective_shadow",
}
