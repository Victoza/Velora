import React from 'react'

const Spinner = () => {
  return (
    <div className='flex justify-center items-center h-96'>
 <div className="relative h-20 w-20 animate-spin">

    {/* Circle 1 */}
    <div className="absolute top-0 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-red-500"></div>

    {/* Circle 2 */}
    <div className="absolute top-3 right-0 h-4 w-4 rounded-full bg-blue-500"></div>

    {/* Circle 3 */}
    <div className="absolute bottom-0 right-3 h-5 w-5 rounded-full bg-green-500"></div>

    {/* Circle 4 */}
    <div className="absolute bottom-0 left-3 h-3 w-3 rounded-full bg-yellow-500"></div>

    {/* Circle 5 */}
    <div className="absolute top-3 left-0 h-4 w-4 rounded-full bg-purple-500"></div>

</div>
    </div>
  )
}

export default Spinner