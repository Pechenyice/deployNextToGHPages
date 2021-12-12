# Deploy Next.js app to Github pages

## About

read full article on habr (same name)

deployment: https://pechenyice.github.io/deployNextToGHPages/

## Installation

```
git clone https://github.com/Pechenyice/deployNextToGHPages.git
cd deployNextToGHPages

npm i
npm run dev //dev-server

npm run build
npm start //prod-server
```

## Instructions

1. Change package.json:

- "Pechenyice" with \<your-github-nickname\>
- "deployNextToGHPages" with \<your-github-project\>

2. Change next.config.js:

- "Pechenyice" with \<your-github-nickname\>
- "deployNextToGHPages" with \<your-github-project\>

3. Deploy your app with

```
npm run deploy
```

## Important

1. Use Images like this (don't specify img src as '/img.png')

```
import next from "./../public/next.png";

<Image src={next} />
```

2. Use Links like always

```
<Link href="/manual" as={`/manual`}>
    to manual page
</Link>
```
