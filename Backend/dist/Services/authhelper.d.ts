import type { OAuth2Client } from "googleapis-common";
export declare function getCredentials(): {
    client_id: any;
    client_secret: any;
    redirect_uris: any;
};
export declare function getSavedAuth(): Promise<OAuth2Client>;
export declare function saveToken(tokens: any): void;
//# sourceMappingURL=authhelper.d.ts.map