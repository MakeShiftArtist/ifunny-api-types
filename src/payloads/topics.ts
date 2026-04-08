export const CHAT_NAMESPACE = "co.fun.chat";

/**
 * Represents a WAMP topic subscription
 */
export interface Topic {
	topic: string;
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
