import { faker } from "@faker-js/faker";
import * as fs from "fs";

export interface FakePost {
  id: string;
  author: string;
  timestamp: string;
  content: string;
  likes: number;
  comments: number;
}

export function generateFakePost(): FakePost {
  return {
    id: faker.string.uuid(),
    author: faker.person.fullName(),
    timestamp: faker.date.past().toISOString(),
    content: faker.lorem.paragraphs(),
    likes: faker.number.int({ min: 0, max: 500 }),
    comments: faker.number.int({ min: 0, max: 500 }),
  };
}

function generatePosts(n: number): FakePost[] {
  const posts: FakePost[] = [];
  for (let i = 0; i < n; i += 1) {
    posts.push(generateFakePost());
  }
  return posts;
}

const fakePosts = generatePosts(100);

//Uncomment when running locally
fs.writeFileSync("fakeLinkedInPosts.json", JSON.stringify(fakePosts, null, 2));

console.log(fakePosts);
