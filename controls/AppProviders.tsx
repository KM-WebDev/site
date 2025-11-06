import { BasicComponentProps } from "@/lib/types/global";
import BreakpointProvider from "../context/BreakpointProvider";
import NavigationProvider from "../context/NavigationProvider";

export default function AppProviders({ children }: BasicComponentProps) {
    return (
        <>
            <BreakpointProvider>
                <NavigationProvider>
                    <>{children}</>
                </NavigationProvider>
            </BreakpointProvider>
        </>
    );
}
