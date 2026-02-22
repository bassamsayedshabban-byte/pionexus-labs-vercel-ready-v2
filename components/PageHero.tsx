import LogoMark from "@/components/LogoMark";

export default function PageHero({
  title,
  subtitle
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="card p-7 sm:p-8">
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
        <LogoMark />
        <div className="text-left sm:text-right">
          <div className="text-2xl font-bold">{title}</div>
          {subtitle && <p className="mt-1 text-sm text-slate-300/90">{subtitle}</p>}
        </div>
      </div>
    </div>
  );
}
