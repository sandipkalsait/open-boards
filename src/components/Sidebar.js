import React from 'react';
import './Sidebar.css';

function Sidebar() {
  return (
    <aside className="sidebar">
      <ul>
        <li><a href="/shapes">Shapes</a></li>
        <li><a href="/flowchart">Flowchart</a></li>
        <li><a href="/diagrams">Diagrams</a></li>
        <li><a href="/files">Files</a></li>
      </ul>
    </aside>
  );
}

export default Sidebar;
