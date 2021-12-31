export interface StrapiFile {
  id: string;
  created_at: string;
  updated_at: string;
  name: string;
  alternativeText?: string;
  caption?: string;
  width?: number;
  height?: number;
  formats?: JSON;
  hash: string;
  ext?: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: string;
  provider: string;
  provider_metadata?: JSON;
}

export type Widget = CareerWidget;

export enum WidgetType {
  Career = 'ComponentWidgetsCareer',
}

export interface CareerWidget {
  __typename: string;
  id: string;
  title: string;
  entries: Entry[];
}

interface Icon {
  url: string;
}

interface Entry {
  id: string;
  companyName: string;
  startDate: string;
  endDate?: string;
  description: string;
  url: string;
  icon: Icon;
}
