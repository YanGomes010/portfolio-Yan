import { Route, Routes, useParams } from "react-router-dom";
import posts from "assets/posts.json";
import PostModelo from "Components/PostModelo";
import ReactMarkdown from "react-markdown";
import NaoEncontrada from "Pages/NaoEncontrada";
import Base from "Components/Base";

export default function Post() {
  const parametros = useParams();
  const post = posts.find((post) => {
    return post.id === Number(parametros.id);
  });

  if (!post) {
    return <NaoEncontrada />;
  }

  return (
    <Routes>
      <Route path="*" element={<Base />}>
        <Route
          index
          element={
            <PostModelo
              fotoCapa={`/assets/posts/${post.id}/capa.png`}
              titulo={post.titulo}
            >
              <ReactMarkdown>{post.texto}</ReactMarkdown>
            </PostModelo>
          }
        ></Route>
      </Route>
    </Routes>
  );
}
