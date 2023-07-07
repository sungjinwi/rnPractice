import useInput from "./useInput";
import useManageList from "./useManageList";

interface PersonProps {
    name: string;
    age: number;
    idx: number;
}


const useManagePeople = (initialValue: PersonProps[]) => {
    const nameProps = useInput('');
    const ageProps = useInput('');

    const {value:name} = nameProps;
    const {value:stringAge} = ageProps;
    const age = Number(stringAge);

    const managePeople = useManageList<PersonProps>(initialValue);

    const { list:people ,addItem, removeItem: removePerson } = managePeople;


    return {
        nameProps,
        ageProps,
        people,
        // 일단 dummy로 idx:0 추가해서 기능되게 구현
        addPerson:()=>{addItem({name, age,idx:0})},
        removePerson
    }
}

export default useManagePeople;