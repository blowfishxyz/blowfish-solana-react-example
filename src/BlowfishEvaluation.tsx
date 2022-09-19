import React from "react";
import { useFetchBlowfishEvaluation } from "./useFetchBlowfishEvaluation";

export function BlowfishEvaluation() {
  const cluster = "mainnet-beta";
  const dBlowfishEvaluationUrl = "https://scammer.com";
  const userAccount = "5hPhdbH8bVXNrx2Cy9bM6bXkZhNUGAUizq9QQW7zMguz";
  const transactions = [
    "AQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAAIFRcely+GNw4HsXvDZ2vi8ZHSvnfYAbuGTK5XjxGyUJ60JrJ+YHtCWDBeA0FSzvcigxpHxRg4haKu4qFquf9nwtxDLqeLGT1Y9D3jvRn8BJWyEq8LHFGZpD+vfskCcD4EGAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAGp9UXGSxWjuCKhF9z0peIzwNcMUWyGrNE2AYuqUAAAD1D6qTjIhI3IvLaoY+jcKrCp7I8+Di2XK6tV2y4c2liAgMDAgQABAQAAAADAgABDAIAAAAA4fUFAAAAAA==",
  ];

  const txnsScanResult = useFetchBlowfishEvaluation(
    cluster,
    transactions,
    dBlowfishEvaluationUrl,
    userAccount,
    (error: any) => {
      console.log("Blowfish error encountered: ", error);
      // TODO(fabio): Log error with your telemetry service
    }
  );
  return (
    <div>
      <div>Action: {txnsScanResult && txnsScanResult.evaluation?.action}</div>
      <div>
        Warnings:{" "}
        {txnsScanResult && JSON.stringify(txnsScanResult.evaluation?.warnings)}
      </div>
      <div>
        <div>Simulation results:</div>
        <pre style={{ fontSize: 14 }}>
          {txnsScanResult &&
            JSON.stringify(
              txnsScanResult.evaluation?.simulationResults,
              null,
              "\t"
            )}
        </pre>
      </div>
    </div>
  );
}
