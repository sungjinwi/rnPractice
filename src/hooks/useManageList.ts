import { useState } from "react";

const useManageList = ((initialValue : any[])=> {

    const [list, setList] = useState(initialValue);
    const [idx, setIdx] = useState(initialValue.length);

    const addItem = (item:object)=> {
        setList([...list, {...item, idx:idx}]);
        setIdx(idx+1);
    }

    const removeItem = (idx:number)=> {
        const newList = [...list];
        newList.filter((item)=> item.idx !== idx);
    }

    return {
        addItem,
        removeItem
    }
})

export default useManageList;