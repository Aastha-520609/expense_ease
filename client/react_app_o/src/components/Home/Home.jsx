import React from 'react';
import {Link} from 'react-router-dom';
import Footer from '../Footer/Footer';

export default function Home() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <aside className="relative overflow-hidden text-black rounded-lg sm:mx-16 mx-2 sm:py-16 flex flex-col-reverse sm:flex-row">
                <div className="relative z-10 max-w-screen-xl px-4 pb-20 pt-10 sm:py-24 mx-auto sm:px-6 lg:px-8 flex-1">
                    <div className="max-w-xl sm:mt-1 space-y-8 text-center sm:text-left sm:mr-auto">
                        <h2 className="text-4xl font-bold sm:text-5xl ">
                            Track All Your Expenses
                            <span className="hidden sm:block text-4xl">In One Place</span>
                        </h2>

                        <Link 
                            className="inline-flex text-white items-center px-6 py-3 font-medium bg-violet-700 rounded-lg hover:opacity-75"
                            to="/getstarted"
                        >
                            &nbsp; Get Started
                        </Link>
                    </div>
                </div>
                <div className="absolute inset-0 w-full sm:my-20 sm:pt-1 pt-12 h-full sm:w-96 ml-auto">
                    <img className="w-96"  src="https://i.ibb.co/sj9WnKS/6749498-3432989.jpg"  alt="image1"/>
                </div>
                
            </aside>

            <h1 className="text-center text-2xl sm:text-4xl py-5 font-medium">Save with Ease</h1>
            <p className = "text-center text-2xl mt- 5 mb-10">Empower Your Finances, One Expense at a Time: Your Journey to Financial Freedom Starts Here.</p>

            <div className="grid place-items-center ml- 20 mt-5 mb-20">
                <img className="sm:w-96 w-48" src="https://i.ibb.co/cbNvyfr/20133400-6264318.jpg" alt="image1" />
            </div>
            <div><Footer/></div>
        </div>
    );
}
