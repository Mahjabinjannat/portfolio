import { offScreen, offScreenHeading } from "@/content";
import SectionHead from "./SectionHead";

export default function OffScreen() {
  return (
    <section aria-labelledby="off-screen-heading" className="border-t border-line py-[72px]">
      <SectionHead id="off-screen-heading" title={offScreenHeading} />
      <div className="grid gap-8 min-[800px]:ml-[300px] min-[800px]:grid-cols-2">
        {offScreen.map((item) => (
          <div key={item.title}>
            <h3 className="mb-2 font-serif text-[1.35rem] font-normal">{item.title}</h3>
            <p className="max-w-[40ch] text-muted">{item.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
