/**
 * ============================================================
 * CENTRALIZED HOURS CONFIGURATION
 * ============================================================
 * The existing website shows potentially conflicting seasonal
 * and regular hours. All hours are stored here so they can be
 * corrected in ONE place before launch.
 *
 * >>> OWNER: Confirm which hours set is current. <<<
 * ============================================================
 */

export const hours = {
  // Primary hours shown on the Hours & Location and Home pages.
  // Source: Location.html — "Monday - Tuesday: 9am - 3pm, Wednesday
  // to Friday: 9am - 5pm, Saturday 9am to 4pm"
  regular: [
    { day: 'Monday', time: '9am – 3pm' },
    { day: 'Tuesday', time: '9am – 3pm' },
    { day: 'Wednesday', time: '9am – 5pm' },
    { day: 'Thursday', time: '9am – 5pm' },
    { day: 'Friday', time: '9am – 5pm' },
    { day: 'Saturday', time: '9am – 4pm' },
    { day: 'Sunday', time: 'Closed' },
  ],

  // Off-season hours mentioned on the homepage specials section.
  // Source: index.html — "Off-Season Hours: Monday - Friday, 9am - 3pm"
  // >>> OWNER: Confirm if these are still current or should be removed. <<<
  offSeason: [
    { day: 'Monday', time: '9am – 3pm' },
    { day: 'Tuesday', time: '9am – 3pm' },
    { day: 'Wednesday', time: '9am – 3pm' },
    { day: 'Thursday', time: '9am – 3pm' },
    { day: 'Friday', time: '9am – 3pm' },
    { day: 'Saturday', time: '9am – 4pm' },
    { day: 'Sunday', time: 'Closed' },
  ],

  // Saturday kitchen closing note from the weekly specials page.
  // Source: index.html — Saturday: "Open Until 4pm. Kitchen Closed at 3pm."
  saturdayNote: 'Open until 4pm. Kitchen closed at 3pm.',

  // Lunch delivery hours from the existing website.
  delivery: 'Mon–Fri, 11:00 a.m. – 2:30 p.m.',
};

export type Hours = typeof hours;
