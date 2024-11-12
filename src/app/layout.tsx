import type {Metadata} from "next";
import "./globals.css";
import HeaderComponent from "@/components/HeaderComponent";

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
        <body>
        <HeaderComponent/>
        <main>{children}</main>
        </body>
        </html>
    );
}
