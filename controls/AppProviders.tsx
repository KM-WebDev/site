import { BasicComponentProps } from "@/lib/types/global";
import BreakpointProvider from "../context/BreakpointProvider";
import NavigationProvider from "../context/NavigationProvider";
import { ThemeProvider } from "next-themes";

export default function AppProviders({ children }: BasicComponentProps) {
    return (
        <>
            <ThemeProvider defaultTheme="system" attribute="class">
                <BreakpointProvider>
                    <NavigationProvider>
                        <>{children}</>
                    </NavigationProvider>
                </BreakpointProvider>
            </ThemeProvider>
        </>
    );
}
