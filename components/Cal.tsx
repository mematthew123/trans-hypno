'use client';

import { getCalApi } from '@calcom/embed-react';
import { useEffect } from 'react';

export default function Cal({
  brandColor = '#000000',
  hideEventTypeDetails = false,
  layout = 'month_view',
  buttonText = 'Schedule Now',
  buttonClass = ' hover:text-primary-50 transition-effect mt-8 inline-flex items-center justify-center px-5 py-3 text-lg font-medium hover:shadow-md text-white hover:-translate-y-1 hover:scale-110 rounded-full transition-colors duration-1000 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary-600',
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
