import express from "express";
import { authorize, listEvents } from "./Services/calendar.js";
import cors from "cors";
const app = express();
app.use(cors());
app.get("/oauth2callback", async (req, res) => {
    try {
        const code = req.query.code;
        const auth = await authorize(code);
        res.send("Successfully Recieved Token");
    }
    catch (err) {
        console.error(err);
        res.status(500).send(err.message);
    }
});
app.get("/events", async (req, res) => {
    try {
        const { date } = req.query;
        if (!date) {
            return res.status(400).send("date query param is required");
        }
        const day = new Date(date);
        const tMin = new Date(day.setHours(0, 0, 0, 0)).toISOString();
        const tMax = new Date(day.setHours(23, 59, 59, 999)).toISOString();
        const auth = await authorize();
        const events = await listEvents(auth, tMin, tMax);
        res.json(events);
    }
    catch (err) {
        console.error(err);
        res.status(500).send(err.message);
    }
});
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
//# sourceMappingURL=index.js.map