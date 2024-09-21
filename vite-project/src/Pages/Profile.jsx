import '../assets/css/style.css'


const Profile = () => {
  return (
     <>
     <div className="bg-slate-50 h-screen w-screen">
           <div className="flex flex-row">
            <div className="flex flex-col px-20 py-20">
              <div className="p-9 px-6 ">
                <h1 className="text-black font-bold text-4xl w-1/2 col- text-start"> Hi! I'm Akilesh Prabhu -</h1>
                <h1 className="text-violet-800 font-bold text-4xl w-1/2 col- text-start">Software Developer</h1>
                </div>
                <div className="p-1 px-6 ">
                <h1 className="text-black font-bold text-1xl w-1/2 text-start">Passionate and results-driven Software Developer with a strong foundation in both front-end and back-end technologies, including JavaScript, React, Node.js, and databases like MongoDB and SQL.</h1>
                </div>
            </div>
        
           
            <div className="w-1/2 absolute top-1/6 right-20 left-50 flex flex-row justify-end px-16 py-0.5" >
            <img src='https://i.postimg.cc/brzLQgZH/IMG-4989-removebg-preview-1.png' className="h-90 w-90 p-14"/>
            </div>
           </div>
        </div>
     </>
  )
}


export default Profile