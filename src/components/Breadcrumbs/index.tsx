import { RouteObject, useLocation, useMatches } from "react-router-dom";
import styles from "./Breadcrumbs.module.scss";
import { FaAngleRight } from "react-icons/fa";
import React from "react";

export const Breadcrumbs = () => {
  const location = useLocation();
  let matches: RouteObject[] = useMatches();
  let crumbs: string[] = matches
    .filter((match: RouteObject) => Boolean(match.handle?.crumb))
    .map((match: RouteObject) => match.handle.crumb(match?.data));

  return (
    <div
      className={styles.breadcrumbs}
      style={{ display: location.pathname === "/login" ? "none" : "" }}
    >
      <ol>
        {crumbs.map((crumb: string, index: number) => (
          <React.Fragment key={index}>
            <li>{crumb}</li>
            {index < crumbs.length - 1 && (
              <li className={styles.arrow}>
                <FaAngleRight color="#547dc1" />
              </li>
            )}
          </React.Fragment>
        ))}
      </ol>
    </div>
  );
};
