export interface DateRange {
  startDate: Date,
  endDate: Date | 'now'
}
export interface Coordinates {
  x: number,
  y: number
};

export interface Icon {
  src: string,
  alt: string
};
export interface StrapiFile {
  id: string;
  created_at: string
  updated_at: string,
  name: string
  alternativeText?: string
  caption?: string
  width?: int
  height?: Int
  formats?: JSON
  hash: string
  ext?: string
  mime: string
  size: Float
  url: string
  previewUrl?: string
  provider: string
  provider_metadata?: JSON
}

export interface PageProps {
  mediaFiles: StrapiFile[]
}