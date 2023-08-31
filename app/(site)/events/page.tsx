import { getEventsExcludingThoseNotToBeSeenInEventsSectionSorted } from '@/lib/api/eventsUtils';
import { TEventTemporary } from '@/types';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Wydarzenia | Art CK',
};

export default async function EventsPage() {
  ////vars
  const events: TEventTemporary[] =
    await getEventsExcludingThoseNotToBeSeenInEventsSectionSorted();

  return (
    <section>
      <div>events</div>
    </section>
  );
}
