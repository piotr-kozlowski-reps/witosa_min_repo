import { Metadata } from 'next';
import { Fragment } from 'react';
import PrivacyPolicyContent from './components/PrivacyPolicyContent';

export const metadata: Metadata = {
  title: 'Polityka prywatności | Art CK',
};

export default function PrivacyPolicyPage() {
  ////tsx
  return (
    <Fragment>
      <PrivacyPolicyContent />
    </Fragment>
  );
}
