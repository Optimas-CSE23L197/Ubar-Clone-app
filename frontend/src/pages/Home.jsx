import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <div className="bg-[url(https://img.freepik.com/free-vector/purple-fluid-background_53876-99561.jpg)] bg-cover bg-center h-screen w-full flex flex-col justify-between text-white">
        {/* Header */}
        <header className="flex justify-between items-center p-6">
          <img
            className="w-20"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png"
            alt="Uber Logo"
          />
        </header>

        {/* Main Content */}
        <main className="flex flex-col items-center text-center px-4">
          <h1 className="text-4xl font-bold mb-2 text-purple-900">Your Ride Awaits</h1>
          <p className="text-lg text-purple-500">Book your first trip now and experience the convenience of Uber.</p>
        </main>

        {/* Get Started Section */}
        <footer className="bg-white text-black rounded-t-xl px-6 py-8 shadow-lg">
          <h2 className="text-2xl font-bold mb-4">Get Started with Uber</h2>
          <Link
            to="/user/login"
            className="flex items-center justify-center w-full text-white bg-black hover:bg-gray-800 rounded-lg py-3 font-semibold transition"
          >
            Continue
          </Link>
        </footer>
      </div>
    </div>
  );
}

export default Home;
