import { useId, useState } from "react";
import { ChevronDown } from "lucide-react";
import type { FaqItem } from "../../data/faqs";
import { cn } from "../../lib/cn";

function Item({ item, index }: { item: FaqItem; index: number }) {
  const [open, setOpen] = useState(index === 0);
  const panelId = useId();
  const buttonId = useId();

  return (
    <div className="border-b border-line">
      <h3>
        <button
          id={buttonId}
          type="button"
          className="flex w-full items-center justify-between gap-4 py-5 text-left"
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((value) => !value)}
        >
          <span className="font-heading text-base font-semibold text-navy sm:text-lg">
            {item.question}
          </span>
          <ChevronDown
            className={cn(
              "size-5 shrink-0 text-accent transition-transform duration-200",
              open && "rotate-180",
            )}
            aria-hidden="true"
          />
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={buttonId}
        hidden={!open}
        className="pb-5 text-[0.95rem] leading-7 text-ink"
      >
        {item.answer}
      </div>
    </div>
  );
}

export function FAQ({ items }: { items: FaqItem[] }) {
  return (
    <div>
      {items.map((item, index) => (
        <Item key={item.question} item={item} index={index} />
      ))}
    </div>
  );
}
