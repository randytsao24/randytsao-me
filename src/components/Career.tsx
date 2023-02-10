export default function Career() {
  return (
    <div className='m-6 w-4/5 md:w-1/2 mx-auto flex flex-col bg-stone-100 border-2 border-black-200 rounded-xl shadow-lg opacity-75 text-black' >
      <h1 className="p-4 text-3xl font-extrabold underline">
        What do I do?
      </h1>
      <p className="p-4 text-lg font-mono">
        {`Currently, I'm most proficient in full stack web app development. Technologies relating to that include <b>Node, Django, React, AngularJS, MongoDB, Postgres</b> - to name the most recent.`}
      </p>
      <p className="p-4 text-lg font-mono">
        {`I'm not too finicky about particular languages or libraries. I think such choices comes down to what you want to do and how you want to do it.`}
      </p>
      <p className="p-4 text-lg font-mono">
        {`DevOps has been my main work-related interest, and I hope to be able to leverage my contuining buildup of such knowledge into my career.`}
      </p>
    </div>
  )
}
