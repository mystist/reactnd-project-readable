const headers = { 'Authorization': 'whatever-you-want' }
const baseUrl = 'http://localhost:3001'

export const fetchCategories = () => {
  return fetch(`${baseUrl}/categories`, { headers })
    .then(res => res.json())
    .then(data => data.categories)
}

export const fetchPosts = () => {
  return fetch(`${baseUrl}/posts`, { headers })
    .then(res => res.json())
}

export const fetchCommentsByPost = post => {
  return fetch(`${baseUrl}/posts/${post.id}/comments`, { headers })
    .then(res => res.json())
}

export const fetchPost = (post, option) => {
  if (post.isNew) {
    return fetch(`${baseUrl}/posts`, { headers: Object.assign({}, headers, { 'Content-Type': 'application/json' }), method: 'POST', body: JSON.stringify(post) })
      .then(res => res.json())
  } else if (option) {
    return fetch(`${baseUrl}/posts/${post.id}`, { headers: Object.assign({}, headers, { 'Content-Type': 'application/json' }), method: 'POST', body: JSON.stringify({ option }) })
      .then(res => res.json())
  } else {
    return fetch(`${baseUrl}/posts/${post.id}`, { headers })
      .then(res => res.json())
  }
}

export const fetchComment = (comment, option) => {
  if (!option) {
    return fetch(`${baseUrl}/comments/${comment.id}`, { headers })
      .then(res => res.json())
  } else {
    return fetch(`${baseUrl}/comments/${comment.id}`, { headers: Object.assign({}, headers, { 'Content-Type': 'application/json' }), method: 'POST', body: JSON.stringify({ option }) })
      .then(res => res.json())
  }
}
