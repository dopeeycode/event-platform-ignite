import { CaretRight, DiscordLogo, FileArrowDown, Image, Lightning } from "phosphor-react";
import Footer from "./Footer";
import { Player, Youtube, DefaultUi } from "@vime/react";

import '@vime/core/themes/default.css'

export default function Video () {
  return (
    <div className="flex-1">
      <div className="bg-black flex justify-center">
        <div className="h-full w-full max-w-[1100px] max-h-[60vh] aspect-video">
          <Player>
            <Youtube videoId="99okStmx-7c"/>
            <DefaultUi />
          </Player>
        </div>
      </div>

      <div className=" px-8 pt-8 max-w-[1100px]  mx-auto">
        <div className="flex items-start gap-16 max-[1000px]:flex-col ">
          <div className="flex-1 ">
            <h1 className="text-2xl font-bold mb-4">
              Masterclass React | Comece sua especialização aqui
            </h1>
            <p className="text-gray-200 leading-relaxed">
              Bem-vindo(a) a Masterclass React, seu primeiro passo em direção à especialização no framework de referência no mercado de trabalho.
              Nessa aula especial você vai construir uma aplicação completa utilizando React e as principais ferramentas que fazem parte do universo dessa tecnologia.
              Juntos vamos entender os fundamentos, conhecer as estruturas do projeto, aplicar Type Script no React e construir o projeto.
              Seja para aprofundar seus conhecimentos ou começar totalmente do zero, essa Masterclass foi feita para você.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <img 
                src="https://github.com/diego3g.png" 
                alt="professor"
                className="h-16 w-16 rounded-full border-2 border-blue-500"
              />
              <div className="leading-relaxed">
                <strong className="font-bold text-2xl block">Diego Fernandes</strong>
                <span className="text-gray-200 block text-sm">CTO @Rocketseat</span>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <a 
              href="#" 
              className="p-4 text-sm bg-green-500 flex items-center rounded font-bold uppercase gap-2 
              justify-center hover:bg-green-700 transition-colors ">
                <DiscordLogo size={24}/>
                Comunidade do Discord
            </a>
            <a 
              href="#" 
              className="p-4 text-sm border border-blue-500 text-blue-500 flex items-center rounded 
              font-bold uppercase gap-2 justify-center hover:bg-blue-500 hover:text-gray-900 transition-colors">
                <Lightning size={24}/>
                Acesso o Desafio
            </a>
          </div>
        </div>
        <div className="gap-8 mt-20 grid grid-cols-2 mb-20 max-[1000px]:grid-cols-none">
          <a href="#" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
            <div className="bg-green-700 h-full flex p-6 items-center">
              <FileArrowDown size={40}/>
            </div>
            <div className="py-6 leading-relaxed ">
              <strong className="text-2xl">Material complementar</strong>
              <p className="text-sm text-gray-200 mt-2">
                Acesse o material complementar para acelerar o seu desenvolvimento
              </p>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight size={24}/>
            </div>
          </a>

          <a href="#" className="bg-gray-700 rounded overflow-hidden flex items-stretch gap-6 hover:bg-gray-600 transition-colors">
            <div className="bg-green-700 h-full flex p-6 items-center">
              <Image size={40}/>
            </div>
            <div className="py-6 leading-relaxed ">
              <strong className="text-2xl">Wallpapers exclusivos</strong>
              <p className="text-sm text-gray-200 mt-2">
                Baixe wallpapers exclusivos do Ignite Lab e personalize a sua máquina
              </p>
            </div>
            <div className="h-full p-6 flex items-center">
              <CaretRight size={24}/>
            </div>
          </a>
        </div>
        <Footer />
      </div>
    </div>
  )
}
