export default function TodoCard({ title , description , completed }) {
    return (
        <div className="w-full border-solid border-slate-300 border-2 p-4 rounded mb-2 flex justify-between item-center bg-slate-100 ">
            <div className="w-5/6">
                <h1 className="font-bold text-lg"> {title}</h1>
                <p>{description}</p>
            </div>
            <div className="ml-4 flex flex-col justify-center items-center">
                <button className="bg-blue-500 hover:bg-blue-400 rounded text-white p-2">completed</button>
            </div>
        </div>
    )
}