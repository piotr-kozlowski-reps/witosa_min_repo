'use client';

import { useIconsLogicHandler } from '@/hooks/useIconsLogicHandler';
import { TIconSize } from '@/types';
import IconLinkWrapper from './IconLinkWrapper';

type Props = {
  alt: string;
  size?: TIconSize;
  url: string;
};

export default function FacebookIcon(props: Props) {
  ////vars
  const { size, alt, url } = props;
  const { width, height, currentForegroundColor } = useIconsLogicHandler(size);

  ////tsx
  return (
    <IconLinkWrapper alt={alt} url={url}>
      <svg
        width={`${width}`}
        height={`${height}`}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle
          cx="12"
          cy="12"
          r="11"
          // fill="none"
          // stroke="none"
          // stroke-width="2"
        />
        <path
          d="M9.92096 18H12.4604V12.9411H14.7486L14.9999 10.4272H12.4604V9.15789C12.4604 8.80909 12.7447 8.52632 13.0953 8.52632H14.9999V6H13.0953C11.3421 6 9.92096 7.41384 9.92096 9.15789V10.4272H8.65124L8.3999 12.9411H9.92096V18Z"
          fill={currentForegroundColor}
        />
      </svg>
    </IconLinkWrapper>
  );
}
