import Navbar from "../components/Navbar";
// import Sidebar from "../components/Sidebar";
import Editor from "../components/Editor";
import ActivityBar from "../components/ActivityBar";
import Explorer from "../components/Explorer";

export default function MainLayout() {

  return (

    <div className="h-screen flex flex-col">

      <Navbar />

      <div className="flex flex-1">

        <ActivityBar />

        <Explorer />

        <Editor />

      </div>

    </div>

  );

}