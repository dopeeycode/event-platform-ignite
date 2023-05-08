
import { CheckCircle, Lock } from 'phosphor-react'

interface LessonProps {
  title: string;
  slug: string
  availableAt: Date;
  type: 'live' | 'class';
}

export default function Lesson (props: LessonProps) {

  const isLessonAvailable = true;
  
  return (
    <a href="#">
      <span className="text-gray-300">
        {props.availableAt.toString()}
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
          <span className="text-xs rounded px-[.125rem] border border-green-300 text-white font-bold">
            {props.type === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'}
          </span>
        </header>
        
        <strong className="text-gray-200 mt-5 block">
          {props.title}
        </strong>
      </div>
    </a>
  )
}
