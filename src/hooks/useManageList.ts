import { useState } from "react";

const useManageList = <T extends {idx:number}>(initialValue : T[])=> {
// const useManageList = (initialValue : any[])=> {

    const [list, setList] = useState(initialValue);
    const [idx, setIdx] = useState(initialValue.length);

    // item의 interface는 주어지는 generic type T에서 idx를 제외한 나머지를 가지고 있어야 한다.
    // utility type Omit을 이용해 분리하려 했으나 되지 않았다.
    // T를 idx와 분리한 후 다시 합치려 했으나 특정할 수 없어 안되는 것 같다.
    // type ItemPreview = Omit<T, 'idx'>


    // const addItem = (item:ItemPreview)=> {
    const addItem = (item:T)=> {
        setList([...list, {...item, idx}]);
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