import { useState } from "react"


const useInput = (initialValue:string) => {
    const [input,onChangeInput] = useState(initialValue);

    
    const inputProps = {
        value : input,
        onChangeText : onChangeInput
    }

    return inputProps;
}

export default useInput;