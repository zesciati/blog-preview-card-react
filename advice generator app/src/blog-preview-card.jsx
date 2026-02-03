import IllustrationArticle from "./assets/illustration-article.svg";
import ImageAvatar from "./assets/image-avatar.webp";

export default function blogPreviewCard() {
  return (
    <html lang="en">
      <head>
        <meta charset="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Document</title>
      </head>
      <body className="bg-(--yellow) font-(family-name:--figtree)">
        <main className="flex justify-center items-center min-h-screen flex-col">
          <div className="p-6 bg-(--white) rounded-[20px] mx-6">
            <img
              src={IllustrationArticle}
              alt="illustration-article"
              className="rounded-[10px] "
            />
            <p className="font-extrabold bg-(--yellow) w-max mt-6 px-3 py-1 rounded-sm">
              Learning
            </p>
            <p className="my-3"> Published 21 Dec 2023</p>
            <h3 className="text-xl font-extrabold">HTML & CSS foundations</h3>
            <p className="text-sm text-(--gray-500)">
              These languages are the backbone of every website, defining
              structure, content, and presentation.
            </p>
            <div className="flex items-center mt-6">
              <img src={ImageAvatar} alt="Image of greg hooper" className="mr-3" />
              <p className="font-black ">Greg Hooper</p>
            </div>
          </div>
        </main>
      </body>
    </html>
  );
}
