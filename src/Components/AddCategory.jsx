import { useState } from 'react'

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState()

    const onInputChange = ({target}) => {
        setInputValue(target.value);

        }

    const onSubmitChange = (event)=>{
        event.preventDefault();
        if(inputValue.trim().length <= 1) return; 
         
        setInputValue('')  
        onNewCategory(inputValue);
      }

  return (
    <form onSubmit={onSubmitChange}>
        <input type="text" placeholder="Buscar Gifs"  value={inputValue} onChange={onInputChange} />

    </form>
  )
}
