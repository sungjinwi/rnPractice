import { useState } from "react";

const useManageList = (initialValue : any[])=> {

    const [list, setList] = useState(initialValue);
    const [idx, setIdx] = useState(initialValue.length);

    const addItem = (item:object)=> {
        setList([...list, {...item, idx:idx}]);
        setIdx(idx+1);

        console.log(`${JSON.stringify(item)} added to list`);
    }

    const removeItem = (idx:number)=> {
        const newList = list.filter((item)=> item.idx !== idx);
        setList(newList);

        console.log(`idx ${idx} removed from list`);
    }

    return {
        list,
        addItem,
        removeItem,
    }
}

export default useManageList;