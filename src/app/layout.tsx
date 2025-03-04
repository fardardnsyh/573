import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import AuthProvider from "@/context/AuthProvider";
import { Toaster } from "@/components/ui/toaster";
import { Analytics } from "@vercel/analytics/react"
const poppins = Poppins({
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    subsets: ["latin"]
});


export const metadata: Metadata = {
    title: "AskAway",
    description: "AskAway is a web application where users can ask questions to others without revealing their identity.",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <AuthProvider>
                <body className={poppins.className}>
                    {children}
                    <Toaster />
                </body>
                <Analytics />
            </AuthProvider>
        </html>
    );
}
