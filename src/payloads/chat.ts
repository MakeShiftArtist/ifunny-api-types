import { RESTAPIItems } from "../utils";
import { APIBasePayload } from "./base";

/**
 * Channel type constants matching the WAMP wire format
 */
export const ChannelType = {
	DM: 1,
	Private: 2,
	Public: 3,
} as const;
export type ChannelType = (typeof ChannelType)[keyof typeof ChannelType];

/**
 * Channel join state constants matching the WAMP wire format
 */
export const JoinState = {
	NotJoined: 0,
	Invited: 1,
	Joined: 2,
} as const;
export type JoinState = (typeof JoinState)[keyof typeof JoinState];

/**
 * Message type constants matching the WAMP wire format
 */
export const MessageType = {
	TEXT_MESSAGE: 1,
	JOIN_CHANNEL: 3,
	EXIT_CHANNEL: 4,
} as const;
export type MessageType = (typeof MessageType)[keyof typeof MessageType];

/**
 * WAMP event type codes sent in kwargs["type"] of subscription events
 */
export const EventType = {
	JOIN: 100,
	EXIT: 101,
	MESSAGE: 200,
	INVITED: 300,
} as const;
export type EventType = (typeof EventType)[keyof typeof EventType];

/**
 * Represents a chat channel
 */
export interface APIChatChannel extends APIBasePayload {
	id: string;
	name: string;
	title: string;
	members_online: number;
	members_total: number;
	type: ChannelType;
	join_state: JoinState;
	role?: number;
	touch_dt: number;
	user: {
		id: string;
		nick: string;
		last_seen_at?: number;
		is_verified: boolean;
	};
}

/**
 * Represents a chat message or event in a channel.
 * Note: the user ID field is keyed as "user" (not "id") in message payloads.
 */
export interface APIChatMessage extends APIBasePayload {
	id: string;
	text: string;
	type: MessageType;
	status?: number;
	pub_at: number;
	user: {
		user: string;
		nick: string;
		is_verified: boolean;
		last_seen_at?: number;
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
	prev: number;
	next: number;
}

/**
 * Response from get_chat, get_or_create_chat, and new_chat WAMP RPC calls
 */
export interface APIGetChatResponse {
	chat: APIChatChannel;
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
