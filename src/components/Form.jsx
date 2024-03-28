import memesData from "../memesData";
import React from "react";
export default function Form() {


  const [memeImage, setMemeImage] = React.useState("")
  
  function generateMeme() {
    const memesArray = memesData.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    setMemeImage(memesArray[randomNumber].url)
    
  }

  return (
    <div>
      <div class="">
        <div className="flex justify-evenly m-10">
          <div class="mb-5">
            <label
              htmlFor="top-text"
              class="w-96 block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Top Text
            </label>
            <input
              type="top-text"
              id="top-text"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Shut up"
              required
            />
          </div>
          <div class="mb-5">
            <label
              htmlFor="bottom-text"
              class="w-96  block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Bottom Text
            </label>

            <input
              type="bottom-text"
              id="bottom-text"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Take my money"
              required
            />
          </div>
        </div>

        <div className="flex justify-center ">
          <button
            type="submit"
            class=" text-white bg-cyan-700  hover:bg-cyan-600 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-12 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            onClick={generateMeme}
          >
            Get a new meme image
          </button>
        </div>
      </div>
      <img src={memeImage} />
    </div>
  );
}
