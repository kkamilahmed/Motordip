import fs from "fs/promises";
import path from "path";
import { google, Auth } from "googleapis";

const CREDENTIALS_PATH = path.join(
  process.cwd(),
  "src/services/credentials.json"
);
const TOKEN_PATH = path.join(process.cwd(), "src/services/token.json");

const SCOPES = ["https://www.googleapis.com/auth/calendar.readonly"];

let client: Auth.OAuth2Client | null = null;


async function initClient(): Promise<Auth.OAuth2Client> {
  if (client) return client;

  const creds = JSON.parse(await fs.readFile(CREDENTIALS_PATH, "utf-8"));
  const key = creds.installed || creds.web;

  client = new google.auth.OAuth2(
    key.client_id,
    key.client_secret,
    "http://localhost:3000/oauth2callback" // redirect URI must match Google Console
  );

  try {
    const token = JSON.parse(await fs.readFile(TOKEN_PATH, "utf-8"));
    client.setCredentials(token);
  } catch {
    // No token yet; will handle in authorize()
  }

  return client;
}

export async function authorize(code?: string): Promise<Auth.OAuth2Client> {
  const client = await initClient();

  // If we already have a valid refresh token, just return
  if (client.credentials.refresh_token) return client;

  if (!code) {
    // No code yet; generate auth URL
    const authUrl = client.generateAuthUrl({
      access_type: "offline",
      prompt: "consent",
      scope: SCOPES,
    });

    console.log("Open this URL in your browser to authorize the app:");
    console.log(authUrl);
    throw new Error(
      "No authorization code provided. Open the URL above and allow access."
    );
  }

  // Exchange code for token
  const { tokens } = await client.getToken(code);
  client.setCredentials(tokens);

  // Save token for future use
  await fs.writeFile(TOKEN_PATH, JSON.stringify(tokens, null, 2));
  console.log("Token saved to token.json");

  return client;
}


export async function listEvents(auth: Auth.OAuth2Client,tMin : string, tMax : string) {
  const calendar = google.calendar({ version: "v3", auth });
  const calendarId =
    "36f8f624f2dfdabe56dbb72c4971e1c3367fc05976c22093258d3269a5adff89@group.calendar.google.com";

  const res = await calendar.events.list({
    calendarId,
    timeMin: tMin,
    timeMax :tMax,
    maxResults: 100,
    singleEvents: true,
    orderBy: "startTime",
  });

  const events = res.data.items || [];
  return events.map((e) => ({
    start: e.start?.dateTime || e.start?.date,
    summary: e.summary,
  }));
}
