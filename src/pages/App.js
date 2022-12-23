import { useState } from "react";

import Button from "../components/Button";
import Input from "../components/Input";
import ItemRepo from "../components/ItemRepo";

import { Container } from "./styles";

import { api } from "../services/api";

function App() {
  const [currentRepo, setCurrentRepo] = useState("");
  const [repos, setRepos] = useState([]);

  // busca pelos repositórios
  const handleSearchRepo = async () => {
    const { data } = await api.get(`repos/${currentRepo}`);

    if (data.id) {
      const isExist = repos.find((repo) => repo === data.id);

      if (!isExist) {
        setRepos((prev) => [...prev, data]);
        setCurrentRepo("");
        return;
      }
    }
    alert("Repositório não encontrado");
  };

  const handleRemoveRepo = (id) => {
    // TODO
  }

  return (
    <Container>
      <img
        src="https://raw.githubusercontent.com/digitalinnovationone/trilha-react-desafio-2/master/src/assets/github.png"
        width={72}
        height={72}
        alt="github"
      />

      <Input
        value={currentRepo}
        onChange={(e) => setCurrentRepo(e.target.value)}
      />
      <Button onClick={handleSearchRepo} />
      {repos.map((repo) => (
        <ItemRepo repo={repo} handleRemoveRepo={handleRemoveRepo}/>
      ))}
    </Container>
  );
}

export default App;
