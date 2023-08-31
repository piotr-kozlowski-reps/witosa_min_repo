import { getCyclicalActivities } from '@/lib/api/cyclicalActivitiesUtils';
import { CyclicalActivityTemporary } from '@/types';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zajęcia stałe | Art CK',
};

export default async function ActivitiesPage() {
  ////vars
  const cyclicalActivities: CyclicalActivityTemporary[] =
    await getCyclicalActivities();

  ////tsx
  return (
    <section>
      <div>activities</div>
    </section>
  );
}
