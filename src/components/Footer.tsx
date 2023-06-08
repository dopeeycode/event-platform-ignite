import RocketseatLogo from "./RocketseatLogo";

export default function Footer(){
  return (
    <footer className="py-5 pt-8 border-t border-gray-600 flex justify-between items-center max-[756px]:flex-col">
      <div className="flex items-center gap-4 max-[520px]:flex-col">
        <RocketseatLogo/>
        <span className="text-sm text-gray-300 font-medium max-[520px]:text-center max-[520px]:mb-4 ">
          Rocketseat - Todos os direitos reservados
        </span>
      </div>
      <div>
        <p className="text-sm text-gray-300 font-medium">
          Desenvolvido por 
          <a 
            target="_blank"
            href="https://github.com/dopeeycode"
            className="underline ml-1 text-green-500"
          >
            @dopeeycode
          </a>
        </p>
      </div>
    </footer>
  )
}
