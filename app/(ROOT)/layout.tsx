import React from "react";


export default function({children}: {children: React.ReactNode}) {

    return <div>
        Sidebar here
        {children}
    </div>
}