import { useState, useMemo, useCallback, useEffect } from "react";

/* ─────────────────────── date helpers ─────────────────────── */

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfWeek(year: number, month: number) {
  return new Date(year, month, 1).getDay(); // 0=Sun
}

function isSameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function isWeekend(date: Date) {
  const d = date.getDay();
  return d === 0 || d === 6;
}

function isPast(date: Date) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const d = new Date(date);
  d.setHours(0, 0, 0, 0);
  return d <= today;
}

function isToday(date: Date) {
  return isSameDay(date, new Date());
}

function formatMonthYear(date: Date) {
  return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

function formatConfirmDate(date: Date) {
  return date.toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
  });
}

/* ─────────────────────── constants ─────────────────────── */

const DAY_LABELS = ["S", "M", "T", "W", "T", "F", "S"];

const DEFAULT_SLOTS = [
  "09:00 AM",
  "10:30 AM",
  "01:00 PM",
  "02:30 PM",
  "04:00 PM",
];

/* ─────────────────────── component ─────────────────────── */

interface BookingCalendarProps {
  selectedDate: Date | null;
  selectedSlot: string | null;
  onDateChange: (date: Date) => void;
  onSlotChange: (slot: string) => void;
  slots?: string[];
  /** How many days ahead users can book (default 60) */
  maxDaysAhead?: number;
}

export function BookingCalendar({
  selectedDate,
  selectedSlot,
  onDateChange,
  onSlotChange,
  slots = DEFAULT_SLOTS,
  maxDaysAhead = 60,
}: BookingCalendarProps) {
  const today = useMemo(() => {
    const d = new Date();
    d.setHours(0, 0, 0, 0);
    return d;
  }, []);

  const maxDate = useMemo(() => {
    const d = new Date(today);
    d.setDate(d.getDate() + maxDaysAhead);
    return d;
  }, [today, maxDaysAhead]);

  // Start on the current month
  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [viewYear, setViewYear] = useState(today.getFullYear());

  // Slot animation key
  const [slotKey, setSlotKey] = useState(0);

  const canGoPrev = useMemo(() => {
    // Can't go before current month
    return (
      viewYear > today.getFullYear() ||
      (viewYear === today.getFullYear() && viewMonth > today.getMonth())
    );
  }, [viewMonth, viewYear, today]);

  const canGoNext = useMemo(() => {
    return (
      viewYear < maxDate.getFullYear() ||
      (viewYear === maxDate.getFullYear() && viewMonth < maxDate.getMonth())
    );
  }, [viewMonth, viewYear, maxDate]);

  const goToPrevMonth = useCallback(() => {
    if (!canGoPrev) return;
    setViewMonth((m) => {
      if (m === 0) {
        setViewYear((y) => y - 1);
        return 11;
      }
      return m - 1;
    });
  }, [canGoPrev]);

  const goToNextMonth = useCallback(() => {
    if (!canGoNext) return;
    setViewMonth((m) => {
      if (m === 11) {
        setViewYear((y) => y + 1);
        return 0;
      }
      return m + 1;
    });
  }, [canGoNext]);

  // Build the calendar grid cells
  const calendarCells = useMemo(() => {
    const daysInMonth = getDaysInMonth(viewYear, viewMonth);
    const firstDay = getFirstDayOfWeek(viewYear, viewMonth);
    const daysInPrevMonth = getDaysInMonth(
      viewMonth === 0 ? viewYear - 1 : viewYear,
      viewMonth === 0 ? 11 : viewMonth - 1
    );

    const cells: {
      date: Date;
      day: number;
      isCurrentMonth: boolean;
      isDisabled: boolean;
      isSelected: boolean;
      isToday: boolean;
    }[] = [];

    // Previous month overflow
    for (let i = firstDay - 1; i >= 0; i--) {
      const d = daysInPrevMonth - i;
      const prevMonth = viewMonth === 0 ? 11 : viewMonth - 1;
      const prevYear = viewMonth === 0 ? viewYear - 1 : viewYear;
      const date = new Date(prevYear, prevMonth, d);
      cells.push({
        date,
        day: d,
        isCurrentMonth: false,
        isDisabled: true,
        isSelected: selectedDate ? isSameDay(date, selectedDate) : false,
        isToday: isToday(date),
      });
    }

    // Current month days
    for (let d = 1; d <= daysInMonth; d++) {
      const date = new Date(viewYear, viewMonth, d);
      const disabled = isPast(date) || isWeekend(date) || date > maxDate;
      cells.push({
        date,
        day: d,
        isCurrentMonth: true,
        isDisabled: disabled,
        isSelected: selectedDate ? isSameDay(date, selectedDate) : false,
        isToday: isToday(date),
      });
    }

    // Next month overflow (fill to complete the grid — always 6 rows × 7 cols = 42)
    const remaining = 42 - cells.length;
    for (let d = 1; d <= remaining; d++) {
      const nextMonth = viewMonth === 11 ? 0 : viewMonth + 1;
      const nextYear = viewMonth === 11 ? viewYear + 1 : viewYear;
      const date = new Date(nextYear, nextMonth, d);
      cells.push({
        date,
        day: d,
        isCurrentMonth: false,
        isDisabled: true,
        isSelected: selectedDate ? isSameDay(date, selectedDate) : false,
        isToday: isToday(date),
      });
    }

    return cells;
  }, [viewYear, viewMonth, selectedDate, maxDate]);

  const handleDateClick = useCallback(
    (date: Date) => {
      onDateChange(date);
      setSlotKey((k) => k + 1); // trigger slot animation
    },
    [onDateChange]
  );

  return (
    <div className="flex flex-col gap-6 md:flex-row md:gap-0">
      {/* ───── Calendar Panel ───── */}
      <div className="flex-1 min-w-0">
        {/* Header: month title + nav arrows */}
        <div className="flex items-center justify-between mb-5">
          <h3 className="font-display text-xl font-semibold tracking-tight">
            {formatMonthYear(new Date(viewYear, viewMonth))}
          </h3>
          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={goToPrevMonth}
              disabled={!canGoPrev}
              aria-label="Previous month"
              className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-muted-foreground transition hover:text-foreground hover:border-foreground/30 disabled:opacity-25 disabled:pointer-events-none"
            >
              <svg
                viewBox="0 0 16 16"
                className="h-3.5 w-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M10 4l-4 4 4 4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              type="button"
              onClick={goToNextMonth}
              disabled={!canGoNext}
              aria-label="Next month"
              className="flex h-8 w-8 items-center justify-center rounded-md border border-border text-muted-foreground transition hover:text-foreground hover:border-foreground/30 disabled:opacity-25 disabled:pointer-events-none"
            >
              <svg
                viewBox="0 0 16 16"
                className="h-3.5 w-3.5"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path
                  d="M6 4l4 4-4 4"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>

        {/* Day-of-week header */}
        <div className="grid grid-cols-7 mb-1">
          {DAY_LABELS.map((label, i) => (
            <div
              key={`${label}-${i}`}
              className="py-2 text-center font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground"
            >
              {label}
            </div>
          ))}
        </div>

        {/* Date grid */}
        <div className="grid grid-cols-7">
          {calendarCells.map((cell, i) => {
            const baseClasses =
              "relative flex h-10 w-full items-center justify-center rounded-lg text-sm transition-all duration-200";

            let stateClasses: string;
            if (cell.isSelected) {
              stateClasses =
                "bg-accent-indigo text-white font-semibold shadow-[0_0_16px_rgba(99,102,241,0.35)]";
            } else if (!cell.isCurrentMonth) {
              stateClasses = "text-muted-foreground/30 pointer-events-none";
            } else if (cell.isDisabled) {
              stateClasses =
                "text-muted-foreground/40 pointer-events-none cursor-default";
            } else if (cell.isToday) {
              stateClasses =
                "text-accent-blue font-medium hover:bg-accent-blue/10 cursor-pointer";
            } else {
              stateClasses =
                "text-foreground/80 hover:bg-[color:var(--surface-2)] cursor-pointer";
            }

            return (
              <button
                key={i}
                type="button"
                disabled={cell.isDisabled || !cell.isCurrentMonth}
                onClick={() => handleDateClick(cell.date)}
                className={`${baseClasses} ${stateClasses}`}
                aria-label={cell.date.toLocaleDateString("en-US", {
                  weekday: "long",
                  month: "long",
                  day: "numeric",
                })}
              >
                {cell.day}
                {cell.isToday && !cell.isSelected && (
                  <span className="absolute bottom-1.5 h-1 w-1 rounded-full bg-accent-blue" />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* ───── Divider ───── */}
      <div className="hidden md:block w-px bg-border mx-6 self-stretch" />

      {/* ───── Time Slots Panel ───── */}
      <div className="md:w-[200px] shrink-0">
        {/* Slots header */}
        <div className="flex items-center gap-2 mb-5">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-teal" />
          <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
            Available Slots
          </span>
        </div>

        {/* Slot buttons */}
        {selectedDate ? (
          <div
            key={slotKey}
            className="flex flex-row gap-2 overflow-x-auto pb-2 md:flex-col md:overflow-x-visible md:pb-0 animate-fade-in-up"
          >
            {slots.map((s) => {
              const isActive = selectedSlot === s;
              return (
                <button
                  key={s}
                  type="button"
                  onClick={() => onSlotChange(s)}
                  className={
                    "shrink-0 rounded-lg border px-4 py-3 font-mono text-sm transition-all duration-200 " +
                    (isActive
                      ? "border-accent-indigo bg-accent-indigo/10 text-foreground shadow-[0_0_12px_rgba(99,102,241,0.2)]"
                      : "border-border text-muted-foreground hover:border-accent-blue/40 hover:text-foreground")
                  }
                >
                  {s}
                </button>
              );
            })}
          </div>
        ) : (
          <div className="flex items-center justify-center py-8 md:py-16">
            <p className="text-sm text-muted-foreground/60 text-center">
              Select a date to view
              <br />
              available time slots
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export { formatConfirmDate };
