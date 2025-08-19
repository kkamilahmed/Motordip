import express from "express";
import { authorize, listEvents, updateEventSummary} from "./Services/calendar.js";
import cors from "cors"

const app = express();

app.use(cors());

app.get("/oauth2callback", async (req, res) => {
  try {
    const code = req.query.code as string | undefined;
    const auth = await authorize(code);
    res.send("Successfully Recieved Token");
  } catch (err: any) {
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

    const day = new Date(date as string);
    const tMin = new Date(day.setHours(0, 0, 0, 0)).toISOString();
    const tMax = new Date(day.setHours(23, 59, 59, 999)).toISOString();

    const auth = await authorize();
    const events = await listEvents(auth, tMin, tMax);

    res.json(events);
  } catch (err: any) {
    console.error(err);
    res.status(500).send(err.message);
  }
});


app.post("/events", async (req, res) => {
  try {
    const auth = await authorize();
    const { eventId, newSummary } = req.body; // better to use req.body for POST
    const updatedEvent = await updateEventSummary(auth, eventId, newSummary);
    res.status(200).json(updatedEvent);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update event" });
  }
});


const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
