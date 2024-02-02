import React from 'react'

function Features() {
  return (
    <div>
      <h1>Hello Features</h1>
        <div className="bg-purple-500 p-4 flex justify-between">
          <div className="w-1/3 h-16 bg-purple-700"></div>
          <div className="w-1/3 h-16 bg-purple-800"></div>
          <div className="w-1/3 h-16 bg-purple-900"></div>
     </div>
      <div className="flex justify-between">
            <div className="grid place-items-left mt-5 mr-10">
                <img className="sm:w-96 w-48" src="https://i.ibb.co/cCpsyMf/hand-holding-growth-arrow-with-coins.jpg" alt="image1" />
            </div>
            <div className="grid place-items-center mt-5">
                <img className="sm:w-96 w-48" src="https://i.ibb.co/cCpsyMf/hand-holding-growth-arrow-with-coins.jpg" alt="image2" />
            </div>
            <div className="grid place-items-right mt-5">
                <img className="sm:w-96 w-48" src="https://i.ibb.co/cCpsyMf/hand-holding-growth-arrow-with-coins.jpg" alt="image2" />
            </div>
      </div>
    </div>
  )
}

export default Features
