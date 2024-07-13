import React from "react";

interface Note {
  note: string;
}

const noteList: Note[] = [
  {
    note: "New subscribers only. $9.99/month after free trial. Plan automatically renews until cancelled. Terms apply.",
  },
  {
    note: "Compatible hardware and software required. Not all content available in Dolby Atmos.",
  },
  {
    note: "New subscribers only. $10.99/month after free trial. Plan automatically renews until cancelled. Terms apply.",
  },
  {
    note: "New subscribers only. $6.99/month after free trial. Plan automatically renews until cancelled. Terms apply.",
  },
  {
    note: "Apple Fitness+ requires iPhone 8 or later or Apple Watch Series 3 or later paired with iPhone 6s or later. New subscribers only. $9.99/month after trial. Plan automatically renews until cancelled. Terms apply.",
  },
  {
    note: "New subscribers only. $12.99/month after free trial. Plan automatically renews until cancelled. Terms apply.",
  },
  {
    note: "The Apple One free trial includes only services that you are not currently using through a free trial or a subscription. Plan automatically renews after trial until cancelled. Restrictions and other terms apply.",
  },
];

const FooterNotes = () => {
  return (
    <div className="pt-5 pb-2.5">
      <ul className="text-xs leading-[18px] tracking-wider text-light-gray flex flex-col gap-2">
        {noteList.map((_, id) => (
          <li key={id}>
            <p>
              {id + 1}. {_.note}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterNotes;
