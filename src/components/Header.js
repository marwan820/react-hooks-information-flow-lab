export default function  Header({onDarkModeClick,isDarkMode}){
    
    <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
          {isDarkMode ? "Dark" : "Light"}
        </button>
      </header>
}