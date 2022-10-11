import "./sidebar.css";

export default function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <span className="sidebarTitle">ABOUT ME</span>
        <img sidebarImg
        //   src="https://images.hindustantimes.com/img/2021/12/23/1600x900/robert-linder-CApbjQPRl28-unsplash_1640260678865_1640260703158.jpg"
          alt=""
        />
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          repellendus consequuntur cumque neque iure!
        </p>
      </div>
	  <div className="sidebarItem">
	  	<span className="sidebarTitle">CATEGORIES</span>
		<ul className="sidebarList">
			<li className="sidebarListItem">Life</li>
			<li className="sidebarListItem">Music</li>
			<li className="sidebarListItem">Style</li>
			<li className="sidebarListItem">Sport</li>
			<li className="sidebarListItem">Tech</li>
			<li className="sidebarListItem">Cinema</li>
		</ul>
	  </div>
	  <div className="sidebarItem">
	  	<span className="sidebarTitle">FOLLOW US</span>
		<div className="sidebarSocial">
			<i className="sidebarIcon fa-brands fa-square-facebook"></i>
			<i className="sidebarIcon fa-brands fa-square-twitter"></i>
			<i className="sidebarIcon fa-brands fa-square-pinterest"></i>
			<i className="sidebarIcon fa-brands fa-square-instagram"></i>
		</div>
	  </div>
    </div>
  );
}
