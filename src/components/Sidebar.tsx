import Lesson from "./Lesson";
import { gql, useQuery } from '@apollo/client'


const GET_LESSONS_QUERY = gql`
  query {
    lessons(orderBy: availableAt_ASC, stage: PUBLISHED) {
      id
      slug
      title
      lessonType
      availableAt
  }
}
`

interface GetLessonsQueryResponse {
  lessons: {
    id: string;
    lessonType: 'live' | 'class';
    slug: string;
    title: string;
    availableAt: string;
  }[]
}

export default function Sidebar () {

  const { data } = useQuery<GetLessonsQueryResponse>(GET_LESSONS_QUERY)

  return (
    <aside className="w-[21.75rem] bg-gray-700 border-l border-gray-600 p-6 max-[1224px]:hidden">
      <span className="font-bold text-2xl pb-6 mb-6 border-b border-gray-500 block">
        Cronograma de aulas
      </span>
      <div className="flex flex-col gap-8">
        {data?.lessons.map(lesson => {
          return(
            <Lesson 
              title={lesson.title}
              slug={lesson.slug}
              availableAt={new Date(lesson.availableAt)}
              type={lesson.lessonType}
              key={lesson.id}
            />
          )
        })}
      </div>
    </aside>
  )
}
