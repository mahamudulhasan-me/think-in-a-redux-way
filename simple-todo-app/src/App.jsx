import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import ToDoAddForm from "./components/ToDoAddForm";
import ToDoList from "./components/ToDoList";

const App = () => {
  return (
    <div className="grid place-items-center bg-blue-100 h-screen px-6 font-sans">
      {/* <!-- navbar --> */}
      <Navbar />

      <div className="w-full max-w-3xl shadow-lg rounded-lg p-6 bg-white">
        {/* <!-- header --> */}
        <ToDoAddForm />
        <hr className="mt-4" />

        {/* <!-- todo list --> */}
        <ToDoList />
        <hr className="mt-4" />

        {/* <!-- footer --> */}
        <Footer />
      </div>
    </div>
  );
};

export default App;
