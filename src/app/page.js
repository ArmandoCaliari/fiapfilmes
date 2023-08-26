import Title from "@/components/Title";

export default function Home() {
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

      <div id="card" className="flex flex-col w-40 justify-center items-center m-2">
        <img className="rounded" src="https://place-hold.it/150x220/600/fff" alt="" />
        <span className="font-bold text-center line-clamp-1" >Titulo do filme do card</span>
        <div>
          <span>6.0</span>
        </div>
        <a href="" className="bg-pink-600 py-2 w-full rounded text-center">Detalhes</a>
      </div>
      <Title>lançamentos</Title>
      <Title>favoritos</Title>
      
    </>
  )
}