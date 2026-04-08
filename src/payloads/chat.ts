import { APIBasePayload } from "./base";

/**
 * Represents a paginated API response with cursor-based pagination
 */
export interface APIPaginatedResponse<T> extends APIBasePayload {
    data: T[];
    cursor?: string;
}

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
