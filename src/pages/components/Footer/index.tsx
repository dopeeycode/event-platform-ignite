import RocketseatLogo from "../../../components/RocketseatLogo";

export default function FooterSubscribe() {
  return (
    <footer className="w-full bg-black flex items-center justify-between p-6">
      <div className="flex items-center">
        <RocketseatLogo />
        <span className="text-gray-300 ml-[1.5rem]">Rocketseat - Todos os direitos reservados</span>
      </div>

      <div>
        <span className="text-gray-300">Políticas de privacidade</span>
      </div>
    </footer>
  )
}
