import { APIBasePayload } from "./base";

/**
 * Type of chat channel
 */
export type ChannelType = "DM" | "Private" | "Public";

/**
 * Represents a chat channel
 */
export interface APIChatChannel extends APIBasePayload {
    id: string;
    name: string;
    title: string;
    membersOnline: number;
    membersTotal: number;
    type: ChannelType;
    joinState: "NotJoined" | "Invited" | "Joined";
    role?: string;
    touchDt: number;
    user: {
        id: string;
        nick: string;
        lastSeenAt?: number;
        isVerified: boolean;
    };
}

/**
 * Represents a chat message or event in a channel
 */
export interface APIChatMessage extends APIBasePayload {
    id: string;
    text: string;
    type: "TEXT_MESSAGE" | "JOIN_CHANNEL" | "EXIT_CHANNEL";
    status?: string;
    pubAt: number;
    user: {
        id: string;
        nick: string;
        isVerified: boolean;
        lastSeenAt?: number;
    };
}

/**
 * Pagination cursor information
 */
export interface APIPaging {
    cursors?: {
        next?: string;
        prev?: string;
    };
    hasNext?: boolean;
    hasPrev?: boolean;
}

/**
 * Paginated collection of chat channels
 */
export interface APIChannelPage {
    items: APIChatChannel[];
    paging?: APIPaging;
}

/**
 * API response wrapper for channels endpoint
 */
export interface APIChannelsResponse {
    channels: APIChannelPage;
}

/**
 * Response from get_messages WAMP RPC call
 */
export interface APIGetMessagesResponse {
    messages: APIChatMessage[];
    cursor?: string;
}
