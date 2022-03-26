import express, {Request, Response, NextFunction} from 'express';
import { getLocationWithTimezones } from './timezone';

let timezones = "/timezones"
const app = express();
const port = 3000;

app.listen(port, () => {
    console.log("Started listening on port="+ port);
});

app.get("/", (req: Request, res: Response) => {
    res.send("hello");
})

app.get(timezones, getLocationWithTimezones);