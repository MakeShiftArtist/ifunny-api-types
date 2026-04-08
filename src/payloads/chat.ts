import { RESTAPIItems } from "../utils";
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
 * API response wrapper for channels endpoint
 */
export interface APIChannelsResponse {
    channels: RESTAPIItems<APIChatChannel>;
}

/**
 * Response from get_messages WAMP RPC call
 */
export interface APIGetMessagesResponse {
    messages: APIChatMessage[];
    cursor?: string;
}

/**
 * Payload for inviting users to a chat channel (invite.invite RPC)
 */
export interface APIInvitePayload {
    chat_name: string;
    users: string[];
}

/**
 * Payload for responding to a chat invite (invite.accept or invite.decline RPC)
 */
export interface APIInviteResponsePayload {
    chat_name: string;
}

/**
 * Payload for kicking a user from a channel (kick_member RPC)
 */
export interface APIKickPayload {
    chat_name: string;
    user_id: string;
}
