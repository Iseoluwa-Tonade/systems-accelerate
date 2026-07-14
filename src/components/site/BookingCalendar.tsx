import { useState, useMemo, useCallback } from "react";

/* ─────────────────────── helpers ─────────────────────── */
function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}
function getFirstDayOfWeek(year: number, month: number) {
  return new Date(year, month, 1).getDay();
}
function isSameDay(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
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
export function formatConfirmDate(date: Date) {
  return date.toLocaleDateString("en-US", { weekday: "short", month: "short", day: "numeric" });
}
function formatMonthYear(date: Date) {
  return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

/* ─────────────────────── constants ─────────────────────── */
const DAY_LABELS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const DEFAULT_SLOTS = ["09:00 AM", "10:30 AM", "01:00 PM", "02:30 PM", "04:00 PM"];

/* ─────────────────────── component ─────────────────────── */
interface BookingCalendarProps {
  selectedDate: Date | null;
  selectedSlot: string | null;
  onDateChange: (date: Date) => void;
  onSlotChange: (slot: string) => void;
  slots?: string[];
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

  const [viewMonth, setViewMonth] = useState(today.getMonth());
  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [slotKey, setSlotKey] = useState(0);

  const canGoPrev = useMemo(() =>
    viewYear > today.getFullYear() || (viewYear === today.getFullYear() && viewMonth > today.getMonth()),
    [viewMonth, viewYear, today]
  );
  const canGoNext = useMemo(() =>
    viewYear < maxDate.getFullYear() || (viewYear === maxDate.getFullYear() && viewMonth < maxDate.getMonth()),
    [viewMonth, viewYear, maxDate]
  );

  const goToPrevMonth = useCallback(() => {
    if (!canGoPrev) return;
    setViewMonth((m) => { if (m === 0) { setViewYear((y) => y - 1); return 11; } return m - 1; });
  }, [canGoPrev]);

  const goToNextMonth = useCallback(() => {
    if (!canGoNext) return;
    setViewMonth((m) => { if (m === 11) { setViewYear((y) => y + 1); return 0; } return m + 1; });
  }, [canGoNext]);

  const calendarCells = useMemo(() => {
    const daysInMonth = getDaysInMonth(viewYear, viewMonth);
    const firstDay = getFirstDayOfWeek(viewYear, viewMonth);
    const daysInPrevMonth = getDaysInMonth(viewMonth === 0 ? viewYear - 1 : viewYear, viewMonth === 0 ? 11 : viewMonth - 1);
    const cells: { date: Date; day: number; isCurrentMonth: boolean; isDisabled: boolean; isSelected: boolean; isToday: boolean }[] = [];

    for (let i = firstDay - 1; i >= 0; i--) {
      const d = daysInPrevMonth - i;
      const prevMonth = viewMonth === 0 ? 11 : viewMonth - 1;
      const prevYear = viewMonth === 0 ? viewYear - 1 : viewYear;
      const date = new Date(prevYear, prevMonth, d);
      cells.push({ date, day: d, isCurrentMonth: false, isDisabled: true, isSelected: false, isToday: false });
    }
    for (let d = 1; d <= daysInMonth; d++) {
      const date = new Date(viewYear, viewMonth, d);
      cells.push({ date, day: d, isCurrentMonth: true, isDisabled: isPast(date) || isWeekend(date) || date > maxDate, isSelected: selectedDate ? isSameDay(date, selectedDate) : false, isToday: isToday(date) });
    }
    const remaining = 42 - cells.length;
    for (let d = 1; d <= remaining; d++) {
      const nextMonth = viewMonth === 11 ? 0 : viewMonth + 1;
      const nextYear = viewMonth === 11 ? viewYear + 1 : viewYear;
      cells.push({ date: new Date(nextYear, nextMonth, d), day: d, isCurrentMonth: false, isDisabled: true, isSelected: false, isToday: false });
    }
    return cells;
  }, [viewYear, viewMonth, selectedDate, maxDate]);

  const handleDateClick = useCallback((date: Date) => {
    onDateChange(date);
    setSlotKey((k) => k + 1);
  }, [onDateChange]);

  return (
    <div className="flex flex-col gap-8 lg:flex-row lg:gap-0">
      {/* ── Calendar ── */}
      <div className="flex-1 min-w-0">
        {/* Month nav */}
        <div className="flex items-center justify-between mb-6">
          <h3 className="font-display text-lg font-bold text-[#080D1C] tracking-tight">
            {formatMonthYear(new Date(viewYear, viewMonth))}
          </h3>
          <div className="flex items-center gap-1">
            {[
              { label: "Previous month", onClick: goToPrevMonth, disabled: !canGoPrev, path: "M10 4l-4 4 4 4" },
              { label: "Next month", onClick: goToNextMonth, disabled: !canGoNext, path: "M6 4l4 4-4 4" },
            ].map((btn) => (
              <button
                key={btn.label}
                type="button"
                onClick={btn.onClick}
                disabled={btn.disabled}
                aria-label={btn.label}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#E8EEFF] text-[#4C5670] transition-all hover:bg-[#EEF4FF] hover:border-[#1B5EFF]/30 hover:text-[#1B5EFF] disabled:opacity-20 disabled:pointer-events-none"
              >
                <svg viewBox="0 0 16 16" className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d={btn.path} strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            ))}
          </div>
        </div>

        {/* Day labels */}
        <div className="grid grid-cols-7 mb-2">
          {DAY_LABELS.map((label) => (
            <div key={label} className="py-1.5 text-center font-mono text-[10px] uppercase tracking-[0.16em] text-[#4C5670]/50">
              {label}
            </div>
          ))}
        </div>

        {/* Date grid */}
        <div className="grid grid-cols-7 gap-y-0.5">
          {calendarCells.map((cell, i) => {
            if (cell.isSelected) {
              return (
                <button key={i} type="button" onClick={() => handleDateClick(cell.date)}
                  className="relative flex h-9 w-full items-center justify-center rounded-xl font-bold text-sm text-white transition-all"
                  style={{ background: "linear-gradient(135deg, #1B5EFF 0%, #3B82F6 100%)", boxShadow: "0 4px 14px rgba(27,94,255,0.35)" }}
                  aria-label={cell.date.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}
                >
                  {cell.day}
                </button>
              );
            }
            if (!cell.isCurrentMonth) {
              return <div key={i} className="flex h-9 w-full items-center justify-center text-sm text-[#080D1C]/15" />;
            }
            if (cell.isDisabled) {
              return <div key={i} className="flex h-9 w-full items-center justify-center rounded-xl text-sm text-[#080D1C]/22" aria-hidden="true">{cell.day}</div>;
            }
            return (
              <button key={i} type="button" onClick={() => handleDateClick(cell.date)}
                className={`relative flex h-9 w-full items-center justify-center rounded-xl text-sm transition-all hover:bg-[#EEF4FF] hover:text-[#1B5EFF] ${cell.isToday ? "font-semibold text-[#1B5EFF]" : "text-[#080D1C]/80"}`}
                aria-label={cell.date.toLocaleDateString("en-US", { weekday: "long", month: "long", day: "numeric" })}
              >
                {cell.day}
                {cell.isToday && (
                  <span className="absolute bottom-1 h-1 w-1 rounded-full" style={{ background: "#FFB800" }} />
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* ── Divider ── */}
      <div className="hidden lg:block w-px bg-[#E8EEFF] mx-8 self-stretch" />

      {/* ── Time Slots ── */}
      <div className="lg:w-[188px] shrink-0">
        <div className="flex items-center gap-2 mb-5">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          <span className="font-mono text-[10.5px] uppercase tracking-[0.18em] text-[#4C5670]/60">
            Available slots
          </span>
        </div>

        {selectedDate ? (
          <div key={slotKey} className="flex flex-row flex-wrap gap-2 lg:flex-col">
            {slots.map((s) => {
              const active = selectedSlot === s;
              return (
                <button
                  key={s}
                  type="button"
                  onClick={() => onSlotChange(s)}
                  className="shrink-0 rounded-xl border px-4 py-2.5 font-mono text-[13px] font-medium transition-all duration-200"
                  style={active ? {
                    background: "linear-gradient(135deg, #FFD44D 0%, #FFB800 100%)",
                    borderColor: "#FFB800",
                    color: "#080D1C",
                    boxShadow: "0 4px 14px rgba(255,184,0,0.30)",
                    fontWeight: 700,
                  } : {
                    borderColor: "#E8EEFF",
                    color: "#4C5670",
                  }}
                  onMouseEnter={(e) => { if (!active) { (e.currentTarget as HTMLButtonElement).style.borderColor = "#1B5EFF"; (e.currentTarget as HTMLButtonElement).style.color = "#1B5EFF"; } }}
                  onMouseLeave={(e) => { if (!active) { (e.currentTarget as HTMLButtonElement).style.borderColor = "#E8EEFF"; (e.currentTarget as HTMLButtonElement).style.color = "#4C5670"; } }}
                >
                  {s}
                </button>
              );
            })}
          </div>
        ) : (
          <div className="flex flex-col items-center justify-center py-10 text-center">
            <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-[#F4F7FF]">
              <svg viewBox="0 0 20 20" fill="none" className="h-5 w-5 text-[#1B5EFF]/50" stroke="currentColor" strokeWidth="1.5">
                <circle cx="10" cy="10" r="8" />
                <path d="M10 6v4l2.5 2.5" strokeLinecap="round" />
              </svg>
            </div>
            <p className="font-mono text-[10.5px] uppercase tracking-[0.14em] text-[#4C5670]/45 leading-relaxed">
              Select a date<br />to see slots
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
