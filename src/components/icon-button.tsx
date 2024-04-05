import { ComponentProps } from "react";

interface IconButton extends ComponentProps<"button"> { }
export function IconButton(props: IconButton) {
    return (
        <button{...props} className="bg-white/10 border border/white/10 rounded-md p-1.5" />
    )
}