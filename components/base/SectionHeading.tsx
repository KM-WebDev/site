interface SectionHeadingProps {
    heading: string;
    text?: string;
    number: string;
}

export default function SectionHeading({ heading, text }: SectionHeadingProps) {
    return (
        <div className="flex flex-col gap-6 md:justify-center">
            <div className="flex items-center gap-2 md:justify-center">
                <h2 className="text-clr-brand-red text-base/7 font-semibold md:text-center">
                    {heading}
                </h2>
            </div>
            <p className="text-clr-brand-red max-w-2xl text-4xl leading-tight font-medium tracking-tight text-balance sm:text-5xl md:mx-auto md:text-center">
                {text}
            </p>
        </div>
    );
}
