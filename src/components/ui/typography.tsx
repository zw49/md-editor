export function TypographyH1({ children }: { children: React.ReactNode }) {
  return (
    <h1 className="scroll-m-20 pt-2 pb-0 text-4xl font-extrabold tracking-tight text-balance first:mt-0 mt-4 mb-4">
      {children}
    </h1>
  );
}

export function TypographyH2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="scroll-m-20 border-b pb-2 pt-2 text-3xl font-semibold tracking-tight first:mt-0 mt-2 mb-2">
      {children}
    </h2>
  );
}

export function TypographyH3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-2 mb-2">
      {children}
    </h3>
  );
}

export function TypographyH4({ children }: { children: React.ReactNode }) {
  return (
    <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-2 mb-2">
      {children}
    </h4>
  );
}

export function TypographyBlockquote({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <blockquote className="mt-6 border-l-2 pl-6 italic">{children}</blockquote>
  );
}

export function TypographyP({ children }: { children: React.ReactNode }) {
  return <p className="leading-7">{children}</p>;
}

export function TypographyInlineCode({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <code className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
      {children}
    </code>
  );
}

export function TypographyTH({ children }: { children: React.ReactNode }) {
  return (
    <th className="border px-4 py-2 text-left font-bold [&[align=center]]:text-center [&[align=right]]:text-right">
      {children}
    </th>
  );
}

export function TypographyTR({ children }: { children: React.ReactNode }) {
  return <tr className="even:bg-muted m-0 border-t p-0">{children}</tr>;
}

export function TypographyTD({ children }: { children: React.ReactNode }) {
  return (
    <td className="border px-4 py-2 text-left [&[align=center]]:text-center [&[align=right]]:text-right">
      {children}
    </td>
  );
}

export function TypographyUL({ children }: { children: React.ReactNode }) {
  return <ul className="my-6 ml-6 list-disc [&>li]:mt-2">{children}</ul>;
}
