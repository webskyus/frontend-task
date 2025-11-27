import React from 'react';
import type {Metadata} from 'next';
import {Inter} from 'next/font/google';
import './globals.css';
import ReactQueryProvider from '@/shared/lib/query-provider';
import {cn} from '@shared/lib/utils';

const inter = Inter({
    subsets: ['latin'],
    variable: '--font-inter',
});

export const metadata: Metadata = {
    title: "Kyra Asset Studio - Assets",
    description: "Browse and manage all creator assets in one place.",
};

interface Props {
    children: React.ReactNode;
}

const RootLayout: React.FC<Props> = ({children}) => {
    return (
        <html lang='en' className={cn([inter.variable, 'antialiased dark'])}>
        <head>
            <meta
                name='viewport'
                content='width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, viewport-fit=cover'
            />
        </head>
        <body>
            <ReactQueryProvider>{children}</ReactQueryProvider>
        </body>
        </html>
    );
};

export default RootLayout;
