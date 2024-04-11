import memesData from "../memesData";
import React from "react";
export default function Form() {



  const [meme, setMeme] = React.useState({
    topText:"",
    bottomText:"",
    randomImage:"http://i.imgflip.com/1bij.jpg",
  })

  const [allMemeImages, setAllMemeImages] = React.useState(memesData)
  
  function generateMeme() {
    const memesArray = allMemeImages.data.memes;
    const randomNumber = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomNumber].url;
    setMeme(prevMeme => ({
      ...prevMeme,
      randomImage:url
    }))

  }

  function handleChange(event) {
     const {value,name}= event.target
    return(
      setMeme(prevMeme => ({
        ...prevMeme,
          [name]:value
      })
      )
    )
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
              name="topText"
              value={meme.topText}
              onChange={handleChange}
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
              name="bottomText"
              value={meme.bottomText}
              onChange={handleChange}
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
      <div className="relative mx-96 my-10">
      <h2 className="absolute text-white font-semibold text-2xl p-5">{meme.topText}</h2>
      <img className="flex justify-center " src={meme.randomImage} />
      <h2 className="absolute text-black font-semibold text-2xl  ">{meme.bottomText}</h2>
      </div>
      
    </div>
  );
}
