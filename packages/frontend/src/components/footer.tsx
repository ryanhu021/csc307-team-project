import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="py-3 bg-dark text-center text-white-50">
      © 2023 SoundSync | A cross-platform playlist manager | All rights
      reserved.
      <br />
      {/* <div
        style={{
          display: "flex",
          justifyContent: "center",
        }}
      > */}
      <a
        href="https://github.com/ryanhu021/csc307-team-project"
        target="_blank"
        rel="noreferrer"
        className={"text-white-50"}
      >
        <FontAwesomeIcon icon={faGithub} />
      </a>
      <div>
        <Link
          className={"text-white-50"}
          style={{ textDecoration: "none" }}
          to="/help"
        >
          Help
        </Link>
      </div>
      {/* </div> */}
    </footer>
  );
}
