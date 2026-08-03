export interface EventParams {
  category?: string;
  label?: string;
  value?: number;
  [key: string]: unknown;
}

export type TrackEventFunction = (eventName: string, params?: EventParams) => void;
