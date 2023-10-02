import disconnected from './images/noconnection.avif'

const NoConnection = () =>
{
    return(
        <div  className='w-full h-[100vh] flex'>
            <h3 className='w-[30%] h-full flex justify-center items-center font-bold text-xl'>☘️ Hey Buddy !! You are Offline 🐥 💻 <br /> Please Connect to Internet or have a break till connection return ♥️</h3>
            <img src={disconnected} alt="" className='w-[70%] h-full' />
        </div>
    )
};

export default NoConnection;