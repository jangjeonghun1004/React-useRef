import { useRef } from "react";


function Focus() {
    const focusRef = useRef<HTMLInputElement | null>(null); // Ref 타입 명시

    const handleFocus = () => {
        console.log(focusRef.current);
        if (focusRef.current) { // null 체크
            focusRef.current.focus();
        }
    }

    return (
        <div>
            <input type="text" ref={focusRef} />
            <button onClick={handleFocus}>Focus Input</button>
        </div>
    );
}

export default Focus