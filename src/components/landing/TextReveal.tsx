import CursorHoverMask from "../ui/CursorHoverMask";
import Scene from "../ui/Scene";


export default function TextReveal() {
    return (
        <main className="flex w-full h-screen items-center justify-center">
            <CursorHoverMask />
            <Scene />
        </main>
    );
}
