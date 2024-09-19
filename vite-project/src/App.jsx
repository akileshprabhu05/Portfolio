export default function App() {
  return (
    <div className="h-screen w-screen justify-start items-center bg-gradient-to-l">
      <div className="h-20 w-screen flex flex-row justify-center ">
          <div className="w-1/2 font-extrabold font-sans p-8 px-16 tracking-widest text-lg shadow-md">
            AKIL
          </div>
          <div className="w-1/2 font-extrabold font-sans p-8 px-16 tracking-wide flex justify-end shadow-md">
            <ul className="flex flex-row gap-7 px-12"> 
              <li className="hover:cursor-pointer  hover:bg-blue-50 hover:h-7  w-19 rounded-lg ">Profile</li>
              <li className="hover:cursor-pointer  hover:bg-blue-50 hover:h-7  w-19 rounded-lg">Contact</li>
              <li className="hover:cursor-pointer  hover:bg-blue-50 hover:h-7 w-19 rounded-lg">Projects</li>
            </ul>
          </div>
      </div>
    </div>
  )
}
