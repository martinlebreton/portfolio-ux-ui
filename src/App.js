import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import ProjectDetail from "./pages/ProjectDetail";

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
        return <Home onProjectClick={handleProjectClick} />;
      case "about":
        return <About />; // ← About n'a pas besoin de onProjectClick
      case "projects":
        return <Projects onProjectClick={handleProjectClick} />;
      case "contact":
        return <Contact />; // ← Contact n'a pas besoin de onProjectClick
      case "project-detail":
        return (
          <ProjectDetail
            projectId={selectedProjectId}
            setCurrentPage={setCurrentPage}
          />
        );
      default:
        return <Home onProjectClick={handleProjectClick} />;
    }
  };

  return (
    <div className="App">
      <Header currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <main className="pt-20">
        {" "}
        {/* Espace pour header fixe */}
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
