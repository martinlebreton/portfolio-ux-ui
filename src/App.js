import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ProjectDetail from "./pages/ProjectDetail";
import Legal from "./pages/Legal";
import Privacy from "./pages/Privacy";

function App() {
  const [currentPage, setCurrentPage] = useState("home");
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const handleProjectClick = (projectId) => {
    setSelectedProjectId(projectId);
    setCurrentPage("project-detail");
  };

  const renderPage = () => {
    switch (currentPage) {
      case "home":
        return (
          <Home
            onProjectClick={handleProjectClick}
            setCurrentPage={setCurrentPage}
          />
        );
      case "about":
        return <About />;
      case "projects":
        return <Projects onProjectClick={handleProjectClick} />;
      case "contact":
        return <Contact />;
      case "project-detail":
        return (
          <ProjectDetail
            projectId={selectedProjectId}
            setCurrentPage={setCurrentPage}
          />
        );
      case "legal":
        return <Legal setCurrentPage={setCurrentPage} />;
      case "privacy":
        return <Privacy setCurrentPage={setCurrentPage} />;
      default:
        return (
          <Home
            onProjectClick={handleProjectClick}
            setCurrentPage={setCurrentPage}
          />
        );
    }
  };

  return (
    <div className="App">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="pt-0">{renderPage()}</main>
      <Footer setCurrentPage={setCurrentPage} />
    </div>
  );
}

export default App;
