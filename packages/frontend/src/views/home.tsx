import React from "react";
import { Link } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import { useAuth } from "../auth/auth-provider";
import FullScreenSpinner from "../components/full-screen-spinner";

export default function Home() {
  const { user, loading } = useAuth();

  if (loading) {
    return <FullScreenSpinner />;
  }

  return (
    <Container>
      <header>
        <h1>Home</h1>
        <h2>Welcome to SoundSync{user.name ? `, ${user.name}` : ""}!</h2>
        <>Your most convenient playlist manager</>
        <div>
          <Link to="/playlists/create">
            <Button>Create A New Playlist</Button>
          </Link>
          <Link to="/playlists">
            <Button>My Playlists</Button>
          </Link>
        </div>
      </header>
    </Container>
  );
}
