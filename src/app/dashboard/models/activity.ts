import {ActivePeriod} from "./activePeriod";

export interface Activity {
    id?: string;
    name: string;
    type: string;
    color: string;
    cols?: number;
    rows?: number;
    active_period?: ActivePeriod;
}
