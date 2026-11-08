import { EpochSec } from "../utils/index.js";
import { APIBanReason } from "./ban.js";
import Base from "./base.js";
import { APIContent } from "./content.js";

export interface APIStrike extends Base {
    ban_reason: APIBanReason;
    created_at: EpochSec;
    expired_at: EpochSec;
    related_content?: APIContent;
    was_shown: boolean;
    is_active: boolean;
    ban_days: number;
    is_appealed: boolean;
}
