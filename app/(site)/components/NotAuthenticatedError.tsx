import Link from 'next/link';

export default function NotAuthenticaterError() {
  //TODO: add showing what site it is
  //TODO: button to login
  //TODO: button to main
  return (
    <div>
      NotAuthenticaterErrorComponent - with later path showing where error
      occured
      <div>
        <Link href={'/login'}>Login</Link>
      </div>
      <div>
        <Link href={'/'}>Strona główna</Link>
      </div>
    </div>
  );
}
