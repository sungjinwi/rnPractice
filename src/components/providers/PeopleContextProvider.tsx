import {peopleDummy} from '../../assets';
import {PeopleContext} from '../../contexts';
import {useManagePeople} from '../../hooks';

const PeopleContextProvider = ({children}: {children: JSX.Element}) => {
  const managePeople = useManagePeople(peopleDummy);

  return (
    <PeopleContext.Provider value={managePeople}>
      {children}
    </PeopleContext.Provider>
  );
};

export default PeopleContextProvider;
