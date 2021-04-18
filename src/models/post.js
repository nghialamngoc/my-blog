export default class Post {
  constructor(
    title,
    content,
    tags
  ) {
    this.title = title
    this.content = content
    this.tags = tags
  }

  get sortContent() {
    return this.content
  }
}