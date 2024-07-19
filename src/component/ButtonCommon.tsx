
interface ButtonProps {
  name: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement>)=> void | undefined
  onChange?: ()=> void | undefined
  onSubmit?: (e?: React.BaseSyntheticEvent) => Promise<void>; 
  type?: "submit" | "reset" | "button" | undefined;
  disabled?: boolean;
}


function ButtonCommon ({name, onClick,onSubmit,onChange,disabled, type}:ButtonProps) {


return (
  <button className='bg-gray-800' onClick={onClick} onSubmit={onSubmit} onChange={onChange} type={type} disabled={disabled}>{name}</button>

)




}

export default ButtonCommon;