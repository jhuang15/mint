export default function WebsiteStory({ website }) {
  
  return (
    <main>
      <h1>Our Story</h1>
      <p>{website.story}</p>
    </main>
  );
}