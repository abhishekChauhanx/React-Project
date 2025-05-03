import { createContext, useState } from "react";

import generateContent from "../config/gemini";

export const Context = createContext()
const ContextProvider = ({ children }) => {
    const [input, setInput]  useState("")
    const [recentPro, setRecentPro] = useState("")
    const [prevPro, setPrevPro] = useState([])
    const [showResult, setShowResult] = useState(false)
    const [loading, setLoading] = useState(false)
    const [resultData, setResultData] = useState("")
    const onSent = async (prompt) => {
        await generateContent(prompt)
    }


    const constextValue = {
prevPro , 
    }
    return (
        <ContextProvider value={constextValue}>
            {children}
        </ContextProvider>
    )
}

export default ContextProvider