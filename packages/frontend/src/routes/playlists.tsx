import React from "react";
import { Outlet, Link } from "react-router-dom";

export default function Playlists() {
  return (
    <>
      <div>Playlists Page</div>
      <Link to={"/"}>Home</Link>
      <Link to={"/playlist"}>Playlist Page</Link>
    </>
  );
}
