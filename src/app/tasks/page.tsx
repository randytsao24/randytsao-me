// import { getTasks } from "@/db";

export default async function Tasks() {
  // const tasks = await getTasks();
  // if (tasks?.length) {
  //   tasks.forEach(task => {
  //     console.log(task.data());
  //   })
  // }

  return (
    <div className='p-6 max-w-sm mx-auto flex items-center space-x-4'>
      <h1 className="text-3xl font-bold underline">
        Here are the tasks
      </h1>
    </div>
  )
}
