import { Auth, calendar_v3 } from "googleapis";
export declare function authorize(code?: string): Promise<Auth.OAuth2Client>;
export declare function listEvents(auth: Auth.OAuth2Client, tMin: string, tMax: string): Promise<{
    id: string | null | undefined;
    start: string | null | undefined;
    summary: string | null | undefined;
}[]>;
export declare function updateEventSummary(auth: Auth.OAuth2Client, eventId: string, newSummary: string): Promise<calendar_v3.Schema$Event>;
//# sourceMappingURL=calendar.d.ts.map