"use client"
import React from 'react'

interface primaryBtnProps {
    text: string;
    customClass?: string;
    onClickFunction?: () => void;
}
const PrimaryButton: React.FC<primaryBtnProps> = ({ text, customClass, onClickFunction }) => {
    return (
        <button className={`py-2 px-4 bg-[#ff6464] text-white ${customClass}`} onClick={onClickFunction}>{text}</button>
    )
}

export default PrimaryButton