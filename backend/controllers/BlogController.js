const blogServices = require("../services/BlogService")

exports.getAllBlogs = async (req, res) => {
  try {
    const blogs = await blogServices.getAllBlogs();
    res.status(200).json({ data: blogs })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
};

exports.createBlog = async (req, res) => {
  try {
    const blog = await blogServices.createBlog(req.body)
    res.status(201).json({ data: blog })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

exports.getBlogById = async (req, res) => {
  try {
    const blog = await blogServices.getBlogById(req.params.id)
    res.status(200).json({ data: blog })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

exports.updateBlog = async (req, res) => {
  try {
    const blog = await blogServices.updateBlog(req.params.id, req.body);
    res.status(200).json({ data: blog})
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}

exports.deleteBlog = async (req, res) => {
  try {
    const blog = await blogServices.deleteBlog(req.params.id);
    res.status(200).json({ data: blog })
  } catch (error) {
    res.status(500).json({ error: error.message })
  }
}