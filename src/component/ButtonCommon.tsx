
interface ButtonProps {
  name: string
  onClick?: (e: React.MouseEvent<HTMLButtonElement>)=> void | undefined
  onChange?: ()=> void | undefined
  onSubmit?: (e: React.FormEvent<HTMLFormElement>)=> void | undefined
  type?: "submit" | "reset" | "button" | undefined;
}


function ButtonCommon ({name, onClick,onSubmit,onChange, type}:ButtonProps) {


return (
  <button className='bg-gray-800' onClick={onClick} onSubmit={onSubmit} onChange={onChange} type={type}>{name}</button>

)




}

export default ButtonCommon;