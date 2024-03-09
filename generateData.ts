import { faker } from "@faker-js/faker";
import fs from "fs";

function generateFakePost() {
  return {
    id: faker.string.uuid(),
    author: faker.person.fullName(),
    timestamp: faker.date.past().toISOString(),
    content: faker.lorem.paragraphs(),
    likes: faker.number.int({ min: 0, max: 500 }),
    comments: faker.number.int({ min: 0, max: 500 }),
  };
}

function generatePosts(n) {
  const posts = [];
  for (let i = 0; i < n; i += 1) {
    posts.push(generateFakePost());
  }
  return posts;
}

const fakePosts = generatePosts(100);

fs.writeFileSync("fakeLinkedInPosts.json", JSON.stringify(fakePosts, null, 2));

console.log(fakePosts);
