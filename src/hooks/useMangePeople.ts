import useInput from "./useInput";
import useManageList from "./useManageList";


const useManagePeople = (initialValue: any[]) => {
    const nameProps = useInput('');
    const ageProps = useInput('');

    const {value:name} = nameProps;
    const {value:age} = ageProps;

    const managePeople = useManageList(initialValue);

    const { list:people ,addItem, removeItem: removePerson } = managePeople;


    return {
        nameProps,
        ageProps,
        people,
        addPerson:()=>{addItem({name,age})},
        removePerson
    }
}

export default useManagePeople;