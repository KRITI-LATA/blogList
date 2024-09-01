// Write your JS code here
import './index.css'

const BlogItem = props => {
  const {blogDetails} = props
  const {title, description, publishedDate} = blogDetails

  return (
    <li className="blog-item">
      <div className="blog-detail-container">
        <h1 className="blog-title">{title}</h1>
        <p className="publish-date-text">{publishedDate}</p>
      </div>
      <p className="description">{description}</p>
      <hr className="hr-line" />
    </li>
  )
}
export default BlogItem
