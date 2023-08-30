import { Metadata } from 'next';
import { Fragment } from 'react';
import RegulationsContent from './components/RegulationsContent';

export const metadata: Metadata = {
  title: 'Regulaminy | Art CK',
};

export default function RegulationsPage() {
  ////tsx
  return (
    <Fragment>
      <RegulationsContent />
    </Fragment>
  );
}
