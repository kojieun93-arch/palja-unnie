"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useMemo, useState, type FormEvent, type ReactNode } from "react";
import { BrandMark } from "@/components/BrandMark";
import { saveConsultGender } from "@/lib/consult-session";
import { EMPTY_FORM, type ConsultFormErrors, type ConsultFormValues } from "./types";
import { formatBirthSummary, validateConsultForm } from "./validate";

type Step = "form" | "confirm";

function addressFor(gender: ConsultFormValues["gender"]): string {
  if (gender === "female") return "언니";
  if (gender === "male") return "오빠";
  return "";
}

function FieldError({ message }: { message?: string }) {
  if (!message) return null;
  return (
    <p className="mt-1.5 text-xs font-medium text-wine" role="alert">
      {message}
    </p>
  );
}

function SegmentButton({
  selected,
  onClick,
  children,
  disabled,
}: {
  selected: boolean;
  onClick: () => void;
  children: ReactNode;
  disabled?: boolean;
}) {
  return (
    <button
      type="button"
      disabled={disabled}
      onClick={onClick}
      className={[
        "flex-1 rounded-xl px-3 py-2.5 text-sm font-medium transition active:scale-[0.98]",
        selected
          ? "bg-wine text-ivory shadow-[0_8px_18px_rgba(92,20,40,0.28)]"
          : "border border-bubble-border bg-bubble/80 text-ink-soft hover:border-gold/50",
        disabled ? "opacity-40" : "",
      ].join(" ")}
      aria-pressed={selected}
    >
      {children}
    </button>
  );
}

function NumberField({
  id,
  label,
  value,
  onChange,
  placeholder,
  min,
  max,
  disabled,
  error,
  inputMode = "numeric",
}: {
  id: string;
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder: string;
  min?: number;
  max?: number;
  disabled?: boolean;
  error?: string;
  inputMode?: "numeric" | "decimal";
}) {
  return (
    <label className="block min-w-0 flex-1" htmlFor={id}>
      <span className="mb-1.5 block text-[11px] font-medium tracking-wide text-ink-soft/70">
        {label}
      </span>
      <input
        id={id}
        type="text"
        inputMode={inputMode}
        autoComplete="off"
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        min={min}
        max={max}
        onChange={(e) => onChange(e.target.value.replace(/[^\d]/g, ""))}
        className={[
          "w-full rounded-xl border bg-bubble px-3 py-2.5 text-center text-base text-ink outline-none transition",
          "placeholder:text-ink-soft/35 focus:border-gold focus:ring-2 focus:ring-gold/25",
          error ? "border-wine" : "border-bubble-border",
          disabled ? "opacity-45" : "",
        ].join(" ")}
        aria-invalid={Boolean(error)}
      />
      <FieldError message={error} />
    </label>
  );
}

export function ConsultFlow() {
  const router = useRouter();
  const [step, setStep] = useState<Step>("form");
  const [values, setValues] = useState<ConsultFormValues>(EMPTY_FORM);
  const [errors, setErrors] = useState<ConsultFormErrors>({});
  const [submittedOnce, setSubmittedOnce] = useState(false);

  function goToFortuneSample() {
    if (!values.gender) return;
    // Only gender for 언니/오빠 — never birth data in URL/storage beyond this.
    saveConsultGender(values.gender);
    router.push("/fortune");
  }

  const address = addressFor(values.gender);

  const speech = useMemo(() => {
    if (step === "confirm") {
      if (values.gender === "female") {
        return "오케이 언니, 일단 이렇게 적어놨다. 진짜 분석은 아직이고 — 테스트 확인만 해보는 거다.";
      }
      if (values.gender === "male") {
        return "오케이 오빠, 일단 이렇게 적어놨다. 진짜 분석은 아직이고 — 테스트 확인만 해보는 거다.";
      }
      return "일단 이렇게 적어놨다. 진짜 분석은 아직이다.";
    }

    if (values.gender === "female") {
      return "야, 니 왔나? 생일부터 알려도. 언니 생년월일 똑바로 적어봐.";
    }
    if (values.gender === "male") {
      return "야, 니 왔나? 생일부터 알려도. 오빠 생년월일 똑바로 적어봐.";
    }
    return "야, 니 왔나? 생일부터 알려도.";
  }, [step, values.gender]);

  function patch(partial: Partial<ConsultFormValues>) {
    setValues((prev) => {
      const next = { ...prev, ...partial };
      if (partial.calendar === "solar") {
        next.isLeapMonth = false;
      }
      if (partial.timeUnknown === true) {
        next.hour = "";
        next.minute = "";
      }
      return next;
    });
  }

  function revalidate(nextValues: ConsultFormValues) {
    if (!submittedOnce) return;
    setErrors(validateConsultForm(nextValues));
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setSubmittedOnce(true);
    const nextErrors = validateConsultForm(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;
    setStep("confirm");
  }

  if (step === "confirm") {
    return (
      <div className="page-shell relative mx-auto flex min-h-dvh w-full max-w-md flex-col overflow-hidden">
        <div className="lattice-veil pointer-events-none absolute inset-0" aria-hidden />
        <main className="relative z-10 flex flex-1 flex-col px-5 pb-10 pt-8">
          <header className="mb-6 flex items-center gap-3">
            <BrandMark className="h-9 w-9 shrink-0" />
            <div>
              <p className="font-display text-xl leading-none text-ink">팔자언니</p>
              <p className="mt-1 text-xs text-ink-soft/65">테스트 확인</p>
            </div>
          </header>

          <p className="speech-line animate-rise-in mb-8 max-w-[19rem] px-4 py-3 font-bubble text-[1.05rem] font-bold leading-snug text-ink">
            {speech}
          </p>

          <section
            className="animate-rise-in rounded-2xl border border-gold/35 bg-gradient-to-br from-bubble via-blush-soft/40 to-bubble p-5 shadow-[0_16px_40px_rgba(59,29,82,0.08)]"
            style={{ animationDelay: "80ms" }}
          >
            <p className="text-[11px] font-medium tracking-[0.14em] text-deep-purple-soft/80 uppercase">
              입력 확인
            </p>
            <p className="mt-3 font-display text-2xl leading-snug text-ink">
              {address ? `${address}, 이렇게 맞나?` : "이렇게 맞나?"}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-ink-soft">
              {formatBirthSummary(values)}
            </p>
            <p className="mt-4 rounded-xl border border-dashed border-bubble-border bg-ivory/70 px-3 py-2.5 text-xs leading-relaxed text-ink-soft/80">
              아직 만세력·AI 분석은 안 붙였다. 개인정보는 서버에도 URL에도 안
              남기고, 이 화면에서만 보여준다.
            </p>
          </section>

          <div className="mt-auto flex flex-col gap-3 pt-10">
            <button
              type="button"
              onClick={goToFortuneSample}
              className="animate-cta-pulse w-full rounded-2xl bg-gradient-to-r from-wine-deep via-wine to-deep-purple px-4 py-3.5 text-sm font-bold text-ivory shadow-[0_14px_32px_rgba(92,20,40,0.35)] transition active:scale-[0.98]"
            >
              내 팔자 결과 보기 →
            </button>
            <button
              type="button"
              onClick={() => setStep("form")}
              className="w-full rounded-2xl border border-bubble-border bg-bubble px-4 py-3.5 text-sm font-medium text-wine transition active:scale-[0.98]"
            >
              다시 수정하기
            </button>
            <Link
              href="/"
              className="w-full rounded-2xl border border-transparent px-4 py-2.5 text-center text-sm font-medium text-ink-soft/70 transition active:scale-[0.98]"
            >
              홈으로 돌아가기
            </Link>
          </div>
        </main>
      </div>
    );
  }

  return (
    <div className="page-shell relative mx-auto flex min-h-dvh w-full max-w-md flex-col overflow-hidden">
      <div className="lattice-veil pointer-events-none absolute inset-0" aria-hidden />

      <main className="relative z-10 flex flex-1 flex-col px-5 pb-10 pt-7">
        <header className="mb-5 flex items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <BrandMark className="h-9 w-9 shrink-0" />
            <div>
              <p className="font-display text-xl leading-none text-ink">팔자언니</p>
              <p className="mt-1 text-xs text-ink-soft/65">상담 입력</p>
            </div>
          </div>
          <Link
            href="/"
            className="rounded-lg border border-bubble-border bg-bubble/70 px-2.5 py-1.5 text-xs font-medium text-wine transition active:scale-[0.98]"
          >
            홈
          </Link>
        </header>

        <p className="speech-line animate-rise-in mb-7 max-w-[19rem] px-4 py-3 font-bubble text-[1.05rem] font-bold leading-snug text-ink">
          {speech}
        </p>

        <form onSubmit={handleSubmit} className="flex flex-1 flex-col gap-6" noValidate>
          {/* Calendar */}
          <fieldset>
            <legend className="mb-2 text-sm font-semibold text-ink">양력 / 음력</legend>
            <div className="flex gap-2">
              <SegmentButton
                selected={values.calendar === "solar"}
                onClick={() => {
                  const next = { ...values, calendar: "solar" as const, isLeapMonth: false };
                  patch({ calendar: "solar", isLeapMonth: false });
                  revalidate(next);
                }}
              >
                양력
              </SegmentButton>
              <SegmentButton
                selected={values.calendar === "lunar"}
                onClick={() => {
                  const next = { ...values, calendar: "lunar" as const };
                  patch({ calendar: "lunar" });
                  revalidate(next);
                }}
              >
                음력
              </SegmentButton>
            </div>
            {values.calendar === "lunar" && (
              <label className="mt-3 flex cursor-pointer items-center gap-2.5 rounded-xl border border-deep-purple/15 bg-deep-purple/[0.04] px-3 py-2.5">
                <input
                  type="checkbox"
                  checked={values.isLeapMonth}
                  onChange={(e) => {
                    const next = { ...values, isLeapMonth: e.target.checked };
                    patch({ isLeapMonth: e.target.checked });
                    revalidate(next);
                  }}
                  className="h-4 w-4 accent-wine"
                />
                <span className="text-sm text-ink-soft">윤달이에요</span>
              </label>
            )}
          </fieldset>

          {/* Birth date */}
          <fieldset>
            <legend className="mb-2 text-sm font-semibold text-ink">생년월일</legend>
            <div className="flex gap-2">
              <NumberField
                id="birth-year"
                label="년"
                placeholder="1995"
                value={values.year}
                onChange={(year) => {
                  const next = { ...values, year };
                  patch({ year });
                  revalidate(next);
                }}
                error={errors.year}
              />
              <NumberField
                id="birth-month"
                label="월"
                placeholder="3"
                value={values.month}
                onChange={(month) => {
                  const next = { ...values, month };
                  patch({ month });
                  revalidate(next);
                }}
                error={errors.month}
              />
              <NumberField
                id="birth-day"
                label="일"
                placeholder="14"
                value={values.day}
                onChange={(day) => {
                  const next = { ...values, day };
                  patch({ day });
                  revalidate(next);
                }}
                error={errors.day}
              />
            </div>
            <FieldError message={errors.date} />
          </fieldset>

          {/* Birth time */}
          <fieldset>
            <legend className="mb-2 text-sm font-semibold text-ink">출생 시간</legend>
            <div className="flex gap-2">
              <NumberField
                id="birth-hour"
                label="시"
                placeholder="14"
                value={values.hour}
                disabled={values.timeUnknown}
                onChange={(hour) => {
                  const next = { ...values, hour };
                  patch({ hour });
                  revalidate(next);
                }}
                error={errors.hour}
              />
              <NumberField
                id="birth-minute"
                label="분"
                placeholder="30"
                value={values.minute}
                disabled={values.timeUnknown}
                onChange={(minute) => {
                  const next = { ...values, minute };
                  patch({ minute });
                  revalidate(next);
                }}
                error={errors.minute}
              />
            </div>
            <label className="mt-3 flex cursor-pointer items-center gap-2.5 rounded-xl border border-bubble-border bg-bubble/70 px-3 py-2.5">
              <input
                type="checkbox"
                checked={values.timeUnknown}
                onChange={(e) => {
                  const next = {
                    ...values,
                    timeUnknown: e.target.checked,
                    hour: e.target.checked ? "" : values.hour,
                    minute: e.target.checked ? "" : values.minute,
                  };
                  patch({ timeUnknown: e.target.checked });
                  revalidate(next);
                }}
                className="h-4 w-4 accent-wine"
              />
              <span className="text-sm text-ink-soft">시간 모름</span>
            </label>
            <FieldError message={errors.time} />
          </fieldset>

          {/* Gender */}
          <fieldset>
            <legend className="mb-2 text-sm font-semibold text-ink">성별</legend>
            <div className="flex gap-2">
              <SegmentButton
                selected={values.gender === "female"}
                onClick={() => {
                  const next = { ...values, gender: "female" as const };
                  patch({ gender: "female" });
                  revalidate(next);
                }}
              >
                여성 · 언니
              </SegmentButton>
              <SegmentButton
                selected={values.gender === "male"}
                onClick={() => {
                  const next = { ...values, gender: "male" as const };
                  patch({ gender: "male" });
                  revalidate(next);
                }}
              >
                남성 · 오빠
              </SegmentButton>
            </div>
            <FieldError message={errors.gender} />
          </fieldset>

          <div className="mt-auto pt-4">
            <button
              type="submit"
              className="animate-cta-pulse w-full rounded-2xl bg-gradient-to-r from-wine-deep via-wine to-deep-purple px-4 py-4 text-[0.95rem] font-bold tracking-wide text-ivory shadow-[0_14px_32px_rgba(92,20,40,0.35)] transition active:scale-[0.98]"
            >
              내 사주 분석 시작하기
            </button>
            <p className="mt-3 text-center text-[11px] leading-relaxed text-ink-soft/55">
              입력값은 이 기기 화면에서만 잠깐 쓰고, 서버·주소창에는 안 남긴다.
            </p>
          </div>
        </form>
      </main>
    </div>
  );
}
