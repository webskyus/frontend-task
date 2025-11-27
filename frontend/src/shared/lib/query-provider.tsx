"use client";

import React from "react";
import {QueryClientProvider} from "@tanstack/react-query";
import {queryClient as baseClient} from "./query-client";

interface Props {
    children: React.ReactNode;
};

const ReactQueryProvider: React.FC<Props> = ({children}) => {
    const [client] = React.useState(baseClient)

    return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
}

export default ReactQueryProvider;
