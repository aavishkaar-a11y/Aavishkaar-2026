export type FormType = "solo" | "duo" | "group";

export const eventTypeMap: Record<string, FormType> = {
  "solo-dance": "solo",
  "photography": "solo",
  "haunt-hunt": "solo",

  "ipl-auction": "duo",
  "connexions": "duo",
  "esports": "duo",

  "group-dance": "group",
  "stall": "group",
  "short-film": "group",
  "ramp-walk": "group",
};
