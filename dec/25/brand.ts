import { Brand } from 'ts-brand';

declare function getPost(postId: Post['id']): Promise<Post>;
declare function getUser(userId: User['id']): Promise<User>;

interface User {
  id: Brand<number, User>;
  name: string;
}

interface Post {
  id: Brand<number, Post>;
  authorId: User['id'];
  title: string;
  body: string;
}

function authorOfPost(postId: Post['id']): Promise<User> {
  return getPost(postId).then((post) => getUser(post.authorId));
}

type Path = Brand<string, 'path'>;
type UserId = Brand<number, 'user'>;
type DifferentUserId = Brand<number, 'user', '__kind__'>;
interface Post {
  id: Brand<number, Post>;
}
enum TimeTag {
  'time',
  'loc',
}
type Time = Brand<number, TimeTag.time>;
