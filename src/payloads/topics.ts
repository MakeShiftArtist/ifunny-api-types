import type { APIInvitePayload, APIKickPayload, APIInviteResponsePayload } from "./chat";

export const CHAT_NAMESPACE = "co.fun.chat";

/**
 * Represents a WAMP topic subscription
 */
export interface Topic {
	topic: string;
}

/**
 * Represents a WAMP RPC call with typed payload
 */
export interface RpcCall<T = Record<string, any>> {
	procedure: string;
	kwargs: T;
}

/**
 * Returns the WAMP topic for chat channel events
 */
export function eventsIn(channelName: string): Topic {
	return {
		topic: `${CHAT_NAMESPACE}.chat.${channelName}`,
	};
}

/**
 * Returns the WAMP topic for direct message channel events
 */
export function dmChannelTopic(channelName: string): Topic {
	return {
		topic: `${CHAT_NAMESPACE}.chat.${channelName}`,
	};
}

/**
 * Returns the WAMP topic for user's joined chats
 */
export function userJoinedChats(userId: string): Topic {
	return {
		topic: `${CHAT_NAMESPACE}.user.${userId}.chats`,
	};
}

/**
 * Returns the WAMP RPC call to invite users to a channel
 */
export function inviteUsers(channelName: string, userIds: string[]): RpcCall<APIInvitePayload> {
	return {
		procedure: "invite.invite",
		kwargs: { chat_name: channelName, users: userIds },
	};
}

/**
 * Returns the WAMP RPC call to accept a chat invite
 */
export function acceptInvite(channelName: string): RpcCall<APIInviteResponsePayload> {
	return {
		procedure: "invite.accept",
		kwargs: { chat_name: channelName },
	};
}

/**
 * Returns the WAMP RPC call to decline a chat invite
 */
export function declineInvite(channelName: string): RpcCall<APIInviteResponsePayload> {
	return {
		procedure: "invite.decline",
		kwargs: { chat_name: channelName },
	};
}

/**
 * Returns the WAMP RPC call to kick a member from a channel
 */
export function kickMember(channelName: string, userId: string): RpcCall<APIKickPayload> {
	return {
		procedure: "kick_member",
		kwargs: { chat_name: channelName, user_id: userId },
	};
}
