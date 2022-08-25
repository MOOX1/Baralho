type deck = {
  deck_id: String | undefined;
  success: Boolean | undefined;
  shuffled: Boolean | undefined;
  remaining: Number | undefined;
  OnChange: any;
  name: string;
};

const Form = (props: deck) => {
  return (
    <div className="container">
      <div className="div-main">
        <h1 className="titulo-home"> Bem Vindo </h1>
        <input
          onChange={props.OnChange}
          placeholder="Escreva seu nome"
          className="input-home"
          type="text"
        />
        <a
          href={"/list/" + props.deck_id + "/" + props.name}
          className="button-carts"
        >
          CARTAS
        </a>
      </div>
    </div>
  );
};

export default Form;
