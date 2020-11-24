import React from "react";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import TextField from "@material-ui/core/TextField";
import "./App.css";

export default function App() {
  const [resultado, defineResultado] = React.useState("");
  const [nome, defineNome] = React.useState("Pedro Silva");
  const [menos25, defineMenos25] = React.useState(true);
  const [trabalhando, defineTrabalhando] = React.useState(false);
  const [filhos, defineFilhos] = React.useState(false);

  const primeiroNome = () => {
    return nome.split(" ")[0];
  };

  const descricaoMenos25 = () => {
    return menos25 ? `` : `não`;
  };

  const descricaoTrabalhando = () => {
    return trabalhando
      ? `felizmente está trabalhando`
      : `infelizmente está desempregado`;
  };

  const descricaoFilhos = () => {
    return filhos
      ? `precisa cuidar dos filhos`
      : `não precisa cuidar dos filhos`;
  };

  React.useEffect(() => {
    defineResultado(
      `${primeiroNome()} ${descricaoMenos25()} é jovem, ${descricaoTrabalhando()} e ${descricaoFilhos()}.`
    );
  }, [nome, menos25, trabalhando, filhos]);

  return (
    <div>
      <section>
        <TextField
          style={{ width: "100%" }}
          label="Nome"
          value={nome}
          onChange={(event) => defineNome(event.target.value)}
        />
      </section>
      <section>
        <FormControlLabel
          control={
            <Checkbox
              checked={menos25}
              onChange={(event) => defineMenos25(event.target.checked)}
            />
          }
          label="Menos de 25 anos"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={trabalhando}
              onChange={(event) => defineTrabalhando(event.target.checked)}
            />
          }
          label="Trabalhando"
        />
        <FormControlLabel
          control={
            <Checkbox
              checked={filhos}
              onChange={(event) => defineFilhos(event.target.checked)}
            />
          }
          label="Tem filhos"
        />
      </section>
      <section>{resultado}</section>
    </div>
  );
}
