import { EpochSec } from "../utils/index.js";
import { APIBanReason } from "./ban.js";
import Base from "./base.js";

export interface APIAppeal extends Base {
    strike_id?: string;
    ban_id?: string;
    ban_reason: APIBanReason;
    created_at: EpochSec;
    status: APIAppealStatus;
    type: APIAppealType;
}

export enum AppealStatus {
    PENDING = "pending",
    DENIED = "denied",
}

export type APIAppealStatus = `${AppealStatus}`;

export enum AppealType {
    BAN = "ban",
    STRIKE = "strike",
}

export type APIAppealType = `${AppealType}`;
