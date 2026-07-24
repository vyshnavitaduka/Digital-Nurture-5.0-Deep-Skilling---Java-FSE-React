import React from "react";
import styles from "./CohortDetails.module.css";

function CohortDetails({ cohort }) {
  if (!cohort) return null;

  return (
    <div className={styles.detailsCard}>
      <h3>{cohort.name}</h3>
      <p>Students enrolled: {cohort.students}</p>
      <p>Start date: {cohort.startDate}</p>
    </div>
  );
}

export default CohortDetails;
