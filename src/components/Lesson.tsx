import { CheckCircle, Lock } from 'phosphor-react'
import { isPast, format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { Link } from 'react-router-dom'

interface LessonProps {
  title: string;
  slug: string
  availableAt: Date;
  type: 'live' | 'class';
}

export default function Lesson (props: LessonProps) {

  const isLessonAvailable = isPast(props.availableAt);
  const availableDateFormat = format(props.availableAt, "EEE	 '•' d 'de' MMMM '•' KK'h'mm", {
    locale: ptBR
  })
  
  return (
    <>
      {isLessonAvailable ? (
        <Link to={`/event/lesson/${props.slug}`} className='group'>
        <span className="text-gray-300 ">
          {availableDateFormat}
        </span>
        <div className="rounded border border-gray-500 p-4 mt-2 group-hover:border-green-500">
          <header className="flex items-center justify-between">
            {isLessonAvailable ? (
              <span className="text-sm flex items-center gap-2 text-blue-500 font-medium">
                <CheckCircle size={20}/>
                Conteúdo liberado
              </span>
            ) : (
              <span className="text-sm flex items-center gap-2 text-orange-500 font-medium">
                <Lock size={20}/>
                Em breve
              </span>
            )}
            {props.type === 'live' ? (
              <span className="text-xs rounded px-[.125rem] border border-green-300 text-green-300 font-bold">
                AO VIVO
              </span>
            ) : (
              <span className="text-xs rounded p-[.2rem] border border-green-300 text-white font-bold">
                AULA PRÁTICA
              </span>
            )}
          </header>
          
          <strong className="text-gray-200 mt-5 block">
            {props.title}
          </strong>
        </div>
      </Link>
      ): (
        <div className='cursor-not-allowed'>
        <span className="text-gray-300">
          {availableDateFormat}
        </span>
        <div className="rounded border border-gray-500 p-4 mt-2">
          <header className="flex items-center justify-between">
            {isLessonAvailable ? (
              <span className="text-sm flex items-center gap-2 text-blue-500 font-medium">
                <CheckCircle size={20}/>
                Conteúdo liberado
              </span>
            ) : (
              <span className="text-sm flex items-center gap-2 text-orange-500 font-medium">
                <Lock size={20}/>
                Em breve
              </span>
            )}
            {props.type === 'live' ? (
              <span className="text-xs rounded px-[.125rem] border border-green-300 text-green-300 font-bold">
                AO VIVO
              </span>
            ) : (
              <span className="text-xs rounded p-[.2rem] border border-green-300 text-white font-bold">
                AULA PRÁTICA
              </span>
            )}
          </header>
          
          <strong className="text-gray-200 mt-5 block">
            {props.title}
          </strong>
        </div>
      </div>
      )}
    </>
  )
}
