import { useState } from 'react';
import * as C from './App.styles';
import { Item } from './types/Item';
import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea';

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'comprar pão', done: false },
  ]);

  const handleAddTask = (taskName: string) =>{
    let newList = [...list]
    newList.push({
      id: list.length + 1,
      name:taskName,
      done:false
    })
    setList(newList)
  }

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de tarefas</C.Header>

        <AddArea onEnter={handleAddTask} />

        {list.map((item, i) => (
          <ListItem key={i} item={item} />
        ))}
      </C.Area>
    </C.Container>
  );
};

export default App;
