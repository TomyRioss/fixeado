interface TrustItem {
  title: string;
  description: string;
}

interface TrustRowProps {
  items: TrustItem[];
}

export function TrustRow({ items }: TrustRowProps) {
  return (
    <dl className="grid w-full grid-cols-1 gap-3 sm:grid-cols-3">
      {items.map((item) => (
        <div
          key={item.title}
          className="rounded-lg border border-primary/10 bg-surface px-4 py-3"
        >
          <dt className="text-sm font-semibold text-primary">{item.title}</dt>
          <dd className="mt-1 text-sm leading-6 text-muted">{item.description}</dd>
        </div>
      ))}
    </dl>
  );
}
