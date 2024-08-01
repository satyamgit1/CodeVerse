import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li className="file-item">
          <Link href="/">HTML</Link>
        </li>
        <li className="file-item">
          <Link href="/">CSS</Link>
        </li>
        <li className="file-item">
          <Link href="/">JavaScript</Link>
        </li>
      </ul>
    </aside>
  );
};

export default Sidebar;
