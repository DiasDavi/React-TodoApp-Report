import * as C from './styled';
import { Item } from '../../types/Item';
import { useState } from 'react';

type props = {
  item: Item;
};

export const ListItem = ({ item }: props) => {
  const [isChecked, setIsChecked] = useState(item.done);
  return (
    <C.Container done={isChecked}>
      <input
        type="checkbox"
        checked={isChecked}
        onChange={(e) => {
          setIsChecked(e.target.checked);
        }}
      />
      <label>{item.name}</label>
    </C.Container>
  );
};
