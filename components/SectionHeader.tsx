export default function SectionHeader({
  title,
  subtitle,
  center = false
}: {
  title: string;
  subtitle?: string;
  center?: boolean;
}) {
  return (
    <div className={center ? "text-center" : ""}>
      <h2 className="h2">{title}</h2>
      {subtitle && (
        <p className={`mt-3 ${center ? "mx-auto max-w-2xl" : ""} muted`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
