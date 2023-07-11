import {createContext} from 'react';

// 타입에 맞게 초기값 세팅
const PeopleContext = createContext({
  nameProps: {value: '', onChangeText: (initialValue: string) => {}},
  ageProps: {value: '', onChangeText: (initialValue: string) => {}},
  people: [{name: '', age: 0, idx: 0}],
  addPerson: () => {},
  removePerson: (idx: number) => {},
});

export default PeopleContext;
