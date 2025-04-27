import { HoverBorderGradientImport } from "./hover-border-gradient";

export default function HoverBorderGradient() {
    return (
        <div className=" flex justify-center text-center">
            <HoverBorderGradientImport
                containerClassName="rounded-full"
                as="button"
                className="dark:bg-black bg-white text-black dark:text-white flex items-center space-x-2"
            >
                <span className="flex gap-x-1">
                    Timeline Log of my journey
                </span>
            </HoverBorderGradientImport>
        </div>
    )
}