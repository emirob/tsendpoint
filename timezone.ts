import { Request, Response, NextFunction } from "express";

export interface LocationWithTimezone {
    location: string;
    timezoneName: string;
    utcOffset : number;
}

export const getLocationWithTimezones = (request: Request, response: Response, next: NextFunction) => { 
    let locations: LocationWithTimezone[] = [
            {
                location: "United Kingdom",
                timezoneName: "UK Time",
                utcOffset: 0
            },
            {
                location: "Italy",
                timezoneName: "central Europe",
                utcOffset: 1
            },
            {
                location: "Los Angelas",
                timezoneName: "US Time",
                utcOffset: -7
            }
        ];

        response.status(200).json(locations);
    };