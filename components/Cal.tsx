'use client';

import { getCalApi } from '@calcom/embed-react';
import { useEffect } from 'react';

export default function Cal({
  brandColor = '#000000',
  hideEventTypeDetails = false,
  layout = 'month_view',
  buttonText = 'Schedule Now',
  buttonClass = 'mt-8 inline-flex animate-pulse bg-primary-700  text-white items-center justify-center rounded-full px-5 py-3 text-base font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600',
  calLink = 'mematthew123/30min',
  calConfig = '{"layout":"month_view"}',
}) {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal('ui', {
        styles: { branding: { brandColor } },
        hideEventTypeDetails,
      });
    })();
  }, [brandColor, hideEventTypeDetails, layout]);

  return (
    <button
      className={buttonClass}
      data-cal-link={calLink}
      data-cal-config={calConfig}
    >
      {buttonText}
    </button>
  );
}
