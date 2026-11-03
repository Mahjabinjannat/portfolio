type Props = { id: string; title: string; intro?: string };

export default function SectionHead({ id, title, intro }: Props) {
  return (
    <div className="mb-10 grid gap-2 min-[800px]:grid-cols-[260px_1fr] min-[800px]:gap-10">
      <h2 id={id} className="font-serif text-[2rem] leading-[1.15] font-normal">
        {title}
      </h2>
      {intro && <p className="max-w-[60ch] text-muted">{intro}</p>}
    </div>
  );
}
