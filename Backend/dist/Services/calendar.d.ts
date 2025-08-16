import { Auth } from "googleapis";
export declare function authorize(code?: string): Promise<Auth.OAuth2Client>;
export declare function listEvents(auth: Auth.OAuth2Client, tMin: string, tMax: string): Promise<{
    start: string | null | undefined;
    summary: string | null | undefined;
}[]>;
//# sourceMappingURL=calendar.d.ts.map