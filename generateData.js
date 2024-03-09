"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateFakePost = void 0;
var faker_1 = require("@faker-js/faker");
var fs = require("fs");
function generateFakePost() {
    return {
        id: faker_1.faker.string.uuid(),
        author: faker_1.faker.person.fullName(),
        timestamp: faker_1.faker.date.past().toISOString(),
        content: faker_1.faker.lorem.paragraphs(),
        likes: faker_1.faker.number.int({ min: 0, max: 500 }),
        comments: faker_1.faker.number.int({ min: 0, max: 500 }),
    };
}
exports.generateFakePost = generateFakePost;
function generatePosts(n) {
    var posts = [];
    for (var i = 0; i < n; i += 1) {
        posts.push(generateFakePost());
    }
    return posts;
}
var fakePosts = generatePosts(100);
//Uncomment when running locally
fs.writeFileSync("fakeLinkedInPosts.json", JSON.stringify(fakePosts, null, 2));
console.log(fakePosts);
