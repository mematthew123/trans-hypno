'use client';

import { getCalApi } from '@calcom/embed-react';
import { useEffect } from 'react';

export default function Cal({
  brandColor = '#000000',
  hideEventTypeDetails = false,
  layout = 'month_view',
  buttonText = 'Schedule a Meeting',
  buttonClass = 'border-2 border-black rounded-lg p-4 text-lg underline font-bold  transition',
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
