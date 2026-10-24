import type { ConsultFormErrors, ConsultFormValues } from "./types";

const MIN_YEAR = 1900;
const MAX_YEAR = new Date().getFullYear();

function daysInSolarMonth(year: number, month: number): number {
  return new Date(year, month, 0).getDate();
}

export function validateConsultForm(
  values: ConsultFormValues,
): ConsultFormErrors {
  const errors: ConsultFormErrors = {};

  const year = Number(values.year);
  const month = Number(values.month);
  const day = Number(values.day);

  if (!values.year.trim()) {
    errors.year = "출생 연도를 입력해라.";
  } else if (!Number.isInteger(year) || year < MIN_YEAR || year > MAX_YEAR) {
    errors.year = `${MIN_YEAR}~${MAX_YEAR}년 사이로 적어라.`;
  }

  if (!values.month.trim()) {
    errors.month = "출생 월을 입력해라.";
  } else if (!Number.isInteger(month) || month < 1 || month > 12) {
    errors.month = "월은 1~12 사이여야 한다.";
  }

  if (!values.day.trim()) {
    errors.day = "출생 일을 입력해라.";
  } else if (!Number.isInteger(day) || day < 1 || day > 31) {
    errors.day = "일은 1~31 사이여야 한다.";
  }

  if (!errors.year && !errors.month && !errors.day) {
    if (values.calendar === "solar") {
      const maxDay = daysInSolarMonth(year, month);
      if (day > maxDay) {
        errors.date = `${year}년 ${month}월은 ${maxDay}일까지만 있다.`;
      }
    } else {
      // Lunar: no manseryeok API yet — allow 1–30 and flag leap-month alone as ok.
      if (day > 30) {
        errors.date = "음력 일은 보통 1~30일까지다. 다시 확인해라.";
      }
    }
  }

  if (!values.timeUnknown) {
    const hour = Number(values.hour);
    const minute = Number(values.minute);

    if (!values.hour.trim()) {
      errors.hour = "시간을 입력하거나 ‘시간 모름’을 눌러라.";
    } else if (!Number.isInteger(hour) || hour < 0 || hour > 23) {
      errors.hour = "시는 0~23 사이여야 한다.";
    }

    if (!values.minute.trim()) {
      errors.minute = "분을 입력하거나 ‘시간 모름’을 눌러라.";
    } else if (!Number.isInteger(minute) || minute < 0 || minute > 59) {
      errors.minute = "분은 0~59 사이여야 한다.";
    }

    if (errors.hour || errors.minute) {
      errors.time = "출생 시간을 확인해라. 모르면 ‘시간 모름’ 눌러도.";
    }
  }

  if (!values.gender) {
    errors.gender = "성별을 골라라. 언니인지 오빠인지 알아야 말투도 맞춘다.";
  }

  return errors;
}

export function formatBirthSummary(values: ConsultFormValues): string {
  const cal =
    values.calendar === "solar"
      ? "양력"
      : values.isLeapMonth
        ? "음력(윤달)"
        : "음력";
  const date = `${values.year}년 ${Number(values.month)}월 ${Number(values.day)}일`;
  const time = values.timeUnknown
    ? "시간 모름"
    : `${Number(values.hour)}시 ${Number(values.minute)}분`;
  const gender = values.gender === "female" ? "언니" : "오빠";
  return `${cal} ${date} · ${time} · ${gender}`;
}
