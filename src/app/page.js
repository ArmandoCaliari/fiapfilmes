import CardFilme from "@/components/CardFilme";
import Title from "@/components/Title";

export default function Home() {

  const filmes = [
    {
      titulo: "Megatubarão 2",
      nota: 7.3,
      poster: "https://www.themoviedb.org/t/p/w220_and_h330_face/8tBhAn6qVRQzf5yvEcxjgPMgTkw.jpg"
    },
    {
      titulo: "Barbbie",
      nota: 2.1,
      poster: "https://www.themoviedb.org/t/p/w220_and_h330_face/yRRuLt7sMBEQkHsd1S3KaaofZn7.jpg"
    }
  ]

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