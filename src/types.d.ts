export interface DateRange {
  startDate: Date;
  endDate: Date | 'now';
}
export interface Coordinates {
  x: number;
  y: number;
}

export interface Icon {
  src: string;
  alt: string;
}

export interface PageProps {
  mediaFiles: StrapiFile[];
}

export interface Point {
  x: number;
  y: number;
}
