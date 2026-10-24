export type CalendarType = "solar" | "lunar";
export type Gender = "female" | "male";

export type ConsultFormValues = {
  calendar: CalendarType;
  isLeapMonth: boolean;
  year: string;
  month: string;
  day: string;
  hour: string;
  minute: string;
  timeUnknown: boolean;
  gender: Gender | null;
};

export type ConsultFormErrors = Partial<
  Record<
    | "calendar"
    | "year"
    | "month"
    | "day"
    | "date"
    | "hour"
    | "minute"
    | "time"
    | "gender",
    string
  >
>;

export const EMPTY_FORM: ConsultFormValues = {
  calendar: "solar",
  isLeapMonth: false,
  year: "",
  month: "",
  day: "",
  hour: "",
  minute: "",
  timeUnknown: false,
  gender: null,
};
