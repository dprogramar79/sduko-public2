import Sidebar from "../components/Sidebar22";

export default function Home() {
  return (
    <div>
      <h1>Next.js Sidebar Example</h1>
      <button
        type="button"
        className="btn btn-primary"
        data-bs-toggle="modal"
        data-bs-target="#sideModal"
      >
        Open Sidebar22
      </button>
      <Sidebar />
    </div>
  );
}
