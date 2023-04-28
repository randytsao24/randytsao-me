export default function Loading() {
  return (
    <div className='p-6 max-w-sm mx-auto flex items-center space-x-4'>
      <h1 className="text-3xl font-bold underline">
        <svg className="animate-spin h-12 w-12 m-3" />
      </h1>
    </div>
  )
}
