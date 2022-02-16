import axios from "axios";

const apiURL =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3001"
    : "https://peeved-osos.herokuapp.com";

export const registerUser = async (userInfo) => {
  try {
    const response = await axios.post(`${apiURL}/api/auth/register`, userInfo);
    localStorage.setItem("token", response.data.token);
    return response.data.user;
  } catch (error) {
    console.error(error.message);
  }
};

export const loginUser = async (userInfo) => {
  try {
    const response = await axios.post(`${apiURL}/api/auth/login`, userInfo);
    localStorage.setItem("token", response.data.token);
    return response.data.user;
  } catch (error) {
    console.error(error.message);
  }
};

const buildHeaders = (token) => {
  return {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
};

export const verifyUser = async () => {
  try {
    const token = localStorage.getItem("token");
    if (token) {
      const config = buildHeaders(token);
      const response = await axios.get(`${apiURL}/api/auth/verify`, config);
      return response.data.user;
    }
    return null;
  } catch (error) {
    console.error(error.message);
  }
};

export const getAllPosts = async () => {
  try {
    const response = await axios.get(`${apiURL}/api/posts`);
    return response.data;
  } catch (error) {
    console.error(error.message);
  }
};

export const getPostById = async (id) => {
  try {
    const token = localStorage.getItem("token");
    if (token) {
      const config = buildHeaders(token);
      const response = await axios.get(`${apiURL}/api/posts/${id}`, config);
      return response.data;
    }
    return {};
  } catch (error) {
    console.error(error.message);
  }
};

export const newPost = async (newPost) => {
  try {
    const token = localStorage.getItem("token");
    if (token) {
      const config = buildHeaders(token);
      const response = await axios.post(
        `${apiURL}/api/posts/new-post`,
        newPost,
        config
      );
      return response.data;
    }
    return [];
  } catch (error) {
    console.error(error.message);
  }
};

export const updatePost = async (updatedPost, postId) => {
  try {
    const token = localStorage.getItem("token");
    if (token) {
      const config = buildHeaders(token);
      const response = await axios.put(
        `${apiURL}/api/posts/update-post/${postId}`,
        updatedPost,
        config
      );
      return response.data;
    }
  } catch (error) {
    console.error(error.message);
  }
};

export const destroyPost = async (postId) => {
  try {
    const token = localStorage.getItem("token");
    if (token) {
      const config = buildHeaders(token);
      const response = await axios.delete(
        `${apiURL}/api/posts/delete-post/${postId}`,
        config
      );
      return response.data;
    }
  } catch (error) {
    console.error(error.message);
  }
};

export const getAllComments = async () => {
  try {
    const token = localStorage.getItem("token");
    if (token) {
      const config = buildHeaders(token);
      const response = await axios.get(`${apiURL}/api/comments`, config);
      return response.data;
    }
    return [];
  } catch (error) {
    console.error(error.message);
  }
};

export const getCommentById = async (id) => {
  try {
    const token = localStorage.getItem("token");
    if (token) {
      const config = buildHeaders(token);
      const response = await axios.get(`${apiURL}/api/comments/${id}:`, config);
      return response.data;
    }
  } catch (error) {
    console.error(error.message);
  }
};

export const newComment = async (commentInfo) => {
  try {
    const token = localStorage.getItem("token");
    if (token) {
      const config = buildHeaders(token);
      const response = await axios.post(
        `${apiURL}/api/comments/new-comment`,
        commentInfo,
        config
      );
      return response.data;
    }
    return [];
  } catch (error) {
    console.error(error.message);
  }
};

export const destroyComment = async (commentId) => {
  try {
    const token = localStorage.getItem("token");
    if (token) {
      const config = buildHeaders(token);
      const response = await axios.delete(
        `${apiURL}/api/posts/delete-comment/${commentId}`,
        config
      );
      return response.data;
    }
  } catch (error) {
    console.error(error.message);
  }
};