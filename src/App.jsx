import { useState } from 'react'
import './App.css'
import { useEffect } from 'react'
import axios from 'axios'



function App() {

  const [backgroundColor, setBackgroundColor] = useState("#F5F5DC ")

  const [data, setData] = useState(null)


  const apiGet = async () => {
    const fetch = 'https://dummyjson.com/users'
    const response = await axios.get(fetch)
    setData(getRandomUser(response.data.users));
    setBackgroundColor(randomColor())
    // console.log('userdata=====', data);
  }

  const getRandomUser = (users) => {
    const randomIndex = Math.floor(Math.random() * users.length)
    return users[randomIndex]
  }

  const randomColor = () => {
    var letters = '0123456789ABCDEF'
    var color = '#'
    for (var i = 0; i < 6; i++) {
      color = color + letters[Math.floor(Math.random() * 16)]
    }
    return color;
  }

  useEffect(() => {
    apiGet();
  }, [])

  return (
    <>
         <div>
        <h2 className='text-center mt-3'><b>RANDOM USER ON REFRESH</b></h2>
        <div className='container-fluid d-flex justify-content-center  p-3 mt-3 ' style={{ backgroundColor ,height: '510px', width: '500px' }}>
          <div className='w-50 text-center mt-3'>
            {/* <i style={{ borderRadius: '20px' }} class="fa-solid fa-user fa-8x"></i> */}
            <img style={{width:'100px',height:'120px'}} src={data?.image} alt="" />
            <h4 className='mt-2'><b>{data?.firstName && data?.lastName}</b></h4>
            <p>{data?.gender}</p>
            <div className='d-flex p-3'>
              <div>
                <h6>Birth Date</h6>
                <p>{data?.birthDate}</p>
              </div>
              <div>
                <h6 style={{ marginLeft: '40px' }}>Age</h6>
                <p style={{ marginLeft: '40px' }}>{data?.age}</p>
              </div>
            </div>
            <div className='d-flex p-3'>
              <div>
                <h6 style={{ marginLeft: '10px' }}>Weight</h6>
                <p>{data?.weight}</p>
              </div>
              <div>
                <h6 style={{ marginLeft: '60px' }}>Height</h6>
                <p style={{ marginLeft: '60px' }}>{data?.height}</p>
              </div>
            </div>
            <button   onClick={apiGet} className='btn btn-warning'>REFRESH</button>
          </div>

          <div className='w-50 mt-3'>
            <h5>Home Address</h5>
            <p>{data?.address.address},{data?.address.city}</p>
            <h5 className='mt-4'>Mobile Phone</h5>
            <p>{data?.phone}</p>
            <h5 style={{ marginTop: '35px' }}>Company</h5>
            <p>{data?.company.name}</p>
            <h5 style={{ marginTop: '35px' }}>Job Title</h5>
            <p>{data?.company.title}</p>
            <h5 style={{ marginTop: '35px' }}>Email</h5>
            <p>{data?.email}</p>
          </div>
          {/* </div> */}
        </div>
      </div>
     
    </>
  )
}

export default App
