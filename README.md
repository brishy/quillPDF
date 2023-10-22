# quillPDF

quillPDF is a cutting-edge full-stack SaaS product, utilizing Next.js, Typescript, Tailwind, Prisma, tRPC, and AWS S3. Its primary function is to interact with PDFs using OpenAI's API.

## Technologies Used:
- ![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
- ![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)
- ![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
- ![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)
- ![tRPC](https://img.shields.io/badge/tRPC-6C63FF?style=for-the-badge&logoColor=white)
- ![AWS S3](https://img.shields.io/badge/AWS_S3-569A31?style=for-the-badge&logo=amazon-aws&logoColor=white)
- ![Stripe](https://img.shields.io/badge/Stripe-008CDD?style=for-the-badge&logo=stripe&logoColor=white)
- ![Pinecone DB](https://img.shields.io/badge/Pinecone_DB-4F0599?style=for-the-badge&logoColor=white)
- ![Zod](https://img.shields.io/badge/Zod-FF6600?style=for-the-badge&logoColor=white)


  ## Features:
- Interact with PDFs using OpenAI's API.
- Free & Pro Plan Using Stripe
- Infinite Message Loading for Performance
- Clean, Modern UI Using 'shadcn-ui'

## Optimizations:
- Fix Pro Plan to work for users
- Pro plan allows users to input more and bigger not only PDFS, but other types of files as well
- Chatting with multiple PDFs at the same time


## How to Run:
1. Clone this repository
    ```bash
    git clone https://github.com/brishy/quillPDF.git
    cd quillPDF
    ```

2. Install dependencies
    ```bash
    npm install
    ```

3. Copy the example environment file
    ```bash
    cp .env.example .env
    ```

4. Run the app
    ```bash
    npm run dev
    ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser.
