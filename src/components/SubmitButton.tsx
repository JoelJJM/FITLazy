import React from "react";
import clsx from "clsx";
import Link from "next/link";

interface Props {
  text: string;
  light?: boolean;
  link: string;
}

export default function SubmitButton(props: Props) {
  const { text, light, link } = props;

  return (
    <Link href={link}>
      <button
        className={clsx(
          "font-semibold rounded-full p-4 text-xl active:opacity-75",
          light
            ? " border-2 border-black bg-white text-black hover:bg-black hover:text-white"
            : " bg-black text-white hover:border-2 hover:border-black hover:bg-white hover:text-black"
        )}
      >
        {text}
      </button>
    </Link>
  );
}
