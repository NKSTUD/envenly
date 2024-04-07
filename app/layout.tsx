import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.css";
import {Poppins} from "next/font/google";
import React from "react";
import {ClerkProvider} from '@clerk/nextjs'

const poppins = Poppins({
    subsets: ["latin"],
    weight: ['400', '500', '600', '700'],
    variable: '--font-poppins'

});

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
        <ClerkProvider>
            <html lang="en">
            <body className={poppins.variable}>{children}</body>
            </html>
        </ClerkProvider>
    );
}