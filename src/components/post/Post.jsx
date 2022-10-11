import "./post.css";

export default function Post({ img }) {
  return (
    <div className="post">
      <img className="postImg" src={img} alt="" />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">Life</span>
        </div>
        <span className="postTitle">Lorem ipsum, dolor sit amet</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptas
        quia ex iure soluta impedit excepturi iusto, recusandae debitis, sed
        veritatis, ullam nam veniam animi quibusdam. Voluptates odio atque
        maiores!
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem voluptas
        quia ex iure soluta impedit excepturi iusto, recusandae debitis, sed
        veritatis, ullam nam veniam animi quibusdam. Voluptates odio atque
        maiores!
      </p>
    </div>
  );
}
