import React, { createContext, useState } from 'react'

export type GlobalStateContextType = {
    headerState: any
    setHeaderState: any
    mobileHeaderOpen: any
    setMobileHeaderOpen: any
}

const GlobalStateContext = createContext<GlobalStateContextType | null>(null)

//전역에서 쓰일 static한 애들 저장. 고정되어있고, 새로고침시에만 다시 받아올 애들.
export const GlobalStateProvider = ({
    children,
}: {
    children: React.ReactNode
}) => {
    const [headerState, setHeaderState] = useState(0)
    const [mobileHeaderOpen, setMobileHeaderOpen] = useState(false)

    return (
        <GlobalStateContext.Provider
            value={{
                headerState,
                setHeaderState,
                mobileHeaderOpen,
                setMobileHeaderOpen,
            }}
        >
            {children}
        </GlobalStateContext.Provider>
    )
}

export default GlobalStateContext
