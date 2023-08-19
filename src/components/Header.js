export default function  Header({onDarkModeClick}){
    
   return  <header>
        <h2>Shopster</h2>
        <button  onClick={onDarkModeClick}>
          Light Mode
        </button>
      </header>
}