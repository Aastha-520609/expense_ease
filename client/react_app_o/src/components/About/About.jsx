import React from 'react'

export default function About() {
  return (
    <div className="w-full relative bg-whitesmoke overflow-hidden flex flex-col items-center">
      <div className="py-16 bg-blue-50/100">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                    <h1 className = "md:font-bold">Expense Ease Overview</h1>
                      <img
                          src="https://i.ibb.co/RQjDB1z/8918703-4030529.jpg" 
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                          Expense Ease
                      </h2>
                      <p className="mt-6 text-gray-600">
                          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
                          accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
                          aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
                      </p>
                      <p className="mt-4 text-gray-600">
                          Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
                          Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
                      </p>
                  </div>
              </div>
          </div>
      </div>
      <div className="flex justify-between">
            <div className="grid place-items-left mt-5 mr-10">
                <img className="sm:w-96 w-48" src="https://i.ibb.co/cCpsyMf/hand-holding-growth-arrow-with-coins.jpg" alt="image1" />
            </div>
            <div className="grid place-items-right mt-5">
                <img className="sm:w-96 w-48" src="https://i.ibb.co/cCpsyMf/hand-holding-growth-arrow-with-coins.jpg" alt="image2" />
            </div>
      </div>


      <p className="text-center text-2xl sm:text-2xl pt-10 font-medium">Aastha Chaudhary</p>
      <p className="text-center text-2xl sm:text-xl font-small pb-10 ">Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
                          Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.</p>
      
      </div>

      
      /* <div className="py-16 bg-blue-50/100">
          <div className="container m-auto px-6 text-gray-600 md:px-12 xl:px-6">
              <div className="space-y-6 md:space-y-0 md:flex md:gap-6 lg:items-center lg:gap-12">
                  <div className="md:5/12 lg:w-5/12">
                      <img
                          /* src="https://tailus.io/sources/blocks/left-image/preview/images/startup.png" 
                          alt="image"
                      />
                  </div>
                  <div className="md:7/12 lg:w-6/12">
                      <h2 className="text-2xl text-gray-900 font-bold md:text-4xl">
                          Expense Ease
                      </h2>
                      <p className="mt-6 text-gray-600">
                          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem
                          accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde
                          aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque!
                      </p>
                      <p className="mt-4 text-gray-600">
                          Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at?
                          Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.
                      </p>
                  </div>
              </div>
          </div>
      </div> */
  );
}
