import { createContext, useState, type ReactNode } from "react";

export type PopupStateContextType = {
    isOpen: boolean;
    setOpen: (state: boolean) => void;
};

export const PopupStateContext = createContext<
    PopupStateContextType | undefined
>(undefined);

export default function PopupStateProvider({
    children,
}: {
    children: ReactNode;
}) {
    const [isOpen, setOpen] = useState<boolean>(false);

    return (
        <PopupStateContext.Provider value={{ isOpen, setOpen }}>
            {children}
        </PopupStateContext.Provider>
    );
}
