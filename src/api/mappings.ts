import { CareerProps } from '@organisms/Career/Career';
import { Entry } from '@organisms/Timeline/Timeline';
import { CareerWidget } from './types';

export const getMappedCareer = (careerWidget: CareerWidget): CareerProps => {
  const { __typename, entries, id, title } = careerWidget;

  const mappedEntries: Entry[] = entries.map((entry) => ({
    id: entry.id,
    iconUrl: entry.icon.url,
    infoCard: {
      dateRange: {
        startDate: new Date(entry.startDate),
        endDate: entry.endDate ? new Date(entry.endDate) : 'now',
      },
      title: entry.companyName,
      description: entry.description,
      url: entry.url,
    },
  }));

  return {
    __typename,
    id,
    title,
    entries: mappedEntries,
  } as CareerProps;
};
