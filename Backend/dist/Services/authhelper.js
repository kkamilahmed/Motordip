import fs from "fs";
import path from "path";
import { google } from "googleapis";
// Absolute paths from project root
const CREDENTIALS_PATH = path.resolve("src/Services/credentials.json");
const TOKEN_PATH = path.resolve("src/Services/token.json");
export function getCredentials() {
    if (!fs.existsSync(CREDENTIALS_PATH)) {
        throw new Error(`No credentials.json found at ${CREDENTIALS_PATH}`);
    }
    const { client_id, client_secret, redirect_uris } = JSON.parse(fs.readFileSync(CREDENTIALS_PATH, "utf-8")).web; // Using "web" key
    return { client_id, client_secret, redirect_uris };
}
export async function getSavedAuth() {
    const { client_id, client_secret, redirect_uris } = getCredentials();
    const oAuth2Client = new google.auth.OAuth2(client_id, client_secret, redirect_uris[0]);
    if (!fs.existsSync(TOKEN_PATH)) {
        throw new Error("No saved token found. Please authorize first.");
    }
    const tokens = JSON.parse(fs.readFileSync(TOKEN_PATH, "utf-8"));
    oAuth2Client.setCredentials(tokens);
    return oAuth2Client;
}
export function saveToken(tokens) {
    fs.writeFileSync(TOKEN_PATH, JSON.stringify(tokens));
}
//# sourceMappingURL=authhelper.js.map