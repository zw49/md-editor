export function TypographyH1({ children }: { children: React.ReactNode }) {
    return (
        <h1 className="scroll-m-20 pt-2 pb-0 text-4xl font-extrabold tracking-tight text-balance first:mt-0 mt-4 mb-4">
            {children}
        </h1>
    )
}

export function TypographyH2({ children }: { children: React.ReactNode }) {
    return (
        <h2 className="scroll-m-20 border-b pb-2 pt-2 text-3xl font-semibold tracking-tight first:mt-0 mt-2 mb-2">
            {children}
        </h2>
    )
}

export function TypographyH3({ children }: { children: React.ReactNode }) {
    return (
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight mt-2 mb-2">
            {children}
        </h3>
    )
}

export function TypographyH4({ children }: { children: React.ReactNode }) {
    return (
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight mt-2 mb-2">
            {children}
        </h4>
    )
}


export function TypographyBlockquote({ children }: { children: React.ReactNode }) {
    return (
        <blockquote className="mt-6 border-l-2 pl-6 italic">
            {children}
        </blockquote>
    )
}

export function TypographyP({ children }: { children: React.ReactNode }) {
    return (
        <p className="leading-7">
            {children}
        </p>
    )
}

export function TypographyInlineCode({ children }: { children: React.ReactNode }) {
    return (
        <code className="bg-muted relative rounded px-[0.3rem] py-[0.2rem] font-mono text-sm font-semibold">
            {children}
        </code>
    )
}
