import { notices } from '../config/notices';

/**
 * Reusable notice block shown at the bottom of Menu and
 * Weekly Specials pages.
 */
export default function NoticeBanner({
  showSpecialNotices = false,
}: {
  showSpecialNotices?: boolean;
}) {
  return (
    <div className="mx-auto max-w-3xl px-5 py-10 text-center">
      {showSpecialNotices && (
        <div className="mb-4 space-y-1.5">
          <p className="text-sm font-medium text-terracotta-600">
            {notices.limitedQuantities}
          </p>
          <p className="text-sm font-medium text-terracotta-600">
            {notices.noSubstitutions}
          </p>
        </div>
      )}
      <p className="text-xs italic leading-relaxed text-espresso-400">
        {notices.foodSafety}
      </p>
      <p className="mt-3 text-xs font-medium uppercase tracking-wide text-espresso-500">
        {notices.cardServiceFee}
      </p>
    </div>
  );
}
