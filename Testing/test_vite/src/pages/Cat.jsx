function AlertButton({ message, children }) {
  return (
    <button onClick={() => alert(message)}>
      {children}
    </button>
  );
}


const Cat = () => {
  return(
    <div>
    <h1>Cat</h1>
    <AlertButton 
      message={"Meow!"}
      children={"meow"}
    ></AlertButton>
</div>
  )

  };
  
  export default Cat;