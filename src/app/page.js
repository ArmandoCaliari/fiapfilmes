import CardFilme from "@/components/CardFilme";
import Title from "@/components/Title";

async function carregarFilmes(){
  const url = "https://api.themoviedb.org/3/trending/movie/week?api_key=1e922667481ab207d642450b0efb461e&language=pt-br"
  const resposta = await fetch(url)
  const json = await resposta.json() // transformamos nossa resposta em json, porém vai voltar a ficar promise por isso vamos colocar o await
  return json.results
// fetch faz uma requisiçãode qualquer tipo por padrão é get]

/*a função fetch retorna uma promessa de que uma hora os dados( da API) estarão ali. Assim o servidor não 
tem que "parar" para carregar os dados */ 

/* Por isso vamo colocar um await(espere), porém a função await só funciona com funções assincronas por 
isso colocamos o async*/
}


export default async function Home() {
  const filmes = await carregarFilmes()

  return (
    /*<> é a tag fragment só pra nao */
    <>
      <nav className="p-4 bg-slate-900">
        <ul>
          <li>
            <h1 className="">Fiap Filmes</h1>
          </li>
        </ul>
        <ul>
          <li>
            <a href="">filmes</a>
          </li>
        </ul>
        <ul>
          <li>
            <a href="">filmes</a>
          </li>
        </ul>
        
      </nav>
      <Title>em alta</Title>


      <section className="flex flex-wrap">
        {filmes.map(filme => <CardFilme filme={filme}/> )}
      </section>
      {/* <section className="flex flex-wrap">
        {filmes.map((filme) => {
          return <CardFilme filme={filme}/>
        })}
      </section> */}
      <Title>lançamentos</Title>
      <Title>favoritos</Title>
      
    </>
  )
}

// Ele usou o heroicons
// ele falou pra usar object fit para a imagem do cachorro
// a API dele é themoviedb
// A minha éa thedog api
// 