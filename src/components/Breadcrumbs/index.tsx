import React from "react";
import { RouteObject, useMatches } from "react-router-dom";
import styles from "./Breadcrumbs.module.scss";

export const Breadcrumbs = () => {
  let matches: RouteObject[] = useMatches();
  let crumbs: string[] = matches
    .filter((match: RouteObject) => Boolean(match.handle?.crumb))
    .map((match: RouteObject) => match.handle.crumb(match?.data));

  return (
    <div className={styles.breadcrumbs}>
      <ol>
        {crumbs.map((crumb: string, index: number) => (
          <li key={index}>{crumb}</li>
        ))}
      </ol>
    </div>
  );
};
