import Logo from "../components/Logo";
import codeMockupIMG from '../assets/code-mockup.png'

export default function Subscribe() {
  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex items-center justify-between mt-20 mx-auto">
        <div className="max-w-[640px]">
          <Logo />

          <h1 className="mt-8 text-[2.5rem] leading-tight">
            Construa uma <strong className="text-blue-500">aplicação completa</strong>, 
            do zero, com <strong className="text-blue-500">React JS</strong>
          </h1>
          <p className="mt-4 text-gray-200 leading-relaxed">
            Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas
            e com alta demanda para acessar as melhores oportunidades do mercado.
          </p>
        </div>

        <div className="p-8 bg-gray-700 border border-gray-500 rounded">
          <strong className="text-2xl mb-6 block">Inscreva-se gratuitamente</strong>
          
          <form className="w-full flex flex-col gap-2">
            <input
              className="bg-gray-900 rounded px-5 h-14 " 
              type="text" 
              placeholder="Seu nome completo" 
            />
            <input
              className="bg-gray-900 rounded px-5 h-14 " 
              type="text" 
              placeholder="Digite seu e-mail" 
            />

            <button 
              type="submit"
              className="mt-4 bg-green-500 uppercase py-4 font-bold rounded text-sm hover:bg-green-700 transition-colors"
            >
              Garantir minha vaga
            </button>
          </form>
        </div>
      </div>

      <img src={codeMockupIMG} className="mt-10" alt="" />
    </div>
  )
}
