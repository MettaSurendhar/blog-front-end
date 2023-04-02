import React from 'react'
import Edit from '../assets/images/edit.png';
import Delete from '../assets/images/delete.png';
import { Link , useLocation } from 'react-router-dom';
import Menu from '../components/Menu';

const Single = () => {
  const location = useLocation();

  const data = {
    title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
    para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vulputate mi sit amet mauris. Ut tortor pretium viverra suspendisse. At lectus urna duis convallis convallis tellus id interdum velit. Hendrerit dolor magna eget est lorem ipsum dolor sit amet. Nisl nunc mi ipsum faucibus vitae aliquet nec. Id cursus metus aliquam eleifend mi in nulla. Diam sit amet nisl suscipit adipiscing. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Nec dui nunc mattis enim ut tellus. Dictumst quisque sagittis purus sit amet volutpat. Massa eget egestas purus viverra accumsan in. Egestas congue quisque egestas diam in arcu cursus euismod quis. Venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin. Venenatis tellus in metus vulputate eu. Ligula ullamcorper malesuada proin libero. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Lectus quam id leo in vitae. Ac placerat vestibulum lectus mauris.magna aliqua. Vulputate mi sit amet mauris. Ut tortor pretium viverra suspendisse. At lectus urna duis convallis convallis tellus id interdum velit. Hendrerit dolor magna eget est lorem ipsum dolor sit amet. Nisl nunc mi ipsum faucibus vitae aliquet nec. Id cursus metus aliquam eleifend mi in nulla. Diam sit amet nisl suscipit adipiscing. Feugiat nibh sed pulvinar proin gravida hendrerit lectus. Nec dui nunc mattis enim ut tellus. Dictumst quisque sagittis purus sit amet volutpat. Massa eget egestas purus viverra accumsan in. Egestas congue quisque egestas diam in arcu cursus euismod quis. Venenatis tellus in metus vulputate eu scelerisque felis imperdiet proin. Venenatis tellus in metus vulputate eu. Ligula ullamcorper malesuada proin libero. Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque purus. Lectus quam id leo in vitae. Ac placerat vestibulum lectus mauris.",
    img : "https://images.pexels.com/photos/6489663/pexels-photo-6489663.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
  }

  return (
    <div className="single">
      {console.log(location.data)}
      <div className="content">
        <img src={location.state ? location.state.img : <></>} alt="" />

        <div className="user">
          <img src={location.state ? location.state.img : data.img} alt="" />

          <div className="info">
            <span>Metta</span>
            <p>Posted 2 days ago</p>
          </div>

          <div className="edit">
            <Link to="../write" state ={{ para : data.para , title : data.title }}>
              <img src={Edit} alt="" />
            </Link>
            {/* <Link>
              <img src={Delete} alt="" />
            </Link> */}
          </div>

        </div>

        <h1>{location.state ? location.state.title : data.title } </h1>

        <p> 
          {data.para}
        {/* {data.para1}

        <br />
        <br />

        {data.para2}
        <br />
        <br />
        {data.para3} */}
        </p>
        
      </div>

      <Menu data = {location.state.data} />
    </div>
  )
}

export default Single