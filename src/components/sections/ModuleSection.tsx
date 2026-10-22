import React from "react";
import Image from "next/image";

export interface ModuleSectionProps {
  id: string;
  index: string;
  title: string;
  lead: string;
  points: string[];
  imageSrc: string;
  imageAlt: string;
  imageCaptionLeft: string;
  imageCaptionRight: string;
  visualComponent: React.ReactNode;
  isReverse?: boolean;
}

export function ModuleSection({
  id,
  index,
  title,
  lead,
  points,
  imageSrc,
  imageAlt,
  imageCaptionLeft,
  imageCaptionRight,
  visualComponent,
  isReverse = false,
}: ModuleSectionProps) {
  const photoCard = (
    <div className="illu-card">
      <Image
        src={imageSrc}
        alt={imageAlt}
        width={1600}
        height={1067}
        className="w-full h-auto rounded-[12px] object-cover"
      />
      <div className="illu-cap">
        <span>{imageCaptionLeft}</span>
        <span>{imageCaptionRight}</span>
      </div>
    </div>
  );

  return (
    <section className="section py-12 md:py-20" id={id} data-od-id={`module-${id}`}>
      <div className="container-app">
        {/* Module Header */}
        <div className="grid grid-cols-1 md:grid-cols-[56px_minmax(0,1fr)_262px] gap-5 md:gap-11 items-start mb-7 md:mb-11">
          <span className="font-mono text-xs tracking-widest text-muted pt-2.5 border-t border-border hidden md:block">
            {index}
          </span>
          <div>
            <h2 className="max-w-[30ch] mb-3.5 text-fg">{title}</h2>
            <p className="lead text-[15.5px] max-w-[62ch]">{lead}</p>
          </div>
          <ul className="list-none m-0 p-0 flex flex-col gap-2.5 text-[13px] text-muted leading-relaxed">
            {points.map((pt, i) => (
              <li key={i} className="relative pl-4.5">
                <span
                  className="absolute left-0 top-[7px] w-1.5 h-1.5 bg-indigo border border-[color-mix(in_oklch,var(--accent)_55%,transparent)] rounded-[1.5px] rotate-45"
                  aria-hidden="true"
                />
                {pt}
              </li>
            ))}
          </ul>
        </div>

        {/* Module Body: Alternating Photo & Data Card */}
        <div
          className={`grid grid-cols-1 md:grid-cols-[0.94fr_1.06fr] gap-5.5 items-start ${
            isReverse ? "md:grid-cols-[1.06fr_0.94fr]" : ""
          }`}
        >
          {isReverse ? (
            <>
              {visualComponent}
              {photoCard}
            </>
          ) : (
            <>
              {photoCard}
              {visualComponent}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
