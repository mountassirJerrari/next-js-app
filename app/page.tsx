
import TodoCard from "@/components/TodoCard"
import Link from "next/link"
import axios from 'axios';
import SimpleButton from "@/components/simpleButton";


let todos = [
  {
    title: 'title1',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown "
    , completed: true
  }
  ,
  {
    title: 'title2',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown "

    , completed: true
  }
  ,
  {
    title: 'title3',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown "

    , completed: true
  },
  {
    title: 'title4',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown "

    , completed: true
  },
  {
    title: 'title4',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown "

    , completed: true
  },
  {
    title: 'title4',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown "

    , completed: true
  },
  {
    title: 'title4',
    description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown "

    , completed: true
  }
]

export default function Home() {
  let todosCards = todos.map(e => {
    return <TodoCard title={e.title} description={e.description} completed={true} />
  })
 


  return (

    <div className=" flex p-1 flex-col w-10/12 h-5/6  bg-white  overflow-x-scroll " >
      <div className="w-full sticky border-solid border-slate-300 border-2 p-4 rounded mb-2 flex justify-center item-center bg-slate-100 ">
        <Link className="bg-blue-600 mx-4 px-4 hover:bg-blue-400 rounded text-white p-2" href={"/"}>List</Link>
        <Link className="bg-blue-600 mx-4 px-4 hover:bg-blue-400 rounded text-white p-2" href={"/add"}>Add Todo</Link>
        <SimpleButton />
      </div>
      {todosCards}

    </div>
  )

}