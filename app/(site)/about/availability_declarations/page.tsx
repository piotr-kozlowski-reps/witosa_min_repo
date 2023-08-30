import { Metadata } from 'next';
import { Fragment } from 'react';
import AvailabilityDeclarationsContent from './components/AvailabilityDeclarationsContent';

export const metadata: Metadata = {
  title: 'Deklaracje dostępności | Art CK',
};

export default function AvailabilityDeclarationsPage() {
  ////tsx
  return (
    <Fragment>
      <AvailabilityDeclarationsContent />
    </Fragment>
  );
}
