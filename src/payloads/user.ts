import { HexCode, Size } from "../utils/util.js";
import { APIBanSmall } from "./ban.js";
import { APIBasePayload } from "./base.js";

/**
 * Simple user type typically found in array of users
 */
export type APISimpleUser = Omit<APIUser, "rating" | "nick_color">;

/**
 * The creator object for the Content
 */
export interface APIUser extends Pick<
    APIUserProfile,
    | "id"
    | "nick"
    | "photo"
    | "is_verified"
    | "is_banned"
    | "is_deleted"
    | "is_in_subscriptions"
    | "is_in_subscribers"
    | "is_blocked"
    | "nick_color"
    | "rating"
    | "original_nick"
    | "block_type"
> {
    /**
     * Only includes subscription and subscriber count
     */
    num: APIUserNums;
    /**
     * Total amount of posts the user has
     */
    total_posts: number;
}

/**
 * Num object for the simple user\
 * ? `total_posts` is not in APIUserNumBase. Try `user.total_posts`
 */
export interface APIUserNums {
    /**
     * Total amount of users that are subscribed to the Client
     */
    subscribers: number;
    /**
     * Total amount of users the Client is subscribed to
     */
    subscriptions: number;
}

/**
 * Represents a user from iFunny
 */
export interface APIUserProfile extends APIBasePayload {
    /**
     * User's about bio\
     * ? Can be an empty string
     */
    about: string;
    /**
     * Did the user block the client
     */
    are_you_blocked: boolean;
    /**
     * Array of APIBan objects.
     */
    bans: APIBanSmall[];
    /**
     * Block type if the user is blocked
     */
    block_type?: APIUserBlockType;
    /**
     * User's cover image background color
     * @example
     * '55ff00'
     */
    cover_bg_color?: HexCode;
    /**
     * User's cover image url
     * @example
     * `https://img.ifunny.co/user_covers/${string}.webp`
     */
    cover_url?: string;
    /**
     * User's unique id\
     * ? Never changes
     */
    id: string;
    /**
     * Can the Client chat with the user
     */
    is_available_for_chat: boolean;
    /**
     * Is the user banned\
     * ! UNSAFE TO CHECK FOR ACTIVE BANS
     */
    is_banned: boolean;
    /**
     * Is the user blocked by the client
     */
    is_blocked: boolean;
    /**
     * Is the user deleted from iFunny's servers\
     * ? if true, many properties will be undefined
     */
    is_deleted: boolean;
    /**
     * Is the User subscribed to the Client
     */
    is_in_subscribers: boolean;
    /**
     * Is the Client subscribed to the user
     */
    is_in_subscriptions: boolean;
    /**
     * Is the  user's account private
     */
    is_private: boolean;
    /**
     * Is the client subscribed to the user's notifications
     */
    is_subscribed_to_updates: boolean;
    /**
     * Is the user verified on iFunny
     */
    is_verified: boolean;
    /**
     * The user's meme experience
     */
    meme_experience: APIMemeExperience;
    /**
     * The Chat privacy status of the user
     */
    messaging_privacy_status: APIUserMessagePrivacy;
    /**
     * Does the user have access to chats
     */
    messenger_active: boolean;
    /**
     * Seems to always be `"1010101010101010101010101010101010101010"`
     */
    messenger_token: string; // TODO: Check if this is always the same
    /**
     * User's unique username\
     * ! UNSAFE FOR USER CACHING.
     */
    nick: string;
    /**
     * User's nick color (Default: 55FF00)
     * @example
     * '55ff00'
     */
    nick_color?: APINickColor;
    /**
     * User's profile stats
     */
    num: APIUserProfileNums;
    /**
     * Original nick of the user\
     * ? iFunny censors some usernames similar to the comment filter
     */
    original_nick: string;
    /**
     * The user's profile photo
     */
    photo?: APIProfilePhoto;
    /**
     * The user's rating\
     * ! Deprecated by iFunny
     */
    rating: APIUserRating;
    /**
     * The User's linked social accounts\
     * Twitter, Google, Facebook
     */
    social?: APIUserAllSocials;
    /**
     * User's inapp share url
     * @example
     * `https://ifunny.co/user/:nick`
     */
    web_url: string;
}

export enum UserBlockType {
    USER = "user",
    INSTALLATION = "installation",
}

export type APIUserBlockType = `${UserBlockType}`;

/**
 * `closed` only the user can create direct messages\
 * `public` anyone can create a direct message the user\
 * `subscribers` only subscribers can create a direct message with the user\
 * ? Backend does not check this status on requests as of 5/28/22
 */
export enum MESSAGE_PRIVACY {
    CLOSED = "closed",
    PUBLIC = "public",
    SUBSCRIBERS = "subscribers",
}

export type APIUserMessagePrivacy = `${MESSAGE_PRIVACY}`;

/**
 * A user's meme experience
 */
export interface APIMemeExperience {
    /**
     * Pixel size of the badge
     */
    badge_size: Size;
    /**
     * MemeRank badge png url
     * @example
     * `https://img.ifunny.co/meme_experience/${number}.png`
     */
    badge_url: string;
    /**
     * The amount of days the user has logged into iFunny
     */
    days: number;
    /**
     * Days needed to get to the meme rank
     */
    next_milestone: (typeof MILESTONES)[keyof typeof MILESTONES];
    /**
     * The user's rank name
     */
    rank: APIMemeRank;
}

/**
 * All current Meme Ranks from the API
 */
export enum RANK {
    /**
     * Days: `1-4`
     */
    MEME_EXPLORER = "Meme explorer",
    /**
     * Days: `5-24`
     */
    MEME_BRO = "Meme bro",
    /**
     * Days: `25-49`
     */
    MEME_DADDY = "Meme daddy",
    /**
     * Days: `50-99`
     */
    DANK_MEMER = "Dank memer",
    /**
     * Days: `100-199`
     */
    MEME_MASTER_BAKER = "Meme master baker",
    /**
     * Days: `200-299`
     */
    DEEP_FRIED_MEMER = "Deep fried memer",
    /**
     * Days: `300-499`
     */
    SAUCY_MEMER = "Saucy memer",
    /**
     * Days: `500-665`
     */
    ORIGINAL_MEME_GANGSTER = "Original Meme Gangster",
    /**
     * Days: `666-910`
     */
    MEME_DEMON = "Meme demon",
    /**
     * Days: `911-999`
     */
    STEAL_BEAMS_OF_MEMES = "Steal beams of memes",
    /**
     * Days: `1000-1499`
     */
    MEME_DEALER = "Meme dealer",
    /**
     * Days: `1500-1999`
     */
    IFUNNY_VETERAN = "iFunny Veteran",
    /**
     * Days: `2000+`
     * * Final Meme Rank
     * ? next_milestone is `3000` but rank does not change
     */
    CHEFS_MEME_AGENT = "Chef's meme agent",
}

/**
 * The minimum amount of days for each rank
 */
export const DAYS = {
    /**
     * Days: `1-4`
     */
    MEME_EXPLORER: 1,
    /**
     * Days: `5-24`
     */
    MEME_BRO: 5,
    /**
     * Days: `25-49`
     */
    MEME_DADDY: 25,
    /**
     * Days: `50-99`
     */
    DANK_MEMER: 50,
    /**
     * Days: `100-199`
     */
    MEME_MASTER_BAKER: 100,
    /**
     * Days: `200-299`
     */
    DEEP_FRIED_MEMER: 200,
    /**
     * Days: `300-499`
     */
    SAUCY_MEMER: 300,
    /**
     * Days: `500-665`
     */
    ORIGINAL_MEME_GANGSTER: 500,
    /**
     * Days: `666-910`
     */
    MEME_DEMON: 666,
    /**
     * Days: `911-999`
     */
    STEAL_BEAMS_OF_MEMES: 911,
    /**
     * Days: `1000-1499`
     */
    MEME_DEALER: 1000,
    /**
     * Days: `1500-1999`
     */
    IFUNNY_VETERAN: 1500,
    /**
     * Days: `2000+`
     * * Final Meme Rank
     * ? next_milestone is `3000` but rank does not change
     */
    CHEFS_MEME_AGENT: 2000,
} as const;

/**
 * The next milestone for each rank
 */
export const MILESTONES = {
    /**
     * Days: `1-4`
     */
    MEME_EXPLORER: 5,
    /**
     * Days: `5-24`
     */
    MEME_BRO: 25,
    /**
     * Days: `25-49`
     */
    MEME_DADDY: 50,
    /**
     * Days: `50-99`
     */
    DANK_MEMER: 100,
    /**
     * Days: `100-199`
     */
    MEME_MASTER_BAKER: 200,
    /**
     * Days: `200-299`
     */
    DEEP_FRIED_MEMER: 300,
    /**
     * Days: `300-499`
     */
    SAUCY_MEMER: 500,
    /**
     * Days: `500-665`
     */
    ORIGINAL_MEME_GANGSTER: 666,
    /**
     * Days: `666-910`
     */
    MEME_DEMON: 911,
    /**
     * Days: `911-999`
     */
    STEAL_BEAMS_OF_MEMES: 1000,
    /**
     * Days: `1000-1499`
     */
    MEME_DEALER: 1500,
    /**
     * Days: `1500-1999`
     */
    IFUNNY_VETERAN: 2000,
    /**
     * Days: `2000+`
     * * Final Meme Rank\
     * ? next_milestone is `3000` but rank does not change
     */
    CHEFS_MEME_AGENT: 3000,
} as const;

export type APIMemeRank = `${RANK}`;

export interface APIProfilePhoto {
    /**
     * Profile Photo background color
     * @example
     * '55ff00'
     */
    bg_color: HexCode;
    /**
     * Profile photo thumbnail
     */
    thumb: APIProfilePhotoThumbnail;
    /**
     * Profile photo content url
     */
    url: string;
}

/**
 * Profile photo thumbnail
 */
export interface APIProfilePhotoThumbnail {
    /**
     * resize:400x,quality:90
     */
    large_url: string;
    /**
     * resize:200x quality:90
     */
    medium_url: string;
    /**
     * resize:100x quality:90
     */
    small_url: string;
}

export interface APIUserProfileNums extends APIUserNums {
    /**
     * Total amount of posts on the user's timeline
     */
    total_posts: number;
    /**
     * Amout of original (not republished) posts on the user's timeline
     */
    created: number;
    /**
     * Amount of featured posts the user has
     */
    featured: number;
    /**
     * Amount of smiles the user has from posts
     */
    total_smiles: number;
    /**
     * Amount of achievements the user has
     */
    achievements: number;
}

/**
 * User's Rating\
 * ! Deprecated by iFunny
 */
export interface APIUserRating {
    points: number;
    current_level: APIUserRatingLevel;
    next_level: APIUserRatingLevel;
    max_level: APIUserRatingLevel; // Always has same values
    is_show_level: boolean;
}

/**
 * A User Rating Level\
 * ! Deprecated by iFunny
 */
export interface APIUserRatingLevel {
    id: string;
    value: number;
    points: number;
}

/**
 * Known nick colors
 * @example
 * NICK_COLORS.BRIGHT_GREEN == '55ff00'
 */
export enum NICK_COLOR {
    BRIGHT_GREEN = "55FF00",
    BETA_TESTER = BRIGHT_GREEN,
    MAROON = "660000",
    ORANGE = "e0b400",
    PURPLE = "a078f0",
    RED = "ff3e52",
    // Default
    WHITE = "ffffff",
}

/**
 * A user's nick color
 * @example
 * '55ff00'
 */
export type APINickColor = `${NICK_COLOR}`;

/**
 * A user's linked socials
 */
export interface APIUserAllSocials {
    /**
     * Apple account linked to the user
     */
    apple?: APIUserSocial;
    /**
     * Facebook account linked to the user
     */
    fb?: APIUserSocial;
    /**
     * Google account linked to the user
     */
    ggl?: APIUserSocial;
    /**
     * Odnoklassniki account linked to the user (Russian social media)
     */
    ok?: APIUserSocial;
    /**
     * Twitter account linked to the user
     */
    tw?: APIUserSocial;
    /**
     * V Kontakte account linked to the user (Russian social media)
     */
    vk?: APIUserSocial;
}

/**
 * A user's linked social
 */
export interface APIUserSocial {
    id: string;
    is_hidden: boolean;
    link: string;
    nick?: string;
}
