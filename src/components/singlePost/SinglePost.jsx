import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-regular fa-trash-can"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>TuanDung</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
          accusamus dolorem voluptate amet nulla aut, vel ad maxime obcaecati
          expedita, inventore, distinctio facere. Quo quae autem qui a vitae
          rerum.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
          accusamus dolorem voluptate amet nulla aut, vel ad maxime obcaecati
          expedita, inventore, distinctio facere. Quo quae autem qui a vitae
          rerum.
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo
          accusamus dolorem voluptate amet nulla aut, vel ad maxime obcaecati
          expedita, inventore, distinctio facere. Quo quae autem qui a vitae
          rerum.
        </p>
      </div>
    </div>
  );
}
