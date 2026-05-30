import Footer from "./components/Footer"
import Navbar from "./components/Navbar"
import Card from "./components/Card"

function App() {

  return (
    <>
      <Navbar />
      <div className="cards">
        <Card title="card 1" description="card 1 desc" style={{ backgroundColor: "lightgray" }} imgSrc="https://th.bing.com/th/id/OIP.JPogPMSOOv8g9WJdtLUluAHaEe?w=245&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" />
        <Card title="card 2" description="card 2 desc" style={{ backgroundColor: "lightgray" }} imgSrc="https://cdn.shopify.com/s/files/1/0306/6419/6141/articles/coding_languages.png?v=1619126283" />
        <Card title="card 3" description="card 3 desc" style={{ backgroundColor: "lightgray" }} imgSrc="https://cdn.shopify.com/s/files/1/0306/6419/6141/articles/coding_languages.png?v=1619126283" />
        <Card title="card 4" description="card 4 desc" style={{ backgroundColor: "lightgray" }} imgSrc="https://th.bing.com/th/id/OIP.JPogPMSOOv8g9WJdtLUluAHaEe?w=245&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3" />
      </div>
      <Footer />
    </>
  )
}

export default App