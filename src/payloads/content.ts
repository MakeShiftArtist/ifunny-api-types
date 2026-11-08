import { APIUser } from "./user.js";
import { HexCode, Size, EpochSec } from "../utils/util.js";

// * Content objects
/**
 * JSON data of an iFunny Post
 */
export interface APIContentBase {
    gif?: APIGifCaptionContentData | APIGifContentData;
    coub?: APICoubContentData;
    video?: APIVideoContentData;
    video_clip?: APIVideoClipContentData;
    vine?: APIVineContentData;
    pic?: APIPicContentData;
    mem?: APIMemeContentData;
    comics?: APIComicsContentData;
    caption?: APICaptionContentData;
    app?: APIAppContentData;
    dem?: unknown;
    old?: unknown;

    /**
     * Unique id of the Content.\
     * Typically 9 characters long
     */
    id: string;
    /**
     * The type of the Content
     */
    type: APIContentType;
    /**
     * Content url of the Content
     */
    url: string;
    /**
     * Seems to be the same as {@link url APIContentBase#url}
     * ? Not always present on gifs and gif captions
     */
    share_url?: string;
    /**
     * If the Content uses the old watermark or the new one
     */
    old_watermark: boolean;
    /**
     * In-app share url.
     * @example
     * `https://ifunny.co/picture/${content.id}`
     * `https://ifunny.co/video/${content.id}`
     */
    link: string;
    /**
     * The title of the Content
     */
    title: string;
    /**
     * Fixed title of the Content
     * @example
     * `Gif memes ${content.id} by ${content.creator.nick}`
     * `Picture memes ${content.id} by ${content.creator.nick}: ${content.num.comments} comments`
     */
    fixed_title?: string;
    description?: string;
    /**
     * Array of tags on the Content
     */
    tags: string[];
    /**
     * The publish state of the Content
     */
    state: APIContentState;
    /**
     * EpochSec of when the Content was created (or repubbed if a repub) in seconds
     */
    date_create: EpochSec;
    /**
     * EpochSec of when the Content was published in seconds
     */
    publish_at: EpochSec;
    /**
     * Is the Content smiled by the Client
     */
    is_smiled: boolean;
    /**
     * Is the Content unsmiled by the Client
     */
    is_unsmiled: boolean;
    /**
     * Was the Content removed by iFunny
     */
    is_abused: boolean;
    /**
     * Is the Content featured
     */
    is_featured: boolean;
    /**
     * Is the Content republished by the Client
     */
    is_republished: boolean;
    /**
     * Is the Content pinned by the creator
     */
    is_pinned: boolean;
    /**
     * Background color of the Content.
     * @example
     * '55ff00'
     */
    bg_color?: HexCode;
    /**
     * The {@link APIContentThumbnail thumbnail} of the Content
     */
    thumb: APIContentThumbnail;
    /**
     * The Content's {@link APIContentCopyright copyright} data
     */
    copyright?: APIContentCopyright;
    /**
     * The {@link APIContentNums numbers} on the Content
     */
    num: APIContentNums;
    /**
     * The author of the Content
     */
    creator?: APIContentCreator;
    /**
     * Size of the Content
     */
    size: Size;
    /**
     * EpochSec of when the Content was featured if it was featured
     */
    issue_at?: EpochSec;
    /**
     * Url of the original source
     * ? Only seen on Coubs
     */
    traceback_url?: string;
    /**
     * ? Decompiled, not observed
     */
    engagement_rate?: number;
    /**
     * ? Decompiled, not observed
     */
    engagement_rate_explain?: string;
    /**
     * The Content's visibility
     */
    visibility: APIContentVisibility;
    /**
     * TODO: ShotStatus description
     */
    shot_status: APIContentShotStatus;
    /**
     * TODO: fast_start description
     */
    fast_start: boolean;
    subtitles?: APIContentSubtitles[];
    /**
     * The risk level of the Content\
     * `1` Default
     */
    risk: number;
    /**
     * @example
     * `https://ifunny.co/picture/${content.id}`
     */
    canonical_url: string;
    /**
     * Text generated from iFunny's OCR
     */
    ocr_text?: string;
    /**
     * Can the Content still be boosted
     */
    can_be_boosted: boolean;
    /**
     * Latitude Coordinate
     */
    lat?: number;
    /**
     * Longitude Coordinate
     */
    lon?: number;
    /**
     * Only seen present on videos and gifs
     */
    has_header?: boolean;
    /**
     * The source of the Content if it's a republish
     */
    source?: APIContentSource;
    /**
     * From Tag (maybe?)\
     * ? Only seems to appear in feature feed. Possibly incorrect documentation
     */
    ftag?: APIFeedFrom;
}

// * Enum types

/**
 * Content visibility types
 */
export enum ContentVisibility {
    /**
     * Anyone can see the Content
     */
    PUBLIC = "public",
    /**
     * Content is hidden from collective and explore
     */
    SUBSCRIBERS = "subscribers",
    /**
     * Only the creator can see the Content
     */
    CLOSED = "closed",
    /**
     * Only visible in Chats
     */
    CHATS = "chats",
}

export type APIContentVisibility = `${ContentVisibility}`;

/**
 * Content shot status types
 */
export enum ShotStatus {
    /**
     * The Content was approved for upload and comment attachments are enabled
     */
    APPROVED = "approved",
    /**
     * The Content was deleted by the automoderation system
     */
    HARD_SHOT = "hardShot",
    /**
     * Content was approved for upload, but can't be used in comments
     */
    SHOT = "shot",
}

/**
 * Possible shot statuses
 */
export type APIContentShotStatus = `${ShotStatus}`;

/**
 * All currently known Content types
 */
export enum ContentType {
    // ? Videos
    /**
     * Most common video Content type\
     * Data key: `video_clip`
     */
    VIDEO_CLIP = "video_clip",
    /**
     * A video uploaded from a url like YouTube\
     * Data key: `video`
     */
    VIDEO = "video",
    /**
     * A video uploaded from vine\
     * Data key: `vine`
     */
    VINE = "vine",
    /**
     * Video meme from {@link https://coub.com Coub}\
     * Data key: `coub`
     */
    COUB = "coub",
    // * Gifs
    /**
     * A Gif Content\
     * Data key: `gif`
     */
    GIF = "gif",
    /**
     * A Gif Content with a custom caption\
     * Data key: `gif`
     */
    GIF_CAPTION = "gif_caption",
    // ? Images
    /**
     * An image meme with a custom caption\
     * Data key: `caption`
     */
    CAPTION = "caption",
    /**
     * An image meme\
     * Data key: `pic`
     */
    PIC = "pic",
    /**
     * Image uploaded from iFunny's old "Meme" creator.\
     * Data key: `mem`
     */
    MEME = "mem",
    /**
     * Image uploaded from iFunny's old "Comic" creator.\
     * Data key: `comics`
     */
    COMICS = "comics",
    // ? Special / Unknown
    /**
     * An interactive Content from iFunny\
     * Data key: `app`\
     * Deprecated by iFunny. This Content type has been removed from iFunny
     */
    APP = "app",
    /**
     * Unknown Content type\
     * Data key: `old` (Unknown due to deprecation)\
     * TODO: Document what ContentType.OLD is
     */
    OLD = "old",
    /**
     * Unknown Content type\
     * Data key: `dem` (Unknown due to deprecation)\
     * TODO: Document what ContentType.DEM is
     */
    DEM = "dem",
    /**
     * Unknown Content type\
     * Data key: `special` (unknown due to being observed)
     */
    SPECIAL = "special",
}

/**
 * Possible Content types
 */
export type APIContentType = `${ContentType}`;

export enum ContentState {
    /**
     * Content that was scheduled to be published later
     */
    DELAYED = "delayed",
    /**
     * Content was deleted
     */
    DELETED = "deleted",
    /**
     * Content is a draft that hasn't been published
     */
    DRAFT = "draft",
    /**
     * The Content is published. Default
     */
    PUBLISHED = "published",
}

/**
 * Possible Content states
 */
export type APIContentState = `${ContentState}`;

/**
 * Where an action was completed
 * @example
 * PUT /v4/reads/:contentId?from=:ACTION_LOCATION
 */
export enum FeedFrom {
    ATTACHMENT = "attach",
    CHANNEL = "channel",
    COLLECTIVE = "coll",
    FEATURES = "feat",
    MONOFEED = "monofeed",
    MYSMILES = "mySmiles",
    MY_SMILES = "my-smiles",
    MY_COMMENTS = "mycomms",
    PROFILE = "prof",
    REC = "rec",
    SEAR = "sear",
    SUBS = "subs",
    USER_FEATURES = "userfeat",
    READS = "reads",
    TAG = "tag",
}

/**
 * Possible `from` locations
 */
export type APIFeedFrom = `${FeedFrom}`;

export type APIFTag = APIFeedFrom;

// * Sub objects

/**
 * The creator object for the Content
 */
export type APIContentCreator = APIUser;

/**
 * Alias for {@link APIContentCreator}
 */
export type APIContentAuthor = APIContentCreator;

/**
 * Numbers attached to the Content
 */
export interface APIContentNums {
    /**
     * The amount of smiles the Content has
     */
    smiles: number;
    /**
     * The amount of unsmiles the Content has
     */
    unsmiles: number;
    /**
     * How many smiles came from users not signed in to iFunny
     * ? Not possible in-app but possible in the API by using a basic token
     */
    guest_smiles: number;
    /**
     * How many comments are on the Content
     */
    comments: number;
    /**
     * How many views the Content has
     */
    views: number;
    /**
     * How many republishes the Content has
     */
    republished: number;
    /**
     * How many shares the Content has
     */
    shares: number;
}

/**
 * Copyright data for the Content
 */
export interface APIContentCopyright {
    /**
     * Note about the copyright
     */
    note?: string;
    /**
     * URL of original source
     */
    url?: string;
}

/**
 * The Thumbnail object returned from the API\
 * @example
 * ```ts
 * APIContentThumbnail.url = `https://imageproxy.ifunny.co/${params}/images/${content_id}.jpg`
 * APIContentThumbnail.webp_url = `https://imageproxy.ifunny.co/${params}/images/${content_id}.webp
 * ```
 * Content URL params:\
 * `crop:x-{number}` crops `number` pixels from bottom of the image\
 * `crop:x+{number}` leaves `number` pixels at the top, and crops the rest\
 * `crop:square` makes the image a square aspect ratio\
 * `resize:{number}` changes the size of the image\
 * `quality:{number}` changes the image quality
 *
 *
 * ? Bottom iFunny watermarks are 20 pixels tall\
 * ? `crop:x-20` crops the watermark from an image
 */
export interface APIContentThumbnail {
    /**
     * crop:x-20,crop:square,resize:65x,quality:90x75\
     * `jpg`
     */
    small_url?: string;
    /**
     * crop:x-20,crop:square,resize:160x,quality:90x75\
     * `jpg`
     */
    url: string;
    /**
     * crop:x-20,crop:square,resize:320x,quality:90x75\
     * `jpg`
     */
    large_url: string;
    /**
     * crop:x-20,resize:640x,quality:90x75\
     * `jpg`
     */
    x640_url: string;
    /**
     * crop:x-20,resize:640x,quality:90x75
     */
    webp_url: string;
    /**
     * crop:x-20,crop:square,resize:320x,quality:90
     */
    large_webp_url: string;
    /**
     * crop:x-20,resize:640x,quality:90
     */
    x640_webp_url: string;
    /**
     * crop:x-20,resize:320x,crop:x800,quality:90x75
     */
    proportional_url: string;
    /**
     * crop:x-20,resize:320x,crop:x800,quality:90
     */
    proportional_webp_url: string;
    /**
     * The proportional size of the image
     */
    proportional_size: Size;
}

/**
 * Decompiled, not observed
 */
export interface APIContentSubtitles {
    /**
     * ? Possibly Language Code
     * @example
     * "en-US"
     */
    lang: string;
    /**
     * ? Must end in .srt or .vtt
     */
    url: string;
}

// * Specific Content objects

export enum VideoSource {
    USER = "user",
    INSTAGRAM = "instagram",
}

export type APIVideoSourceType = `${VideoSource}`;

// * Data objects

// ? Videos
export interface APICoubContentData {
    /**
     * WebP thumbnail of the Coub
     */
    screen_url: string;
    bytes: number;
    /**
     * Original Coub source
     */
    trackback_url: string;
    /**
     * Length in seconds
     */
    duration: number;
}

export interface APIVideoContentData {
    /**
     * Url of original video
     */
    url: string;
    /**
     * Length in seconds
     */
    duration: number;
    /**
     * Length in seconds
     */
    length: number;
}

export interface APIVideoClipContentData {
    /**
     * JPEG image of the video clip
     */
    screen_url: string;
    bytes: number;
    source_type: APIVideoSourceType;
    /**
     * Logo url to the source if not 'user'
     */
    logo_url?: string;
    /**
     * In seconds
     */
    duration: EpochSec;
}

export interface APIVineContentData {
    screen_url: string;
    bytes: number;
}

// ? Pictures

/**
 * Pic Data
 */
export interface APIPicContentData {
    /**
     * webp format url of the Content
     */
    webp_url: string;
}

export interface APICaptionContentData {
    /**
     * The caption of the Content
     */
    caption_text: string;
}
export type APIComicsContentData = APIPicContentData;
export type APIMemeContentData = APIPicContentData;

// ? Gifs
export interface APIGifContentData {
    /**
     * JPEG url of the Content
     */
    screen_url: string;
    /**
     * How many bytes the Content is
     */
    bytes: number;
    /**
     * Url of the Content in MP4 format
     */
    mp4_url: string;
    /**
     * How many bytes the mp4 version is
     */
    mp4_bytes: number;

    webm_url?: string;
    webm_bytes: number;
}
export type APIGifCaptionContentData = APIGifContentData &
    APICaptionContentData;

export interface APIAppContentData {
    url: string;
    is_scroll_allowed: boolean;
}

/**
 * The content data for content from Content.pic, Content.video_clip, etc.
 */
export type APIContentData =
    | APIAppContentData
    | APICaptionContentData
    | APIComicsContentData
    | APICoubContentData
    | APIGifCaptionContentData
    | APIGifContentData
    | APIMemeContentData
    | APIPicContentData
    | APIVideoClipContentData
    | APIVideoContentData
    | APIVineContentData
    | UnknownContentData;

// ? Special/Unknown
export type UnknownContentData = JSON;

// ? Videos
export interface APICoubContent extends APIContentBase {
    type: ContentType.COUB;
    coub: APICoubContentData;
}
export interface APIVideoClipContent extends APIContentBase {
    type: ContentType.VIDEO_CLIP;
    video_clip: APIVideoClipContentData;
}
export interface APIVideoContent extends APIContentBase {
    type: ContentType.VIDEO;
    video: APIVideoContentData;
}
export interface APIVineContent extends APIContentBase {
    type: ContentType.VINE;
    vine: APIVineContentData;
}

// ? Pictures
export interface APICaptionContent extends APIContentBase {
    type: ContentType.CAPTION;
    caption: APICaptionContentData;
}
export interface APIComicsContent extends APIContentBase {
    type: ContentType.COMICS;
    comics: APIComicsContentData;
}
export interface APIMemeContent extends APIContentBase {
    type: ContentType.MEME;
    mem: APIMemeContentData;
}
export interface APIPicContent extends APIContentBase {
    type: ContentType.PIC;
    pic?: APIPicContentData;
}

// ? Gifs
export interface APIGifContent extends APIContentBase {
    type: ContentType.GIF;
    gif: APIGifContentData;
}
export interface APIGifCaptionContent extends APIContentBase {
    type: ContentType.GIF_CAPTION;
    gif: APIGifCaptionContentData;
}
export interface APIAppContent extends APIContentBase {
    type: ContentType.APP;
    app: APIAppContentData;
}

// ? Special/Unknown
export interface APIUnknownContent extends APIContentBase {
    type: ContentType.OLD | ContentType.DEM | ContentType.SPECIAL;
}

/**
 * The source of the original content
 */
export type APIContentSource = Pick<
    APIContent,
    "id" | "date_create" | "creator"
>;

/**
 * Any possible Content type
 */
export type APIContent =
    APIContentVideo | APIContentPic | APIContentGif | APIContentSpecial;

/**
 * All video/mp4 Content types
 */
export type APIContentVideo =
    APICoubContent | APIVideoClipContent | APIVideoContent | APIVineContent;

/**
 * All picture/jpg Content types
 */
export type APIContentPic =
    APICaptionContent | APIPicContent | APIComicsContent | APIMemeContent;

/**
 * All Gif Content types
 */
export type APIContentGif = APIGifContent | APIGifCaptionContent;

/**
 * All currently undocumented Content types. Once documented, these may move into the appropriate Content types above.\
 * ? Currently: 'dem', 'old', 'app'
 */
export type APIContentSpecial = APIUnknownContent | APIAppContent;
