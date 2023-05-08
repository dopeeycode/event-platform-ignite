
export default function Welcome () {
  return (
    <div className="flex flex-1 items-center p-20 flex-col">
      <h3 className="text-5xl font-extrabold text-transparent bg-clip-text 
      bg-gradient-to-r from-white to-gray-600 max-[708px]:text-center">
        Bem vindo ao
      </h3>
      <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-r 
        from-green-400 text-5xl to-green-700 border-l-2 border-r-2 border-green-500 ml-2 p-2 rounded-xl
        max-[700px]:block max-[700px]:text-[3rem] max-[700px]:border-none max-[700]:items-center
        ">
          Ignite Lab.
      </span>
      <p className="mt-10 text-gray-200 text-center text-xl">
        Comece a evolução selecionando alguma aula ao lado!
        Lembrando que esse projeto é apenas um clone da plataforma de ensino da Rocketseat, ou seja, não se trata do evento de programação com aulas da Rocketseat.
      </p>
    </div>
  )
}
