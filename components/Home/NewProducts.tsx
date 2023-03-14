interface Prod {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
}

const NewProducts = ({ content }: { content: Prod[] }) => {
  console.log(content);
  return (
    <div>
      <div>Hello world</div>
      <div>
        {content.map((prod) => {
          return <h2>{prod.title}</h2>;
        })}
      </div>
    </div>
  );
};

export default NewProducts;
