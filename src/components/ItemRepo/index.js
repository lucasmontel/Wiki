import { ItemContainer } from "./sytles";

export default function ItemRepo({ repo, handleRemoveRepo }) {
  const handleRemove = () => {
    handleRemoveRepo(repo.id)

    // utilizar o filter
  }

  return (
    <ItemContainer onClick={handleRemove}>
      <h3>{repo.name}</h3>
      <p>{repo.full_name}</p>

      <div className="buttons">
        <a
          href={repo.html_url}
          rel={"noreferrer"}
          target={"_blank"}
        >
          Ver repositório
        </a>
        <a href="" className="remove" target={"_blank"}>
          Remover
        </a>
      </div>
      <hr />
    </ItemContainer>
  );
}
