const Simpsons = ({name, surname, img}) => {
  return (
      <div>

          <h1>{name}</h1>
          <h1>{surname}</h1>
          <img src={img} alt={name}/>

      </div>
  );
};

export {Simpsons};